import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from '../pages/LandingPage';
import CharacterDetailsPage from '../pages/CharacterDetailsPage';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen
          name="CharacterDetailsPage"
          component={CharacterDetailsPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
