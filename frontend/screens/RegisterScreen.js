import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRegister = async () => {
    console.log('=== CREATE ACCOUNT BUTTON PRESSED ===');
    console.log('Form data:', formData);
    console.log('Navigation object:', navigation);
    
    // Check if navigation exists
    if (!navigation || !navigation.navigate) {
      console.error('Navigation object is missing or invalid');
      Alert.alert('Error', 'Navigation error. Please restart the app.');
      return;
    }

    setIsLoading(true);

    try {
      // Basic validation
      if (!formData.fullName || formData.fullName.trim() === '') {
        console.log('Validation failed: Full name is empty');
        Alert.alert('Error', 'Please enter your full name');
        setIsLoading(false);
        return;
      }

      if (!formData.email || formData.email.trim() === '') {
        console.log('Validation failed: Email is empty');
        Alert.alert('Error', 'Please enter your email address');
        setIsLoading(false);
        return;
      }

      if (!formData.password) {
        console.log('Validation failed: Password is empty');
        Alert.alert('Error', 'Please enter a password');
        setIsLoading(false);
        return;
      }

      if (!formData.confirmPassword) {
        console.log('Validation failed: Confirm password is empty');
        Alert.alert('Error', 'Please confirm your password');
        setIsLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        console.log('Validation failed: Passwords do not match');
        Alert.alert('Error', 'Passwords do not match');
        setIsLoading(false);
        return;
      }

      if (formData.password.length < 6) {
        console.log('Validation failed: Password too short');
        Alert.alert('Error', 'Password must be at least 6 characters long');
        setIsLoading(false);
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        console.log('Validation failed: Invalid email format');
        Alert.alert('Error', 'Please enter a valid email address');
        setIsLoading(false);
        return;
      }

      console.log('All validations passed! Processing registration...');

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Registration successful!');
      setIsLoading(false);
      
      // Clear form data
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      Alert.alert(
        'Success',
        'Account created successfully! Please login with your credentials.',
        [
          {
            text: 'Go to Login',
            onPress: () => {
              console.log('Navigating to Login...');
              try {
                navigation.navigate('Login');
              } catch (navError) {
                console.error('Navigation error:', navError);
                Alert.alert('Error', 'Navigation failed. Please try again.');
              }
            }
          }
        ]
      );

    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  const navigateToLogin = () => {
    console.log('Navigate to Login link pressed!');
    try {
      if (navigation && navigation.navigate) {
        navigation.navigate('Login');
      } else {
        console.error('Navigation object is invalid');
        Alert.alert('Error', 'Navigation error. Please restart the app.');
      }
    } catch (error) {
      console.error('Navigation error:', error);
      Alert.alert('Error', 'Navigation failed. Please try again.');
    }
  };

  // Simple test to verify button functionality
  const testButtonFunctionality = () => {
    console.log('Button press detected!');
    Alert.alert('Test', 'Button is working correctly!');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Sign up to get started</Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={formData.fullName}
            onChangeText={(value) => handleInputChange('fullName', value)}
            autoCapitalize="words"
            editable={!isLoading}
            returnKeyType="next"
          />

          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!isLoading}
            returnKeyType="next"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
            secureTextEntry
            editable={!isLoading}
            returnKeyType="next"
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChangeText={(value) => handleInputChange('confirmPassword', value)}
            secureTextEntry
            editable={!isLoading}
            returnKeyType="done"
          />

         

          {/* Main Create Account Button */}
          <TouchableOpacity 
            style={[
              styles.registerButton, 
              isLoading && styles.disabledButton
            ]} 
            onPress={handleRegister}
            disabled={isLoading}
            activeOpacity={isLoading ? 1 : 0.7}
          >
            <Text style={styles.registerButtonText}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity 
              onPress={navigateToLogin} 
              disabled={isLoading}
              activeOpacity={0.7}
            >
              <Text style={[
                styles.loginLink, 
                isLoading && styles.disabledText
              ]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  formContainer: {
    padding: 20,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  testButton: {
    backgroundColor: '#FF9800',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  testButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  disabledButton: {
    backgroundColor: '#ccc',
    opacity: 0.6,
  },
  registerButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    color: '#666',
  },
  loginLink: {
    fontSize: 16,
    color: '#6200EE',
    fontWeight: 'bold',
  },
  disabledText: {
    color: '#ccc',
  },
  debugContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  debugTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  debugText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
});
