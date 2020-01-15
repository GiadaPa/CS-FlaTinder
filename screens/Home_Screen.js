import React from 'react';
import { Text, View } from 'react-native';
import {Subscribe, Container} from 'unstated'

import StateContainer from '../StateContainer'
import Newest_Users_Component from '../UIComponents/Newest_Users_Component'
import styles from '../style'

const Home_Screen = props => {

	return (
	<Subscribe to = {[StateContainer]}>
		{
			container =>
			(
				<View style={styles.MainContainer}>
					<Newest_Users_Component
						users = {container.getUsers().slice(0, 10)}
						userLikes = {container.getUserLikes()}
						selectUser = {async (index) => 
							{
								await container.setShownUserIndex(index)
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
