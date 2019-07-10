import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeTab from './HomeTab';


import SettingsScreen from './SearchTab'

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeTab },
  Settings: { screen: SettingsScreen },
});
const TabContainer =createAppContainer(TabNavigator)
export default TabContainer;