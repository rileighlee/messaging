import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Toolbar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Text</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Images</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'blue',

    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default Toolbar;
