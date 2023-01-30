import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {Alert} from 'react-native';
import {signInRequest} from '../../../services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {RouterProp} from '../../../routes/types';

export default function useSignIn() {
  const navigation = useNavigation<RouterProp>();

  const initialValue = {email: 'admin@admin.com', pass: '123456'};

  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email('Por favor, informar um e-mail válido')
      .required('O campo não pode estar em branco'),
    pass: Yup.string().required('O campo não pode estar em branco'),
  });

  function goToSignUp() {
    navigation.push('SignUp');
  }

  function logIn(
    values: typeof initialValue,
    setSubmitting: (submit: boolean) => void,
  ) {
    signInRequest(values.email, values.pass)
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
    SigninSchema,
    logIn,
    goToSignUp,
    initialValue,
  };
}
