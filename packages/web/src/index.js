import { AppRegistry } from 'react-native'

import App from 'components/src/App'

AppRegistry.registerComponent('yassirdemo', () => App)
AppRegistry.runApplication('yassirdemo', {
  rootTag: document.getElementById('root'),
})
