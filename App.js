import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StatusBar from './components/StatusBar';
import MessageList from './components/MessageList';
import { createTextMessage, createImageMessage, createLocationMessage } from './utils/messageUtils';

const App = () => {
  const [messages, setMessages] = useState([
    createTextMessage('Hello, Team!'),
    createTextMessage('Let\'s have a team dinner here:'),
    createImageMessage(require('./assets/italiannis.jpg')),
    createImageMessage(require('./assets/glorietta.png')),
  ]);

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.content}>
        <MessageList messages={messages} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;

