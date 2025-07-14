// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';

// export default function LoginScreen({ navigation }) {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleLogin = () => {
//     // Basic validation
//     if (!formData.email || !formData.password) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       Alert.alert('Error', 'Please enter a valid email address');
//       return;
//     }

//     // Simulate login success
//     Alert.alert(
//       'Success',
//       'Login successful!',
//       [
//         {
//           text: 'OK',
//           onPress: () => navigation.navigate('Home')
//         }
//       ]
//     );
//   };

//   const navigateToRegister = () => {
//     navigation.navigate('Register');
//   };

//   return (
//     <KeyboardAvoidingView 
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <View style={styles.formContainer}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <Text style={styles.subtitle}>Sign in to your account</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Email Address"
//           value={formData.email}
//           onChangeText={(value) => handleInputChange('email', value)}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={formData.password}
//           onChangeText={(value) => handleInputChange('password', value)}
//           secureTextEntry
//         />

//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.loginButtonText}>Sign In</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.forgotPassword}>
//           <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//         </TouchableOpacity>

//         <View style={styles.registerContainer}>
//           <Text style={styles.registerText}>Don't have an account? </Text>
//           <TouchableOpacity onPress={navigateToRegister}>
//             <Text style={styles.registerLink}>Sign Up</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   formContainer: {
//     padding: 20,
//     margin: 20,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 10,
//     color: '#333',
//   },
//   subtitle: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 30,
//     color: '#666',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     padding: 15,
//     marginBottom: 15,
//     borderRadius: 8,
//     fontSize: 16,
//     backgroundColor: '#f9f9f9',
//   },
//   loginButton: {
//     backgroundColor: '#6200EE',
//     padding: 15,
//     borderRadius: 8,
//     marginTop: 10,
//   },
//   loginButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   forgotPassword: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   forgotPasswordText: {
//     color: '#6200EE',
//     fontSize: 16,
//   },
//   registerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   registerText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   registerLink: {
//     fontSize: 16,
//     color: '#6200EE',
//     fontWeight: 'bold',
//   },
// });


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
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      // Basic validation
      if (!formData.email || !formData.password) {
        Alert.alert('Error', 'Please fill in all fields');
        setIsLoading(false);
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        Alert.alert('Error', 'Please enter a valid email address');
        setIsLoading(false);
        return;
      }

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Login successful - navigate to home
      setIsLoading(false);
      
      Alert.alert(
        'Success',
        'Login successful! Welcome back!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Home')
          }
        ]
      );

    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Login failed. Please try again.');
      setIsLoading(false);
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!isLoading}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
          secureTextEntry
          editable={!isLoading}
        />

        <TouchableOpacity 
          style={[styles.loginButton, isLoading && styles.disabledButton]} 
          onPress={handleLogin}
          disabled={isLoading}
          activeOpacity={0.7}
        >
          <Text style={styles.loginButtonText}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPassword} disabled={isLoading}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={navigateToRegister} disabled={isLoading}>
            <Text style={styles.registerLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
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
  loginButton: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#6200EE',
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    fontSize: 16,
    color: '#666',
  },
  registerLink: {
    fontSize: 16,
    color: '#6200EE',
    fontWeight: 'bold',
  },
});
