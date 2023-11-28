import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import StatusBar from './components/StatusBar';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';
import {
  createTextMessage,
  createImageMessage,
  createLocationMessage,
} from './utils/messageUtils';

const App = () => {
  const [messages, setMessages] = useState([
    createTextMessage('Hello, Team!'),
    createTextMessage('Let\'s have a team dinner here:'),
    createImageMessage(require('./assets/italiannis.jpg')),
    createImageMessage(require('./assets/glorietta.png')),
  ]);

  const handleSend = (message) => {
    
    setMessages([...messages, message]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.content}>
          <MessageList messages={messages} />
        </View>
        {}
        <Toolbar
          isFocused={false}
          onChangeFocus={() => {}}
          onSubmit={handleSend}
          onPressCamera={() => {}}
          onPressLocation={() => {}}
        />
      </View>
    </KeyboardAvoidingView>
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
