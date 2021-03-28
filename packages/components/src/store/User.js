import React, { useState, useEffect } from 'react'
import { observable, action, computed } from 'mobx'

class User {
  @observable name = ''
  @observable email = ''
  @observable isAuthenticated = false
  @observable personal = {
    avatarUrl: '',
  }
  
  @action login(email, password){
	  const doFake = faker(email, password);
	  if(doFake){
		  this.name = 'Test user';
	  }
  }
  
  @action register(email, password){
	  const doFake = faker(email, password);
	  if(doFake){
		  this.name = 'Test user';
	  }
  }
  
  @action faker(email, password){
	  const nameTrue = name == 'test@test.ru' || name == 'test2@test.ru';
	  const passwordTrue = password == '123456789';
	  if(nameTrue && passwordTrue){
		  this.isAuthenticated = true;
		  return true;
	  } else {
		  this.isAuthenticated = false;
		  return false;
	  }
  }
  
  @action logOut(){
	   this.isAuthenticated = false;
  }
  
}

export default new User()