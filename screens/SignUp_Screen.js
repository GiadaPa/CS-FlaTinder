//SignUp_Screen.js
import React from 'react';
import {View, Text, TouchableOpacity, Button, TextInput} from 'react-native';
import {Subscribe} from 'unstated'

import StateContainer from '../StateContainer'
import styles from '../style'

const SignUp_Screen = props => {
    return (
		<Subscribe to = {[StateContainer]}>
			{
				container =>
				(
				
					<View style={styles.MainContainer}>
					<Text style = {styles.text}>Insert new username</Text>
					<TextInput
						style = {styles.textInput}
						onChangeText = {(username) => container.setTempUsername(username)}
					>
					</TextInput>
					<Text style = {styles.text}>Insert new password</Text>
					<TextInput
						style = {styles.textInput}
						onChangeText = {(password) => container.setTempPassword(password)}
					>
					</TextInput>
					<TouchableOpacity
						style={styles.button}
						onPress = {() => 
							{
								const valid = container.signup()
								if (valid)
								{
									props.navigation.replace('Questionnaire')
								}
								else
								{
									alert("Username already exists")
								}
							}
						}
					>
						<Text style={styles.buttonText}>Sign up</Text>
					</TouchableOpacity>
					</View>
				)
			}
		</Subscribe>
    )
}

SignUp_Screen.navigationOptions = ({navigation}) => ({
  title: "Sign up",
})

export default SignUp_Screen