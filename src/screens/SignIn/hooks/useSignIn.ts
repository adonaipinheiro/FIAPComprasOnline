import {useNavigation} from '@react-navigation/native';
import type {RouterProp} from '../../../routes/types';
import * as Yup from 'yup';

export default function useSignIn() {
  const navigation = useNavigation<RouterProp>();

  const initialValue = {email: '', pass: ''};

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
    values: {
      email: string;
      pass: string;
    },
    setSubmitting: (submit: boolean) => void,
  ) {
    navigation.reset({
      index: 0,
      routes: [{name: 'Logged'}],
    });
    setSubmitting(false);
  }

  return {
    SigninSchema,
    logIn,
    goToSignUp,
    initialValue,
  };
}
