import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  title: {
    margin: 20,
    fontSize: 36,
    textAlign: 'center',
    color: '#008000',
  },
  inputError: {
    color: 'red',
  },
  buttonText: {
    color: '#008000',
  },
  button: {
    marginTop: 10,
    width: Dimensions.get('screen').width - 40,
  },
  buttonBackground: {
    marginTop: 10,
    backgroundColor: '#008000',
    width: Dimensions.get('screen').width - 40,
  },
});

export default styles;
