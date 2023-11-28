import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Status = () => {
  return (
    <View style={styles.statusBar}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.container}>
        <Text>Status Component</Text>
        {/* Add your status content here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#ffffff',
  },
  container: {
    // Add your styles here
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Status;
