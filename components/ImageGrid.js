import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImageGrid = () => {
  return (
    <View style={styles.container}>
      <Text>Image Grid Component</Text>
      {/* Add your image grid content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red'
  },
});

export default ImageGrid;
