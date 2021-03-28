import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { View } from 'react-native';
import Navbar from '../Navbar';

function Home({navigation}) {
  return (
    <View>
	  <Navbar navigation={navigation}/>
      <HeroSection navigation={navigation} />
      <Cards />
      <Footer />
    </View>
  );
}

export default Home;
