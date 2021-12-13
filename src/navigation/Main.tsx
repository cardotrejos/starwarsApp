import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Movies} from '../screens/Movies';
import {Movie} from '../screens/Movie';
import {MainStackParamList} from '../types';

const MainStack = createStackNavigator<MainStackParamList>();
export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Movies" component={Movies} />
    <MainStack.Screen name="Movie" component={Movie} />
  </MainStack.Navigator>
);
