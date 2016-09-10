import {StyleSheet} from 'react-native';

const baseFontSize = 18;

var styles = StyleSheet.create({
  bigText: {
    fontSize: baseFontSize + 18,
    color: '#FFFFFF'
  },
  mainText: {
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
});

styles['baseFontSize'] = baseFontSize;

export default styles;
