import React from 'react'
import {Image} from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import {Provider} from 'unstated'

import Welcome_Screen from './screens/Welcome_Screen'
import Login_Screen from './screens/Login_Screen'
import SignUp_Screen from './screens/SignUp_Screen'
import Questionnaire_Screen from './screens/Questionnaire_Screen'
import Home_Screen from './screens/Home_Screen'
import Personal_Profile_Screen  from './screens/Personal_Profile_Screen'
import Settings_Screen  from './screens/Settings_Screen'
import Search_Screen from './screens/Search_Screen'
import Flats_Screen from './screens/Flats_Screen'
import Flatmates_Screen from './screens/Flatmates_Screen'


const Welcome = createStackNavigator(
  {
    Welcome: Welcome_Screen,
    Login: Login_Screen,
	SignUp: SignUp_Screen,
    Questionnaire: Questionnaire_Screen,
  },
  {
    defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#ff4d4d',
    },
    headerTintColor: '#FFFFFF',
  },
}
)

const HomeTab = createStackNavigator(
  {
    Home: Home_Screen,
  },
  {
    defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#ff4d4d',
    },
    headerTintColor: '#FFFFFF',
  },
}
)

const PersonalProfileTab = createStackNavigator(
{
  PersonalProfile: Personal_Profile_Screen,
  Settings: Settings_Screen,
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#ff4d4d',
    },
    headerTintColor: '#FFFFFF',
  },
}
)

const SearchTab = createStackNavigator(
  {
    Search: Search_Screen,
    Flats: Flats_Screen,
    Flatmates: Flatmates_Screen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ff4d4d',
      },
      headerTintColor: '#FFFFFF',
  },
}
)

const MainApp = createBottomTabNavigator(
  {
    Home: HomeTab,
    PersonalProfile: PersonalProfileTab,
    Search: SearchTab
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={ require('./assets/home_icon.png') }
              style={{ width: 20, height: 20, }} />
          );
        } else if (routeName === 'PersonalProfile'){
          return (
            <Image
              source={ require('./assets/profile_icon.jpg') }
              style={{ width: 20, height: 20 }} />
          );
        } else {
          return (
            <Image
              source={ require('./assets/search_icon.jpg') }
              style={{ width: 20, height: 20 }} />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ff4d4d',
      inactiveTintColor: '#263238',
    },
  }
)

const Route = createSwitchNavigator( 
  {
    Welcome: Welcome,
    MainApp: MainApp,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ff4d4d',
      },
      headerTintColor: '#FFFFFF',
      title: "FlatTinder",
  },
}
)

const AppContainer = createAppContainer(Route)

const App = props => (
  <Provider>
    <AppContainer/>
  </Provider>
)

export default App
