import React from 'react';
import {View, Text, TouchableOpacity, Button, TextInput} from 'react-native';
import {Subscribe} from 'unstated'

import StateContainer from '../StateContainer'
import styles from '../style'

const Login_Screen = props => {
    return (
		<Subscribe to = {[StateContainer]}>
			{
				container =>
				(
				
					<View style={styles.MainContainer}>
						<View style = {styles.questionnaireView}>
							<Text style = {styles.text}>Insert username</Text>
							<TextInput
								style = {styles.textInput}
								onChangeText = {(username) => container.setTempUsername(username)}
							>
							</TextInput>
						</View>
						<View style = {styles.questionnaireView}>
							<Text style = {styles.text}>Insert password</Text>
							<TextInput
								style = {styles.textInput}
								onChangeText = {(password) => container.setTempPassword(password)}
							>
							</TextInput>
						</View>
					<TouchableOpacity
						style={styles.button}
						onPress = {() => 
							{
								const valid = container.login()
								if (valid)
								{
									props.navigation.navigate('MainApp')
								}
								else
								{
									alert("Invalid credentials, try again or Sign up")
								}
							}
						}
					>
						<Text style={styles.buttonText}>LOGIN</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress = {() => props.navigation.navigate('SignUp')}
					>
						<Text style={styles.underlinedText}>Not a user? Register for free!</Text>
					</TouchableOpacity>
					</View>
				)
			}
		</Subscribe>
    )
}

Login_Screen.navigationOptions = ({navigation}) => ({
  title: "Log in",
})

export default Login_Screen