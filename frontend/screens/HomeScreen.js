// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
// } from 'react-native';

// export default function HomeScreen({ navigation }) {
//   const handleLogout = () => {
//     Alert.alert(
//       'Logout',
//       'Are you sure you want to logout?',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'Logout',
//           onPress: () => navigation.navigate('Login'),
//         },
//       ]
//     );
//   };

//   const features = [
//     { id: 1, title: 'Profile', description: 'Manage your profile settings' },
//     { id: 2, title: 'Settings', description: 'App preferences and configuration' },
//     { id: 3, title: 'Notifications', description: 'Manage your notifications' },
//     { id: 4, title: 'Help & Support', description: 'Get help and contact support' },
//   ];

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.welcomeText}>Welcome to Your App!</Text>
//         <Text style={styles.subtitle}>You have successfully logged in</Text>
//       </View>

//       <View style={styles.content}>
//         <Text style={styles.sectionTitle}>Quick Actions</Text>
        
//         {features.map((feature) => (
//           <TouchableOpacity key={feature.id} style={styles.featureCard}>
//             <Text style={styles.featureTitle}>{feature.title}</Text>
//             <Text style={styles.featureDescription}>{feature.description}</Text>
//           </TouchableOpacity>
//         ))}

//         <View style={styles.statsContainer}>
//           <View style={styles.statCard}>
//             <Text style={styles.statNumber}>24</Text>
//             <Text style={styles.statLabel}>Days Active</Text>
//           </View>
//           <View style={styles.statCard}>
//             <Text style={styles.statNumber}>156</Text>
//             <Text style={styles.statLabel}>Actions</Text>
//           </View>
//           <View style={styles.statCard}>
//             <Text style={styles.statNumber}>89%</Text>
//             <Text style={styles.statLabel}>Progress</Text>
//           </View>
//         </View>

//         <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//           <Text style={styles.logoutButtonText}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#6200EE',
//     padding: 30,
//     paddingTop: 20,
//     alignItems: 'center',
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#E8EAED',
//   },
//   content: {
//     padding: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     color: '#333',
//   },
//   featureCard: {
//     backgroundColor: '#fff',
//     padding: 20,
//     marginBottom: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 3.84,
//     elevation: 3,
//   },
//   featureTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//   },
//   featureDescription: {
//     fontSize: 14,
//     color: '#666',
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//     marginBottom: 30,
//   },
//   statCard: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     flex: 1,
//     marginHorizontal: 5,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 3.84,
//     elevation: 3,
//   },
//   statNumber: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#6200EE',
//     marginBottom: 5,
//   },
//   statLabel: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
//   },
//   logoutButton: {
//     backgroundColor: '#FF5722',
//     padding: 15,
//     borderRadius: 8,
//     marginTop: 20,
//   },
//   logoutButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });



import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => navigation.navigate('Login'),
        },
      ]
    );
  };

  const features = [
    { id: 1, title: 'Profile', description: 'Manage your profile settings' },
    { id: 2, title: 'Settings', description: 'App preferences and configuration' },
    { id: 3, title: 'Notifications', description: 'Manage your notifications' },
    { id: 4, title: 'Help & Support', description: 'Get help and contact support' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to Your App!</Text>
        <Text style={styles.subtitle}>You have successfully logged in</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        
        {features.map((feature) => (
          <TouchableOpacity key={feature.id} style={styles.featureCard}>
            <Text style={styles.featureTitle}>{feature.title}</Text>
            <Text style={styles.featureDescription}>{feature.description}</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Days Active</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Actions</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>89%</Text>
            <Text style={styles.statLabel}>Progress</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200EE',
    padding: 30,
    paddingTop: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#E8EAED',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  featureCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
