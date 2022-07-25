/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Provider as ThemeProvider} from 'react-native-paper';
import {View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation';
import theme from './src/theme';
import InternetConectionCard from './src/components/InternetConnectionCard';

const App: () => Node = () => {
  const [connected, setConnected] = React.useState(true);
  const checkConnectivity = () => {
    NetInfo.addEventListener(state => {
      setConnected(Boolean(state.isConnected));
    });
  };
  React.useEffect(() => {
    checkConnectivity();
    SplashScreen.hide();
  }, [connected]);
  return (
    <>
      {connected ? (
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <View style={{backgroundColor: theme.colors.primary, height: '100%'}}>
            <InternetConectionCard message="Please Enable Internet Connection To Continue Using App." />
          </View>
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
