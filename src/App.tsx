import React from 'react';
import Home from './screens/home/Home';
import Info from './screens/home/Info';
import Player from './screens/home/Player';
import Settings from './screens/Settings';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type HomeStackParamList = {
  Home: undefined;
  Info: {link: string};
};

export type RootStackParamList = {
  TabStack: undefined;
  Player: {stream: string};
};
const Tab = createBottomTabNavigator();
const App = () => {
  const HomeStack = createNativeStackNavigator<HomeStackParamList>();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
          headerBlurEffect: 'light',
          headerTintColor: 'tomato',
          headerStyle: {backgroundColor: '#171717'},
        }}>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Info" component={Info} />
      </HomeStack.Navigator>
    );
  }

  function TabStack() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {backgroundColor: 'black'},
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStackScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({focused, color, size}) =>
              focused ? (
                <Ionicons name="home" color={color} size={size} />
              ) : (
                <Ionicons name="home-outline" color={color} size={size} />
              ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({focused, color, size}) =>
              focused ? (
                <Ionicons name="settings" color={color} size={size} />
              ) : (
                <Ionicons name="settings-outline" color={color} size={size} />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerBlurEffect: 'light',
          headerTintColor: 'tomato',
          headerStyle: {backgroundColor: '#171717'},
        }}>
        <Stack.Screen name="TabStack" component={TabStack} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;