import React from 'react';
import 'reflect-metadata';
import { Provider } from 'mobx-react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import stores from './src/stores';

//Screens
import HomeScreen from './src/screens/Home';
import DetailSketchScreen from './src/screens/DetailSketch';
import NewSketchScreen from './src/screens/NewSketch';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider {...stores}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ title: 'My Sketches' }} component={HomeScreen} />
          <Stack.Screen name="MyAwesomeSketch" options={{ title: 'My Awesome Sketch' }} component={DetailSketchScreen} />
          <Stack.Screen name="NewSketch" options={{ title: 'New Sketch' }} component={NewSketchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
