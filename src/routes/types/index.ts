import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type BottomTabsParamList = {
  ShoList: undefined;
  AddProduct: undefined;
};

export type DrawerParamList = {
  BottomRouter: NavigatorScreenParams<BottomTabsParamList>;
};

export type StackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Logged: NavigatorScreenParams<DrawerParamList>;
};

export type RouterProp = StackNavigationProp<StackParamList>;
