/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerContentComponentProps} from '@react-navigation/drawer/lib/typescript/src/types';
import {useNavigation} from '@react-navigation/native';
import {
  RootState,
  setUser,
  useAppDispatch,
  useAppSelector,
} from '../../stores';

// Screens
import BottomTabsRouter from '../bottomTabs';

// Types
import {DrawerParamList, RouterProp} from '../types';
import {getUserRequest} from '../../services';
import {StyleSheet} from 'react-native';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerRouter() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerTintColor: '#008000',
        drawerInactiveTintColor: '#008000',
        drawerActiveTintColor: '#008000',
        drawerActiveBackgroundColor: '#00800020',
      }}>
      <Drawer.Screen
        name="BottomRouter"
        component={BottomTabsRouter}
        options={{
          title: 'Lista de Compras',
        }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const navigation = useNavigation<RouterProp>();
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  async function logOut() {
    AsyncStorage.removeItem('@TOKEN');
    navigation.reset({
      index: 0,
      routes: [{name: 'SignIn'}],
    });
  }

  const getUser = () => {
    getUserRequest().then(resp => {
      dispatch(
        setUser({name: resp.data.name, email: resp.data.email}),
      );
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileImageArea}>
        <Text style={styles.profileImageText}>
          {user.name.split('')[0].toLocaleUpperCase()}
        </Text>
      </View>
      <View style={styles.profileArea}>
        <Text style={styles.profileText}>Bem-vindo, {user.name}</Text>
      </View>
      <ScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Sair"
          onPress={logOut}
          inactiveTintColor="#FF0000"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  profileArea: {
    padding: 10,
  },
  profileText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileImageArea: {
    backgroundColor: '#00000020',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageText: {
    fontSize: 46,
    color: '#FFFFFF',
  },
});
