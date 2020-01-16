import React from 'react';
import {View, KeyboardAvoidingView, Text, TouchableOpacity, Button, TextInput} from 'react-native';
import {Subscribe} from 'unstated'

import StateContainer from '../StateContainer'
import styles from '../style'

const Login_Screen = props => {
    return (
		<Subscribe to = {[StateContainer]}>
			{
				container =>
				(
				
					<KeyboardAvoidingView style={styles.MainContainer}
						behavior='position'>
					<Text style = {styles.text}>Insert username</Text>
					<TextInput
						style = {styles.textInput}
						clearButtonMode={'while-editing'}
						onChangeText = {(username) => container.setTempUsername(username)}
					>
					</TextInput>
					<Text style = {styles.text}>Insert password</Text>
					<TextInput
						style = {styles.textInput}
						clearButtonMode={'while-editing'}
						onChangeText = {(password) => container.setTempPassword(password)}
					>
					</TextInput>
					<TouchableOpacity
						style={styles.button}
						onPress = {async() => 
							{
								if (await container.login())
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
					</KeyboardAvoidingView>
				)
			}
		</Subscribe>
    )
}

Login_Screen.navigationOptions = ({navigation}) => ({
  title: "Log in",
})

export default Login_Screen