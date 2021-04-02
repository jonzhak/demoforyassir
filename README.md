# React Native [Web] + Monorepo

## 100% code sharing between Web, iOS and Android

### How to run


- `$ yarn`
- Web
  - [CRA] `$ yarn workspace web start`
- Mobile
  - [iOS]
    - `$ cd packages/mobile/ios && pod update && pod install && cd -`
    - [CLI]
      - `$ yarn ios`
    - [Xcode]
      - `$ yarn workspace mobile start`
      - `yarn xcode`
      - Press the Run button
  - [Android]
    - [CLI]
      - `$ yarn android`
    - [Android Studio]
      - `$ yarn workspace mobile start`
      - `yarn studio`
      - Press the Run button

## Be happy :)



Step (1): install webview - already handled



Step (2): install get token method
Exaple of this is in Packages > Components > Src > App.js line 67

const getApiToken = () => {
	const client_id = 'RFNkSvxTlivttwan4YKDecFsOhAkdWnZ';
	const client_secret = 'huQLthIkJepOt1LKW1ye1ht__HuLwB_RlWPP6Q97tLGOjYiwBKHgMH5-Ln6rQdTp';
      return new Promise(function (resolve, reject) {
        var options = {
          method: "GET",
          url: "http://salty-reef-38656.herokuapp.com/events/updateTokenFromClientCreditentials?client_id="+client_id+"&client_secret="+client_secret,
          headers: { "content-type": "application/json" }
        };
        request(options, function (error, _, body) {
          if (error) {
			console.log('error update token', error);
            return "";
          }
          var jsonBody = JSON.parse(body);
		  
		  if(jsonBody.token){
			resolve(jsonBody.token);
		  } else {
			  resolve({});
		  }
        });
      });
};


-this method stores your keys. when you call this method, it returns you a token.
-when to use this method - whenver you make any call to avalanche (webview, signup, premiumevent) - all these need the token to run. you get the token from getApiToken


Step (3): signUp:
example - demoforyassir/packages/components/src/store/User.js

const resultier = avalancheBrowser.signUpMyAppSdk({ email: 'amote1234@mail.ru', authReferApiToken: this.token });
					resultier.then(response => {
						console.log('response', response)
					}).catch(error => {
						console.log('error', error)
					}).finally(finals => {
						console.log('finals', finals)
					})

when user signs up, call this signupmyappsdk
-make sure to give it the referral code as well (or store it in local storage)


Step (4): premiumEvent:
example - demoforyassir/packages/components/src/store/User.js

const resultier2 = avalancheBrowser.premiumEventMyAppSdkV2({ email: 'amote1234@mail.ru', token: this.token, authReferApiToken: this.token });
					resultier.then(response => {
						console.log('response', response)
					}).catch(error => {
						console.log('error', error)
					}).finally(finals => {
						console.log('finals', finals)
					})
