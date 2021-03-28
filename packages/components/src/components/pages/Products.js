import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import { View } from 'react-native';

export default function Products({navigation}) {
  return (
	<View>
		<Navbar navigation={navigation} />
		<h1 className='products'>PRODUCTS</h1>
	</View>
	);
}
