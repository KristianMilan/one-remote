import React, {
  StatusBar,
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from './Button';
import command from './command';

class MainScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Button icon="settings-power" color="#c00" borderOpen="all" size="small"
                  onPress={this._onPowerAllButtonPress.bind(this)}/>
          <View>
            <Text style={styles.headerText}>
              <Icon style={styles.blackIcon} name="settings-remote" size={36} color="#333"/>One
              Remote
            </Text>
          </View>
          <Button icon="zoom-in" borderOpen="all" size="small" onPress={this._onZoomIn.bind(this)}/>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TV</Text>
          <View style={styles.sectionBody}>
            <Button icon="power-settings-new" color="#c00" onPress={command.send.bind(this, 'samsung', 'power')}/>
            <View style={{flexDirection: 'row'}}>
              <Button icon="volume-down" borderOpen="right" onPress={command.send.bind(this, 'samsung', 'volumeDown')}/>
              <Button icon="volume-up" borderOpen="left" onPress={command.send.bind(this, 'samsung', 'volumeUp')}/>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Speakers</Text>
          <View style={styles.sectionBody}>
            <Button icon="power-settings-new" color="#c00" onPress={command.send.bind(this, 'bose', 'power')}/>
            <View style={{flexDirection: 'row'}}>
              <Button icon="volume-down" borderOpen="right" onPress={command.send.bind(this, 'bose', 'volumeDown')}/>
              <Button icon="volume-up" borderOpen="left" onPress={command.send.bind(this, 'bose', 'volumeUp')}/>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Apple TV</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <Button icon="power-settings-new" color="#c00" onPress={command.send.bind(this, 'apple', 'power')}/>
              <Button icon="menu" onPress={command.send.bind(this, 'apple', 'menu')}/>
              <Button icon="play-arrow" onPress={command.send.bind(this, 'apple', 'play')}/>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Button icon="keyboard-arrow-left" borderOpen="right" onPress={command.send.bind(this, 'apple', 'up')}/>
              <View style={{flexDirection: 'column'}}>
                <Button icon="keyboard-arrow-up" borderOpen="bottom"
                        onPress={command.send.bind(this, 'apple', 'left')}/>
                <Button icon="keyboard-return" borderOpen="all" onPress={command.send.bind(this, 'apple', 'select')}/>
                <Button icon="keyboard-arrow-down" borderOpen="top" onPress={command.send.bind(this, 'apple', 'down')}/>
              </View>
              <Button icon="keyboard-arrow-right" borderOpen="left"
                      onPress={command.send.bind(this, 'apple', 'right')}/>
            </View>
          </View>
        </View>
      </View>
    );
  }

  _onZoomIn() {
    this.props.navigator.push({
      id: 'zoomedIn'
    });
  }

  _onPowerAllButtonPress() {
    ['samsung', 'apple', 'bose'].forEach(device => {
      command.send(device, 'power');
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eee',
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    borderStyle: 'solid'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  section: {
    paddingTop: 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    borderStyle: 'solid'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  sectionBody: {
    flexDirection: 'row'
  }
});

export default MainScene;