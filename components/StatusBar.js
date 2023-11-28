import React from 'react';
import { View, Text, StyleSheet, Platform, Animated } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Constants from 'expo-constants';
import { StatusBar as RNStatusBar } from 'react-native';

export default class Status extends React.Component {
  state = {
    isConnected: true,
    bubbleOpacity: new Animated.Value(0),
  };

  componentDidMount() {
    this.getConnectionInfo();
    this.subscribeToConnectivityChanges();
  }

  componentWillUnmount() {
    this.unsubscribeFromConnectivityChanges();
  }

  getConnectionInfo = async () => {
    try {
      const state = await NetInfo.fetch();
      this.setState({ isConnected: state.isConnected });
      this.handleBubbleAnimation();
    } catch (error) {
      console.error('Error getting connection info:', error);
    }
  };

  subscribeToConnectivityChanges = () => {
    this.unsubscribe = NetInfo.addEventListener(this.handleConnectivityChange);
  };

  unsubscribeFromConnectivityChanges = () => {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  };

  handleConnectivityChange = (state) => {
    this.setState({ isConnected: state.isConnected });
    this.handleBubbleAnimation();
  };

  handleBubbleAnimation = () => {
    Animated.timing(this.state.bubbleOpacity, {
      toValue: this.state.isConnected ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  render() {
    const { isConnected } = this.state;
    const backgroundColor = isConnected ? '#758a83' : 'red';

    const statusBar = (
      <RNStatusBar
        backgroundColor={backgroundColor}
        barStyle={isConnected ? 'dark-content' : 'light-content'}
        animated={false}
      />
    );

    const messageContainer = (
      <View style={styles.messageContainer} pointerEvents="none">
        {statusBar}
        <Animated.View
          style={[
            styles.bubble,
            { opacity: this.state.bubbleOpacity },
          ]}
        >
          {!isConnected && (
            <Text style={styles.text}>No network connection</Text>
          )}
        </Animated.View>
      </View>
    );

    if (Platform.OS === 'ios') {
      return (
        <View style={[styles.status, { backgroundColor }]}>
          {messageContainer}
        </View>
      );
    }

    return messageContainer;
  }
}

const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: Constants.statusBarHeight,
  },
  messageContainer: {
    zIndex: 1,
    position: 'absolute',
    top: Constants.statusBarHeight + 20,
    right: 0,
    left: 0,
    height: 80,
    alignItems: 'center',
  },
  bubble: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
  },
});
