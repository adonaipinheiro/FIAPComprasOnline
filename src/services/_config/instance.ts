import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Platform} from 'react-native';

const instance = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://10.0.2.2:3000'
      : 'http://localhost:3000',
  timeout: 1000,
  headers: {
    'content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('@TOKEN');

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default instance;
