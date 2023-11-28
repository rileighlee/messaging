// MessageList.js
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
import PropTypes from 'prop-types';

import { MessageShape } from '../utils/messageUtils';

class MessageList extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(MessageShape).isRequired,
    onPressMessage: PropTypes.func,
  };

  static defaultProps = {
    onPressMessage: () => {},
  };

  renderMessageBody = ({ type, text, uri, coordinate }) => {
    switch (type) {
      case 'text':
        return (
          <View style={styles.messageBubble}>
            <Text style={styles.text}>{text}</Text>
          </View>
        );

      case 'image':
        return <Image style={styles.image} source={{ uri }} />;

      case 'location':
        return (
          <MapView
            style={{ width: 150, height: 150, borderRadius: 10 }}
            initialRegion={{
              ...coordinate,
              latitudeDelta: 0.08,
              longitudeDelta: 0.04,
            }}
          >
            <MapView.Marker coordinate={coordinate} />
          </MapView>
        );

      default:
        return null;
    }
  };

  renderMessageItem = ({ item }) => {
    const { type, text, uri, coordinate } = item;
    const dynamicStyles = {
      maxWidth: type === 'text' ? '30%' : '46%',
    };

    return (
      <View
        key={item.id}
        style={[styles.messageContainer, dynamicStyles, type === 'image' && styles.imageContainer]}
      >
        {this.renderMessageBody(item)}
      </View>
    );
  };

  render() {
    const { messages } = this.props;

    return (
      <FlatList
        style={styles.container}
        data={messages}
        renderItem={this.renderMessageItem}
        keyExtractor={(item) => item.id.toString()}
        keyboardShouldPersistTaps="handled"
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
  },
  messageContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#00A9FF',
    alignSelf: 'flex-end', // Align the message container to the right
  },
  messageBubble: {
    borderRadius: 10,
  },
  text: {
    color: 'white',
  },
  imageContainer: {
    backgroundColor: 'transparent', 
    alignSelf: 'flex-end', 
  },
  locationContainer: {
    backgroundColor: '#e0e0e0',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10, 
  },
});

export default MessageList;
