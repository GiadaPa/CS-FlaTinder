import React from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, Slider} from 'react-native';
import RadioGroup, {Radio} from "react-native-radio-input";
import {Subscribe} from 'unstated'

import StateContainer from '../StateContainer'
import styles from '../style'

const EditSearchConst_Screen = props => {
  return (
	<Subscribe to = {[StateContainer]}>
		{
			container =>
			(
				<View style={styles.MainContainer}>
					<ScrollView>
						<View style = {styles.questionnaireView}>
							<Text style={styles.text}>Maximum budget for rent (€):</Text>
							<TextInput
								style = {styles.textInput}
								clearButtonMode={'while-editing'}
								onChangeText = {(budget) => container.setTempConstraints(budget, "budget")}
								placeholder = {container.getUsers()[container.getLoggedInUser()].constraints.budget}
								keyboardType={'numeric'}
							>
							</TextInput>
						</View>
						<View style = {styles.questionnaireView}>
							<Text style={styles.text}>Maximum number of flatmates:</Text>
							<TextInput
								style = {styles.textInput}
								clearButtonMode={'while-editing'}
								onChangeText = {(flatmates) => container.setTempConstraints(flatmates, "flatmates")}
								placeholder = {container.getUsers()[container.getLoggedInUser()].constraints.flatmates}
								keyboardType={'numeric'}
							>
							</TextInput>
						</View>
						<View style = {styles.questionnaireView}>
							<Text style={styles.text}>Minimum room size (m^2):</Text>
							<TextInput
								style = {styles.textInput}
								clearButtonMode={'while-editing'}
								onChangeText = {(size) => container.setTempConstraints(size, "size")}
								placeholder = {container.getUsers()[container.getLoggedInUser()].constraints.size}
								keyboardType={'numeric'}
							>
							</TextInput>
						</View>
						<View style = {styles.questionnaireView}>
							<Text style={styles.text}>Do you want roommates?</Text>
							<RadioGroup getChecked = {(value) => container.setTempConstraints(value, "roommates")} RadioGroupStyle={{flexDirection: "row" }}>
								<Radio iconName = {"lens"} label = {"Yes"} value = {"true"}/>
								<Radio iconName = {"lens"} label = {"No"} value = {"false"}/>
							</RadioGroup>
						</View>
						<View style = {styles.questionnaireView}>
							<Text style={styles.text}>What kind of personality are you?</Text>
							<RadioGroup getChecked = {(value) => container.setTempConstraints(value, "personality")} RadioGroupStyle={{flexDirection: "row" }}>
								<Radio iconName = {"lens"} label = {"Introverted"} value = {"introvert"}/>
								<Radio iconName = {"lens"} label = {"Ambiverted"} value = {"ambivert"}/>
								<Radio iconName = {"lens"} label = {"Extroverted"} value = {"extrovert"}/>
							</RadioGroup>
						</View>
						<View style = {styles.questionnaireView}>
							<Text style={styles.text}>Are you talkative?</Text>
							<RadioGroup getChecked = {(value) => container.setTempConstraints(value, "talkative")} RadioGroupStyle={{flexDirection: "row" }}>
								<Radio iconName = {"lens"} label = {"Shh"} value = {"little"}/>
								<Radio iconName = {"lens"} label = {"Bla"} value = {"medium"}/>
								<Radio iconName = {"lens"} label = {"BlaBlaBla"} value = {"high"}/>
							</RadioGroup>
						</View>
							<Text style={styles.text}>How much are these things important to you?</Text>
						<View style = {styles.questionnaireView}>
							<Text style={styles.text}>Cleaness</Text>
							<Slider
								step = {1}
								maximumValue = {9}
								onValueChange = {(clean) => container.setTempConstraints(clean, "clean")}
							/>
							<View style = {styles.row}>
								<Text>0</Text>
								<Text>1</Text>
								<Text>2</Text>
								<Text>3</Text>
								<Text>4</Text>
								<Text>5</Text>
								<Text>6</Text>
								<Text>7</Text>
								<Text>8</Text>
								<Text>9</Text>
							</View>
							<View style = {styles.row}>
								<Text>not at all</Text>
								<Text>a lot</Text>
							</View>
						</View>
						<View style = {styles.questionnaireView}>
							<Text style={styles.text}>Healthy food</Text>
							<Slider
								step = {1}
								maximumValue = {9}
								onValueChange = {(food) => container.setTempConstraints(food, "food")}
							/>
							<View style = {styles.row}>
								<Text>0</Text>
								<Text>1</Text>
								<Text>2</Text>
								<Text>3</Text>
								<Text>4</Text>
								<Text>5</Text>
								<Text>6</Text>
								<Text>7</Text>
								<Text>8</Text>
								<Text>9</Text>
							</View>
							<View style = {styles.row}>
								<Text>not at all</Text>
								<Text>a lot</Text>
							</View>
						</View>
						<View style = {styles.questionnaireView}>
							<Text style={styles.text}>Studying or Working</Text>
							<Slider
								step = {1}
								maximumValue = {9}
								onValueChange = {(study) => container.setTempConstraints(study, "study")}
							/>
							<View style = {styles.row}>
								<Text>0</Text>
								<Text>1</Text>
								<Text>2</Text>
								<Text>3</Text>
								<Text>4</Text>
								<Text>5</Text>
								<Text>6</Text>
								<Text>7</Text>
								<Text>8</Text>
								<Text>9</Text>
							</View>
							<View style = {styles.row}>
								<Text>not at all</Text>
								<Text>a lot</Text>
							</View>
						</View>
						<View style = {styles.questionnaireView}>
							<Text style={styles.text}>Partying and going out</Text>
							<Slider
								step = {1}
								maximumValue = {9}
								onValueChange = {(party) => container.setTempConstraints(party, "party")}
							/>
							<View style = {styles.row}>
								<Text>0</Text>
								<Text>1</Text>
								<Text>2</Text>
								<Text>3</Text>
								<Text>4</Text>
								<Text>5</Text>
								<Text>6</Text>
								<Text>7</Text>
								<Text>8</Text>
								<Text>9</Text>
							</View>
							<View style = {styles.row}>
								<Text>not at all</Text>
								<Text>a lot</Text>
							</View>
						</View>
					</ScrollView>
					<TouchableOpacity
						style={styles.button}
						onPress = {() => 
						{
							container.saveChanges("constraints")
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

EditSearchConst_Screen.navigationOptions = ({navigation}) => ({
  title: "Edit constraints"
})

export default EditSearchConst_Screen
