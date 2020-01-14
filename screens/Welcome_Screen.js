import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import {Subscribe} from 'unstated'

import StateContainer from '../StateContainer'
import Search_Component from '../UIComponents/Search_Component'
import styles from '../style'

const Welcome_Screen = props => {

    return (
		<Subscribe to = {[StateContainer]}>
			{
				container =>
				(
					<View style={styles.MainContainer}>
						<Text style={styles.titleText}>Welcome to FlaTinder</Text>
						<TouchableHighlight
							onPress={() => 
								{
									container.resetTemps()
									props.navigation.navigate('Login')
								}
							}
							style={styles.button}>
						<Text style={styles.buttonText}>LOGIN</Text>
						</TouchableHighlight>
								
						<TouchableHighlight
							onPress={() => 
								{
									container.resetTemps()
									props.navigation.navigate('SignUp')
								}
							}
							style={styles.button}>
							<Text style={styles.buttonText}>SIGNUP</Text>
						</TouchableHighlight>       
					</View>
				)
			}
		</Subscribe>
    )
}

Welcome_Screen.navigationOptions = ({ navigation }) => ({
    title: "FlaTinder",
})

export default Welcome_Screen