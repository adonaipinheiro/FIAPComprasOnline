import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Routes
import StackRouter from './stack';

export default function Router() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}
