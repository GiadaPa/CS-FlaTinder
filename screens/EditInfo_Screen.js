//EditInfo_Screen.js
import React from 'react';
import {View, Text, TouchableOpacity, Button, TextInput, ScrollView} from 'react-native';
import {Subscribe} from 'unstated'
import RadioGroup, {Radio} from "react-native-radio-input";


import StateContainer from '../StateContainer'
import styles from '../style'

const EditInfo_Screen = props => {
    return (
		<Subscribe to = {[StateContainer]}>
			{
				container =>
				(
                    <View style={styles.MainContainer}>
					<ScrollView>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Edit username</Text>
						<TextInput
							style = {styles.textInput}
							clearButtonMode={'while-editing'}
							onChangeText = {(username) => container.setTempUsername(username)}
							placeholder = {container.getUsers()[container.getLoggedInUser()].username}
						>
						</TextInput>
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Type a new password</Text>
						<TextInput
							style = {styles.textInput}
							clearButtonMode={'while-editing'}
							onChangeText = {(password) => container.setTempPassword(password)}
							placeholder = {container.getUsers()[container.getLoggedInUser()].password}
						>
						</TextInput>
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Edit age</Text>
						<TextInput
							style = {styles.textInput}
							clearButtonMode={'while-editing'}
							onChangeText = {(age) => container.setTempInfo(age, "age")}
							placeholder = {container.getUsers()[container.getLoggedInUser()].info.age.toString()}
							keyboardType={'numeric'}
						>
						</TextInput>						
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Edit city</Text>
						<TextInput
							style = {styles.textInput}
							clearButtonMode={'while-editing'}
							onChangeText = {(city) => container.setTempInfo(city, "city")}
							placeholder = {container.getUsers()[container.getLoggedInUser()].info.city}
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
						<Text style = {styles.text}>Edit email</Text>
						<TextInput
							style = {styles.textInput}
							clearButtonMode={'while-editing'}
							onChangeText = {(email) => container.setTempInfo(email, "email")}
							placeholder = {container.getUsers()[container.getLoggedInUser()].info.email}
						>
						</TextInput>						
					</View>
					<View style = {styles.questionnaireView}>
						<Text style = {styles.text}>Edit phone number</Text>
						<TextInput
							style = {styles.textInput}
							clearButtonMode={'while-editing'}
							onChangeText = {(phone) => container.setTempInfo(phone, "phone")}
							placeholder = {container.getUsers()[container.getLoggedInUser()].info.phone}
							keyboardType={'numeric'}
						>
						</TextInput>
                    </View>
                    </ScrollView>
					<TouchableOpacity
						style={styles.button}
						onPress = {() => 
						{
							container.saveChanges("info")
							props.navigation.navigate('PersonalProfile')
						}
						}
					>
						<Text style={styles.buttonText}>SAVE CHANGES</Text>
					</TouchableOpacity>
                    </View>
				)
			}
		</Subscribe>
    )
}

EditInfo_Screen.navigationOptions = ({navigation}) => ({
  title: "Edit personal info",
})

export default EditInfo_Screen
