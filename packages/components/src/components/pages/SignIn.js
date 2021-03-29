import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import { View } from 'react-native';

import {StyleSheet} from 'react-native';

import {Heading} from '../Heading';
import {Input} from '../Input';
import {FilledButton} from '../FilledButton';
import {TextButton} from '../TextButton';
import {Error} from '../Error';
import {AuthContainer} from '../AuthContainer';
import {AuthContext} from '../../contexts/AuthContext';
import {Loading} from '../Loading';
import User from '../../store/User';

function SignIn({navigation}) {
  const [email, setEmail] = React.useState('test@test.ru');
  const [password, setPassword] = React.useState('123456789');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  
  
  const login = (email, password) => {
	User.login(email, password);
	if(User.isAuthenticated){
		setLoading(false);
		navigation.navigate('Profile');
		return true;
	} else {
		setLoading(false);
		setError('Wrong creditentials');
		return false;
	}
  }

  return (
	<View>
		<Navbar navigation={navigation} />
		<AuthContainer>
		  <Heading style={styles.title}>LOGIN</Heading>
		  <Error error={error} />
		  <Input
			style={styles.input}
			placeholder={'Email'}
			keyboardType={'email-address'}
			value={email}
			onChangeText={setEmail}
		  />
		  <Input
			style={styles.input}
			placeholder={'Password'}
			secureTextEntry
			value={password}
			onChangeText={setPassword}
		  />
		  <FilledButton
			title={'Login'}
			style={styles.loginButton}
			onPress={() => {
				setLoading(true);
				login(email, password);
			}}
		  />
		  <TextButton
			title={'Have u an account? Create one'}
			onPress={() => {
			  navigation.navigate('SignUp');
			}}
		  />
		  <Loading loading={loading} />
		</AuthContainer>
	</View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
});

export default SignIn;