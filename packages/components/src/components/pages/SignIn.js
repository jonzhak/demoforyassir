import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import { View } from 'react-native';

export default function SignIn({navigation}) {
  return (
	<View>
		<Navbar navigation={navigation} />
		<h1 className='sign-In'>sign In</h1>
	</View>
	);
}
