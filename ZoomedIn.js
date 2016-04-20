import React, {
  Component,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Button from './Button';
import command from './command';

class ZoomedIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button icon="volume-up" borderOpen="all" size="large" onPress={command.send.bind(this, 'bose', 'volumeUp')} />
        <Button icon="volume-down" borderOpen="all" size="large" onPress={command.send.bind(this, 'bose', 'volumeDown')} />
        <View style={styles.topRight}>
          <Button icon="zoom-out" borderOpen="all" size="small" onPress={this._onZoomOut.bind(this)} />
        </View>
        <View style={styles.bottomRight}>
          <Button icon="play-arrow" borderOpen="all" size="small" onPress={command.send.bind(this, 'apple', 'play')} />
        </View>
      </View>
    );
  }

  _onZoomOut() {
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  topRight: {
    position: 'absolute',
    right: 0,
    top: 0
  },
  bottomRight: {
    position: 'absolute',
    right: 0,
    bottom: 0
  }
});

export default ZoomedIn;