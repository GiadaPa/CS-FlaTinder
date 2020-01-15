import React from 'react';
import { View, Button } from 'react-native';
import {Subscribe} from 'unstated'

import StateContainer from '../StateContainer'
import styles from '../style'
import Personal_Profile_Component from '../UIComponents/Personal_Profile_Component'

const Personal_Profile_Screen = props => {
    return (
		<Subscribe to = {[StateContainer]}>
			{
				container =>
				(
					<View style={styles.MainContainer}>
						<Personal_Profile_Component
							chooseImage = {() => container.chooseImage()}
							user = {container.getUsers()[(container.getLoggedInUser())]}
						/>
					</View>
				)
			}
		</Subscribe>
    )
}

Personal_Profile_Screen.navigationOptions = ({ navigation }) => ({
	title: "My profile",
	headerRight: () => (
	<View style= {{margin: 5}}>
		<Button
			color = 'white'
			title = "Settings"
			onPress = {() => navigation.navigate('Settings')}
		/>
	</View>
  )
})

export default Personal_Profile_Screen
