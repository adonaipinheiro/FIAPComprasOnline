import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {DrawerContentComponentProps} from '@react-navigation/drawer/lib/typescript/src/types';
import {useNavigation} from '@react-navigation/native';

// Screens
import BottomTabsRouter from '../bottomTabs';

// Types
import {DrawerParamList, RouterProp} from '../types';

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

  function logOut() {
    navigation.reset({
      index: 0,
      routes: [{name: 'SignIn'}],
    });
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={logOut} inactiveTintColor="#FF0000" />
    </DrawerContentScrollView>
  );
}
