import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile202154Navigator from '../features/UserProfile202154/navigator';
import Settings202153Navigator from '../features/Settings202153/navigator';
import Settings202151Navigator from '../features/Settings202151/navigator';
import SignIn2202149Navigator from '../features/SignIn2202149/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile202154: { screen: UserProfile202154Navigator },
Settings202153: { screen: Settings202153Navigator },
Settings202151: { screen: Settings202151Navigator },
SignIn2202149: { screen: SignIn2202149Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
