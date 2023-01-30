/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Icon, Input} from 'react-native-elements';
import {Text, View} from 'react-native';
import {Formik} from 'formik';

// Styles
import styles from './styles';

// Hooks
import useSignIn from './hooks/useSignIn';

export default function SignIn() {
  const {SigninSchema, goToSignUp, logIn, initialValue} = useSignIn();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas{'\n'}Compras</Text>

      <Formik
        initialValues={initialValue}
        onSubmit={(values, {setSubmitting}) =>
          logIn(values, setSubmitting)
        }
        validationSchema={SigninSchema}>
        {({
          handleSubmit,
          values,
          errors,
          isSubmitting,
          handleChange,
        }) => (
          <>
            <Input
              value={values.email}
              autoCapitalize={'none'}
              onChangeText={handleChange('email')}
              placeholder="Digite seu e-mail"
              errorStyle={styles.inputError}
              errorMessage={errors.email}
              leftIcon={
                <Icon name="email" size={24} color="#008000" />
              }
            />

            <Input
              value={values.pass}
              secureTextEntry
              onChangeText={handleChange('pass')}
              placeholder="Digite sua senha"
              errorStyle={styles.inputError}
              errorMessage={errors.pass}
              leftIcon={
                <Icon name="lock" size={24} color="#008000" />
              }
            />

            <Button
              title="Entrar"
              onPress={handleSubmit}
              loading={isSubmitting}
              buttonStyle={styles.buttonBackground}
            />

            <Button
              title="Cadastrar"
              type="clear"
              onPress={goToSignUp}
              titleStyle={styles.buttonText}
              buttonStyle={styles.button}
            />
          </>
        )}
      </Formik>
    </View>
  );
}
