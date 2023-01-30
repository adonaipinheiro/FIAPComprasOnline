import React from 'react';
import {StatusBar} from 'react-native';
import Router from './routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#004d00'} />
      <Router />
    </>
  );
}
