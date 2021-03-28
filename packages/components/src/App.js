import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Profile from './components/pages/Profile';


function HomeScreen({navigation}) {
  return (
      <Home navigation={navigation} />
  );
}

function ServicesScreen({navigation}) {
  return (
      <Services navigation={navigation} />
  );
}

function ProductsScreen({navigation}) {
  return (
      <Products navigation={navigation} />
  );
}

function SignUpScreen({navigation}) {
  return (
      <SignUp navigation={navigation} />
  );
}

function SignInScreen({navigation}) {
  return (
      <SignIn navigation={navigation} />
  );
}

function ProfileScreen({navigation}) {
  return (
      <Profile navigation={navigation} />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Services" component={ServicesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Products" component={ProductsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
