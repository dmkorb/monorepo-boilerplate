import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const API_URL = process.env.API_URL || 'http://localhost:3000';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/api/message`)
      .then(response => response.json())
      .then(data => setMessage(data.message + ' ' + data.goServiceMessage));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to the Monorepo Demo</Text>
      <Text style={styles.message}>{message}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  message: {
    fontSize: 18,
  },
});

export default App;
