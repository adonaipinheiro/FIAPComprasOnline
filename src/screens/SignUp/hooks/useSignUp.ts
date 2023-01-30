import {useNavigation} from '@react-navigation/native';
import type {RouterProp} from '../../../routes/types';
import * as Yup from 'yup';

export default function useSignUp() {
  const navigation = useNavigation<RouterProp>();

  const initialValue = {name: '', email: '', pass: ''};

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
    navigation.reset({
      index: 0,
      routes: [{name: 'Logged'}],
    });
    setSubmitting(false);
  }

  return {
    SignupSchema,
    signUp,
    goToSignIn,
    initialValue,
  };
}
