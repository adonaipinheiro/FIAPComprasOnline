/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Types
import type {BottomTabsParamList} from '../types';

// Screens
import ShopList from '../../screens/ShopList';
import AddProduct from '../../screens/AddProduct';

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

export default function BottomTabsRouter() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          color: '#008000',
        },
        tabBarActiveTintColor: '#008000',
      }}>
      <BottomTabs.Screen
        name="ShoList"
        component={ShopList}
        options={{
          title: 'Compras',
          tabBarLabel: ({children, focused, color}) =>
            focused && (
              <Text style={{color, fontSize: 12, marginBottom: 5}}>
                {children}
              </Text>
            ),
          tabBarIcon: ({color}) => <Icon name="shop" color={color} />,
        }}
      />
      <BottomTabs.Screen
        name="AddProduct"
        component={AddProduct}
        options={{
          title: 'Adicionar',
          tabBarLabel: ({children, focused, color}) =>
            focused && (
              <Text style={{color, fontSize: 12, marginBottom: 5}}>
                {children}
              </Text>
            ),
          tabBarIcon: ({color}) => <Icon name="add" color={color} />,
        }}
      />
    </BottomTabs.Navigator>
  );
}
