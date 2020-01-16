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
							clearButtonMode={'while-editing'}
							onChangeText = {(username) => container.setTempUsername(username)}
						>
						</TextInput>
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Insert new password</Text>
						<TextInput
							style = {styles.textInput}
							clearButtonMode={'while-editing'}
							onChangeText = {(password) => container.setTempPassword(password)}
						>
						</TextInput>
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Insert age</Text>
						<TextInput
							style = {styles.textInput}
							clearButtonMode={'while-editing'}
							onChangeText = {(age) => container.setTempInfo(age, "age")}
							keyboardType={'numeric'}
						>
						</TextInput>						
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Insert city</Text>
						<TextInput
							style = {styles.textInput}
							clearButtonMode={'while-editing'}
							onChangeText = {(city) => container.setTempInfo(city, "city")}
						>
						</TextInput>						
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Insert gender</Text>
						<RadioGroup getChecked = {(value) => container.setTempInfo(value, "gender")} RadioGroupStyle={{flexDirection: "row" }}>
							<Radio iconName = {"lens"} label = {"Female"} value = {"female"}/>
							<Radio iconName = {"lens"} label = {"Male"} value = {"male"}/>
						</RadioGroup>						
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Insert email</Text>
						<TextInput
							style = {styles.textInput}
							clearButtonMode={'while-editing'}
							onChangeText = {(email) => container.setTempInfo(email, "email")}
						>
						</TextInput>						
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Insert phone number</Text>
						<TextInput
							style = {styles.textInput}
							clearButtonMode={'while-editing'}
							onChangeText = {(phone) => container.setTempInfo(phone, "phone")}
							keyboardType={'numeric'}
						>
						</TextInput>
					</View>
					<TouchableOpacity
						style={styles.button}
						onPress = {() => 
							{
								if (container.signup())
								{
									props.navigation.replace('Questionnaire')
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