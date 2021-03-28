import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import { View } from 'react-native';

export default function Services({navigation}) {
  return (
	<View>
		<Navbar navigation={navigation} />
		<h1 className='services'>SERVICES</h1>
	</View>
	);
}
