import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import {isMobile} from "react-device-detect";
import { WebView } from 'react-native-webview';
import User from '../../store/User';

export default function Profile({navigation}) {
  if(!User.isAuthenticated){
	  navigation.push('SignIn')
  }
  
  const name = User.name;
  const email = User.email;
  const token = User.token;
  const redirectUrl = "https://localhost:3000";
  const baseUrl = "https://localhost:3000";
  const url_invite = "https://refer-ui-two.vercel.app/?email=" + email + "&name=" + name + "&redirect_uri=" + redirectUrl + "&base_url=" + baseUrl + "&token=" + token
  const url_statistics = "https://refer-ui-two.vercel.app/referrals?email=" + email + "&token=" + token
  return (
	<div>
		<Navbar navigation={navigation} />
		<h1 className='profile'>Profile</h1>
		<WebView 
			source={{ uri: url_invite }} 
			scroling="no" 
			sandbox="allow-top-navigation allow-scripts allow-same-origin allow-forms allow-popups"
			width="100%" 
			height="900px" 
			scrollEnabled={false}
			showsHorizontalScrollIndicator={false}
		/>
		<WebView 
			source={{ uri: url_statistics }}
			scroling="no" 
			sandbox="allow-top-navigation allow-scripts allow-same-origin allow-forms allow-popups"
			width="100%" 
			height="900px" 
			scrollEnabled={false}
			showsHorizontalScrollIndicator={false}
		/> 
	</div>
	);
}
