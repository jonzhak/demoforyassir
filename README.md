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
```
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
```


-this method stores your keys. when you call this method, it returns you a token.
-when to use this method - whenver you make any call to avalanche (webview, signup, premiumevent) - all these need the token to run. you get the token from getApiToken

Step (2.5) - retrieving the referral code from URL search parameters
When someone clicks on share via or email...we will send their friend a a link, which will have at the end amazingstartup.com?ref_api_code=xyz...
and this ref_api_code is their referral code which is used to track who invited them

For web: on your homepage, this needs to be installed
example installation: demoforyassir/packages/components/src/App.js / line 96
```
	const searchParams = new URLSearchParams(window.location.search);
    if(searchParams.get('refAPI_ref_code')){
		localStorage.setItem('refAPI_ref_code', searchParams.get('refAPI_ref_code')); //important to keep key as refAPI_ref_code
		document.cookie = `refAPI_ref_code=${searchParams.get('refAPI_ref_code')}`;
	}
```
this will take the ref api code and make it into a cookie

For mobile: 
option 1: ask them for the referral code explicitly, then store that
option 2: let us know, we can also use deeplinks through branch.io for this

Step (3): signUp:
example - demoforyassir/packages/components/src/store/User.js
```
const resultier = avalancheBrowser.signUpMyAppSdk({ email: 'amote1234@mail.ru', authReferApiToken: this.token });
					resultier.then(response => {
						console.log('response', response)
					}).catch(error => {
						console.log('error', error)
					}).finally(finals => {
						console.log('finals', finals)
					})
```
when user signs up, call this signupmyappsdk
-make sure to give it the referral code as well (or store it in local storage)


Step (4): premiumEvent:
example - demoforyassir/packages/components/src/store/User.js
```
const resultier2 = avalancheBrowser.premiumEventMyAppSdkV2({ email: 'amote1234@mail.ru', token: this.token, authReferApiToken: this.token });
					resultier.then(response => {
						console.log('response', response)
					}).catch(error => {
						console.log('error', error)
					}).finally(finals => {
						console.log('finals', finals)
					})
```
