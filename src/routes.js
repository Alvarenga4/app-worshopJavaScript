import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import Home from './pages/Home';

const Routes = createStackNavigator({
  Login: {
    screen: Login,
  },
  Home,
});

export default createAppContainer(Routes);
