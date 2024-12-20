import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Pokedex from '../screens/Pokedex';
import PokedexDetail from '../screens/PokedexDetail';
import CameraScreen from '../screens/CameraScreen';

export const RootStack = createNativeStackNavigator({
  screens: {
    Pokedex: {
      screen: Pokedex,
      options: {
        headerShown: false,
      },
    },
    PokemonDetail: {
      screen: PokedexDetail,
      options: {
        title: 'Pokemon',
      },
    },
    Login: {
      screen: Login,
      options: {
        title: 'Trainocate Login',
      },
    },
    Home: {
      screen: Home,
      options: {
        title: 'Trainocate Home',
      },
    },
    Camera: {
      screen: CameraScreen,
    },
  },
});

const AppNavigation = createStaticNavigation(RootStack);

export default function Navigation() {
  return <AppNavigation />;
}



export type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
