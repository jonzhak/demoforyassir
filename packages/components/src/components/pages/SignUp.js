import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import {Heading} from '../Heading';
import {Input} from '../Input';
import {FilledButton} from '../FilledButton';
import {Error} from '../Error';
import {IconButton} from '../IconButton';
import {AuthContainer} from '../AuthContainer';
import {Loading} from '../Loading';
import Navbar from '../Navbar';
import User from '../../store/User';

function SignUp({navigation}) {
  
  const [email, setEmail] = React.useState('test@test.ru');
  const [password, setPassword] = React.useState('123456789');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  
  const register = (email, password) => {
	User.register(email, password);
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
		  <IconButton
			style={styles.closeIcon}
			name={'close-circle-outline'}
			onPress={() => {
			  navigation.pop();
			}}
		  />
		  <Heading style={styles.title}>REGISTRATION</Heading>
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
			title={'Register'}
			style={styles.loginButton}
			onPress={async () => {
			  try {
				setLoading(true);
				await register(email, password);
				navigation.pop();
			  } catch (e) {
				setError(e.message);
				setLoading(false);
			  }
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
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  },
});

export default SignUp;