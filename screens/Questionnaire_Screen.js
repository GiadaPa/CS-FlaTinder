import React, { Component } from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity} from 'react-native';
import RadioGroup, {Radio} from "react-native-radio-input";
import {Subscribe} from 'unstated'

import StateContainer from '../StateContainer'
import styles from '../style'

const Questionnaire_Screen = props => {
  return (
	<Subscribe to = {[StateContainer]}>
		{
			container =>
			(
				<View style={styles.MainContainer}>
					<ScrollView>
						<Text style={styles.text}>Maximum budget for rent:</Text>
						<TextInput
							style = {styles.textInput}
							onChangeText = {(budget) => container.setTempConstraints(budget, "budget")}
							keyboardType={'numeric'}
						>
						</TextInput>
						<Text style={styles.text}>Maximum number of flatmates:</Text>
						<TextInput
							style = {styles.textInput}
							onChangeText = {(flatmates) => container.setTempConstraints(flatmates, "flatmates")}
							keyboardType={'numeric'}
						>
						</TextInput>
						<Text style={styles.text}>Minimum room size:</Text>
						<TextInput
							style = {styles.textInput}
							onChangeText = {(size) => container.setTempConstraints(size, "size")}
							keyboardType={'numeric'}
						>
						</TextInput>
						<Text>Do you want roommates?</Text>
						<RadioGroup getChecked = {(value) => container.setTempConstraints(value, "roommates")}>
							<Radio iconName = {"lens"} label = {"Yes"} value = {"true"}/>
							<Radio iconName = {"lens"} label = {"No"} value = {"false"}/>
						</RadioGroup>
						<Text>What kind of personality are you?</Text>
						<RadioGroup getChecked = {(value) => container.setTempConstraints(value, "personality")}>
							<Radio iconName = {"lens"} label = {"Introverted"} value = {"introvert"}/>
							<Radio iconName = {"lens"} label = {"Ambiverted"} value = {"ambivert"}/>
							<Radio iconName = {"lens"} label = {"Extroverted"} value = {"extrovert"}/>
						</RadioGroup>
						<Text>Are you talkative?</Text>
						<RadioGroup getChecked = {(value) => container.setTempConstraints(value, "talkative")}>
							<Radio iconName = {"lens"} label = {"Shh"} value = {"little"}/>
							<Radio iconName = {"lens"} label = {"Bla"} value = {"medium"}/>
							<Radio iconName = {"lens"} label = {"BlaBlaBla"} value = {"high"}/>
						</RadioGroup>
						<Text style={styles.text}>How much are these things important to you? (1: not at all, 10: a lot)</Text>
						<Text style={styles.text}>Cleaness</Text>
						<TextInput
							style = {styles.textInput}
							onChangeText = {(clean) => container.setTempConstraints(clean, "clean")}
							keyboardType={'numeric'}
						>
						</TextInput>
						<Text style={styles.text}>Healthy food</Text>
						<TextInput
							style = {styles.textInput}
							onChangeText = {(food) => container.setTempConstraints(food, "food")}
							keyboardType={'numeric'}
						>
						</TextInput>
						<Text style={styles.text}>Studying or Working</Text>
						<TextInput
							style = {styles.textInput}
							onChangeText = {(study) => container.setTempConstraints(study, "study")}
							keyboardType={'numeric'}
						>
						</TextInput>
						<Text style={styles.text}>Partying and going out</Text>
						<TextInput
							style = {styles.textInput}
							onChangeText = {(party) => container.setTempConstraints(party, "party")}
							keyboardType={'numeric'}
						>
						</TextInput>
					</ScrollView>
					<TouchableOpacity
						style={styles.button}
						onPress = {() => 
							{
								container.register()
								props.navigation.navigate('MainApp')
							}
						}
					>
						<Text style={styles.buttonText}>SAVE CONSTRAINTS</Text>
					</TouchableOpacity>
					
				</View>
			)
		}
	</Subscribe>
  )
}

Questionnaire_Screen.navigationOptions = ({navigation}) => ({
  title: "Sign up",
  headerLeft: () => null
})

export default Questionnaire_Screen