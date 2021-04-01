import React, { useState, useEffect } from 'react'
import * as avalancheBrowser from 'avalanche-browser'

class User {
  name = localStorage.getItem('username') ? localStorage.getItem('username') : ''
  email = localStorage.getItem('useremail') ? localStorage.getItem('useremail') : ''
  isAuthenticated = localStorage.getItem('isAuthenticated') ? localStorage.getItem('isAuthenticated') : false
  token = ''
  personal = {
    avatarUrl: '',
  }
  
  login(email, password){
	  const doFake = this.faker(email, password);
	  if(doFake){
		  this.name = 'Test user';
		  localStorage.setItem('username', this.name);
	  }
	  return this;
  }
  
  register(email, password){
	  const doFake = this.faker(email, password);
	  if(doFake){
		  this.name = 'Test user';
		  localStorage.setItem('username', this.name);
		  
		  const refCode = localStorage.getItem('refAPI_ref_code');
		  if(refCode){
				const resultier = avalancheBrowser.signUpMyAppSdk({ email: 'amote1234@mail.ru', authReferApiToken: this.token });
					resultier.then(response => {
						console.log('response', response)
					}).catch(error => {
						console.log('error', error)
					}).finally(finals => {
						console.log('finals', finals)
					})
		  }
		  
	  }
	  return this;
	  
  }
  
  faker(email, password){
	  const nameTrue = email == 'test@test.ru' || email == 'test2@test.ru';
	  const passwordTrue = password == '123456789';
	  if(nameTrue && passwordTrue){
		  this.isAuthenticated = true;
		  this.email = email;
		  localStorage.setItem('isAuthenticated', this.isAuthenticated);
		  localStorage.setItem('useremail', this.email);
		  return true;
	  } else {
		  this.isAuthenticated = false;
		  localStorage.setItem('isAuthenticated', this.isAuthenticated);
		  localStorage.setItem('useremail', '');
		  localStorage.setItem('username', '');
		  return false;
	  }
  }
  
  logOut(){
	   this.isAuthenticated = false;
	   localStorage.setItem('isAuthenticated', this.isAuthenticated);
	   localStorage.setItem('useremail', '');
	   localStorage.setItem('username', '');
	   return this;
  }
  
}

export default new User()