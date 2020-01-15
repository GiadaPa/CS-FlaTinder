import React from 'react';
import { View } from 'react-native';
import {Subscribe} from 'unstated'

import StateContainer from '../StateContainer'

import styles from '../style'

import Settings_Component from '../UIComponents/Settings_Component'

const Settings_Screen = props => {

  return (
    <Subscribe to = {[StateContainer]}>
    {
      container =>
      (
        <View style={styles.MainContainer}>
          <Settings_Component
            navigateOut = {() => 
			{
				container.logout()
				props.navigation.navigate("Welcome")}
			}
            navigateEditInfo = {() => 
				{
					container.updateTempInfo()
					props.navigation.navigate("EditInfo")
				}
			}
            navigateEditSearchConst = {() =>
				{
					container.updateTempConstraints()
					props.navigation.navigate("EditSearchConst")
				}
			}
            />
        </View>
        )
			}
		</Subscribe>
    )
}
Settings_Screen.navigationOptions = ({navigation}) => ({
  title: "Settings"
})

export default Settings_Screen