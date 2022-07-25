import {DefaultTheme, configureFonts} from 'react-native-paper';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Alata-Regular',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Alata-Regular',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Alata-Regular',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 20,
  colors: {
    primary: '#FB6467',
    white: '#ffffff',
    black: '#000000',
    background: '#FB6467',
    offset: '#8B8484',
    text: '#000',
  },
  font: configureFonts(fontConfig),
};

export default theme;
