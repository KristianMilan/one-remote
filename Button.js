import React, {
  StyleSheet,
  TouchableHighlight,
  PropTypes
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const iconSize = {
  small: 36,
  medium: 36,
  large: 72
};

const Button = ({ icon, size='medium', color='#333', borderOpen='none', onPress }) => (
  <TouchableHighlight style={[styles.button, styles[size], styles[borderOpen]]}
                      underlayColor='#ccc'
                      onPress={onPress}
  >
    <Icon name={icon} size={iconSize[size]} color={color}/>
  </TouchableHighlight>
);

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  borderOpen: PropTypes.oneOf(['all', 'none', 'top', 'right', 'bottom', 'left']),
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  none: {},
  right: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
    marginRight: 0
  },
  left: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
    marginLeft: 0
  },
  top: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopWidth: 0,
    margin: 0
  },
  bottom: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
    margin: 0
  },
  all: {
    borderWidth: 0,
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0
  },
  button: {
    borderStyle: 'solid',
    borderRadius: 38,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  small: {
    padding: 10
  },
  medium: {
    margin: 10
  },
  large: {
    flex: 1
  }
});

export default Button;