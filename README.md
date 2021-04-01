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