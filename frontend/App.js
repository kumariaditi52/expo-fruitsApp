import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

// Import screens
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Register');

  const navigate = (screenName) => {
    setCurrentScreen(screenName);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Register':
        return <RegisterScreen navigation={{ navigate }} />;
      case 'Login':
        return <LoginScreen navigation={{ navigate }} />;
      case 'Home':
        return <HomeScreen navigation={{ navigate }} />;
      default:
        return <RegisterScreen navigation={{ navigate }} />;
    }
  };

  return (
    <>
      <StatusBar style="auto" />
      {renderScreen()}
    </>
  );
}
