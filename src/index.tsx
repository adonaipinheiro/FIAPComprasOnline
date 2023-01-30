import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './stores';
import Router from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#004d00'} />
      <Router />
    </Provider>
  );
}
