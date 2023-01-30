/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Icon, Input} from 'react-native-elements';
import {Text, View} from 'react-native';
import {Formik} from 'formik';

// Styles
import styles from './styles';

// Hooks
import useSignUp from './hooks/useSignUp';

export default function SignUp() {
  const {SignupSchema, goToSignIn, signUp, initialValue} =
    useSignUp();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas{'\n'}Compras</Text>

      <Formik
        initialValues={initialValue}
        onSubmit={(values, {setSubmitting}) =>
          signUp(values, setSubmitting)
        }
        validationSchema={SignupSchema}>
        {({
          handleSubmit,
          values,
          errors,
          isSubmitting,
          handleChange,
        }) => (
          <>
            <Input
              value={values.name}
              autoCapitalize={'words'}
              onChangeText={handleChange('name')}
              placeholder="Digite seu nome"
              errorStyle={styles.inputError}
              errorMessage={errors.name}
              leftIcon={
                <Icon name="person" size={24} color="#008000" />
              }
            />

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
              title="Cadastrar"
              onPress={handleSubmit}
              loading={isSubmitting}
              buttonStyle={styles.buttonBackground}
            />

            <Button
              title="Entrar com e-mail"
              type="clear"
              onPress={goToSignIn}
              titleStyle={styles.buttonText}
              buttonStyle={styles.button}
            />
          </>
        )}
      </Formik>
    </View>
  );
}
