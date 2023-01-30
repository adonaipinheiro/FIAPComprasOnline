import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import DrawerRouter from '../drawer';

// Types
import type {StackParamList} from '../types';

const Stack = createStackNavigator<StackParamList>();

export default function StackRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#008000',
        },
        headerBackTitle: ' ',
        headerTintColor: '#FFFFFF',
      }}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Compras Online',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'Cadastro',
        }}
      />
      <Stack.Screen
        name="Logged"
        component={DrawerRouter}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
