import React, {
  StyleSheet,
  Component,
  Navigator
} from 'react-native';

import MainScene from './MainScene';
import ZoomedIn from './ZoomedIn';

class Navigation extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{id: 'main'}}
        renderScene={this.navigatorRenderScene}
      />
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'main':
        return (<MainScene navigator={navigator} title="Main Scene"/>);
      case 'zoomedIn':
        return (<ZoomedIn navigator={navigator} title="Zoomed In"/>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default Navigation;