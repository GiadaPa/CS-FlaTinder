//SignUp_Screen.js
import React from 'react';
import {View, Text, TouchableOpacity, Button, TextInput} from 'react-native';
import {Subscribe} from 'unstated'
import RadioGroup, {Radio} from "react-native-radio-input";


import StateContainer from '../StateContainer'
import styles from '../style'

const SignUp_Screen = props => {
    return (
		<Subscribe to = {[StateContainer]}>
			{
				container =>
				(
				
					<View style={styles.MainContainer}>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Insert new username</Text>
						<TextInput
							style = {styles.textInput}
							onChangeText = {(username) => container.setTempUsername(username)}
						>
						</TextInput>
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Insert new password</Text>
						<TextInput
							style = {styles.textInput}
							onChangeText = {(password) => container.setTempPassword(password)}
						>
						</TextInput>
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Insert age</Text>
						<TextInput
							style = {styles.textInput}
							onChangeText = {(age) => container.setTempInfo(age, "age")}
							keyboardType={'numeric'}
						>
						</TextInput>						
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Insert city</Text>
						<TextInput
							style = {styles.textInput}
							onChangeText = {(city) => container.setTempInfo(city, "city")}
						>
						</TextInput>						
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Insert gender</Text>
						<RadioGroup getChecked = {(value) => container.setTempInfo(value, "gender")}>
							<Radio iconName = {"lens"} label = {"Female"} value = {"female"}/>
							<Radio iconName = {"lens"} label = {"Male"} value = {"male"}/>
						</RadioGroup>						
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Insert email</Text>
						<TextInput
							style = {styles.textInput}
							onChangeText = {(email) => container.setTempInfo(email, "email")}
						>
						</TextInput>						
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Insert phone number</Text>
						<TextInput
							style = {styles.textInput}
							onChangeText = {(phone) => container.setTempInfo(phone, "phone")}
							keyboardType={'numeric'}
						>
						</TextInput>
					</View>
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