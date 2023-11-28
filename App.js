import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Toolbar from './components/Toolbar';
import MessageList from './components/MessageList';
import { createTextMessage, createImageMessage } from './utils/messageUtils';

export default class App extends React.Component {
  state = {
    messages: [
      // Initial messages if any
    ],
    isInputFocused: false,
  };

  handlePressMessage = (message) => {
    // Handle your logic for opening fullscreen image preview here

    // Set isInputFocused to false to dismiss the keyboard
    this.setState({ isInputFocused: false });
  };

  handlePressToolbarCamera = () => {
    // Placeholder for handling camera press
  };

  handlePressToolbarLocation = () => {
    // Placeholder for handling location press
  };

  handleChangeFocus = (isFocused) => {
    this.setState({ isInputFocused: isFocused });
  };

  handleSubmit = (text) => {
    const { messages } = this.state;
    this.setState({
      messages: [createTextMessage(text), ...messages],
    });
  };

  renderToolbar() {
    const { isInputFocused } = this.state;
    return (
      <View style={styles.toolbar}>
        <Toolbar
          isFocused={isInputFocused}
          onSubmit={this.handleSubmit}
          onChangeFocus={this.handleChangeFocus}
          onPressCamera={this.handlePressToolbarCamera}
          onPressLocation={this.handlePressToolbarLocation}
        />
      </View>
    );
  }

  render() {
    const { messages } = this.state;
    return (
      <View style={styles.container}>
        {this.renderToolbar()}
        <View style={styles.content}>
          <MessageList messages={messages} onPressMessage={this.handlePressMessage} />
        </View>
      </View>
    );
  }
}

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
