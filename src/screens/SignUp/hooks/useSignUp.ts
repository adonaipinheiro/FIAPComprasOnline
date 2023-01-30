import {useNavigation} from '@react-navigation/native';
import type {RouterProp} from '../../../routes/types';
import * as Yup from 'yup';
import {signUpRequest} from '../../../services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export default function useSignUp() {
  const navigation = useNavigation<RouterProp>();

  const initialValue = {
    name: 'Adonai Pinheiro',
    email: 'adonai@fiap.com',
    pass: '123456',
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required('O campo não pode estar em branco'),
    email: Yup.string()
      .email('Por favor, informar um e-mail válido')
      .required('O campo não pode estar em branco'),
    pass: Yup.string().required('O campo não pode estar em branco'),
  });

  function goToSignIn() {
    navigation.reset({
      index: 0,
      routes: [{name: 'SignIn'}],
    });
  }

  function signUp(
    values: typeof initialValue,
    setSubmitting: (submit: boolean) => void,
  ) {
    signUpRequest(values.name, values.email, values.pass)
      .then(async resp => {
        await AsyncStorage.setItem('@TOKEN', resp.data.token);
        navigation.reset({
          index: 0,
          routes: [{name: 'Logged'}],
        });
      })
      .catch(err => {
        Alert.alert('Atenção', err.response?.data?.message);
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  return {
    SignupSchema,
    signUp,
    goToSignIn,
    initialValue,
  };
}
