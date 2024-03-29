import React from 'react';
import { Text, View } from 'react-native';
import {Subscribe} from 'unstated'

import StateContainer from '../StateContainer'
import Newest_Users_Component from '../UIComponents/Newest_Users_Component'
import Saved_Users_Component from '../UIComponents/Saved_Users_Component'
import styles from '../style'

const Home_Screen = props => {

	return (
	<Subscribe to = {[StateContainer]}>
		{
			container =>
			(
				<View style={styles.MainContainer}>
					<Newest_Users_Component
						users = {container.getNewestUsers()}
						selectUser = {async (username) => 
							{
								await container.setShownUserIndex(username)
								props.navigation.navigate('SelectedUser')
							}
						}
					/>
					<Saved_Users_Component
						users = {container.getSavedUsers()}
						selectUser = {async (username) => 
							{
								await container.setShownUserIndex(username)
								props.navigation.navigate('SelectedUser')
							}
						}
					/>
				</View>
			)
		}
	</Subscribe>
  )
}

Home_Screen.navigationOptions = ({navigation}) => ({
  title: "Home"
})
 


export default Home_Screen