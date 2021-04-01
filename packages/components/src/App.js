import * as React from 'react';
import {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as request from 'request';
import {isMobile} from "react-device-detect";

//import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Profile from './components/pages/Profile';
/*
If you have https
import * as avalancheApi from 'avalanche-api'
*/

import User from './store/User';


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
  if(isMobile){
	  return (
		  <ProfileMob navigation={navigation}  />
	  );
  } else {
	  return (
		  <Profile navigation={navigation}  />
	  );
  }
}

const getApiToken = () => {
	const client_id = 'RFNkSvxTlivttwan4YKDecFsOhAkdWnZ';
	const client_secret = 'huQLthIkJepOt1LKW1ye1ht__HuLwB_RlWPP6Q97tLGOjYiwBKHgMH5-Ln6rQdTp';
      return new Promise(function (resolve, reject) {
        var options = {
          method: "GET",
          url: "http://salty-reef-38656.herokuapp.com/events/updateTokenFromClientCreditentials?client_id="+client_id+"&client_secret="+client_secret,
          headers: { "content-type": "application/json" }
        };
        request(options, function (error, _, body) {
          if (error) {
			console.log('error update token', error);
            return "";
          }
          var jsonBody = JSON.parse(body);
		  
		  if(jsonBody.token){
			resolve(jsonBody.token);
		  } else {
			  resolve({});
		  }
        });
      });
};

const Stack = createStackNavigator();

function App() {
	
	const searchParams = new URLSearchParams(window.location.search);
    if(searchParams.get('refAPI_ref_code')){
		localStorage.setItem('refAPI_ref_code', searchParams.get('refAPI_ref_code')); //important to keep key as refAPI_ref_code
		document.cookie = `refAPI_ref_code=${searchParams.get('refAPI_ref_code')}`;
	}
	
	useEffect(async() => {
		/* If you have https
		const result = await avalancheApi.getApiToken({
			clientId: "xxivyv....",
			clientSecret: "nKqLZ1n0...."
		  });
		*/
	   const result = await getApiToken();
	   User.token = result;
	});
	
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
