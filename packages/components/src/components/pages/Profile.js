import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import { View } from 'react-native';
import User from '../../store/User';

export default function Profile({navigation}) {
  return (
	<View>
		<Navbar navigation={navigation} />
		<h1 className='profile'>Profile</h1>
	</View>
	);
}
