import React, {
  StatusBar,
  AppRegistry,
  Component,
  View,
  StyleSheet
} from 'react-native';

import Navigation from './Navigation';

class OneRemote extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

AppRegistry.registerComponent('OneRemote', () => OneRemote);