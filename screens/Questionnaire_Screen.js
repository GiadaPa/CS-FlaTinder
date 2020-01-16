import React from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, Slider} from 'react-native';
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
						<View style = {styles.questionnaireView}>
							<Text style={styles.text}>Maximum budget for rent (€):</Text>
							<TextInput
								style = {styles.textInput}
								clearButtonMode={'while-editing'}
								onChangeText = {(budget) => container.setTempConstraints(budget, "budget")}
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
								keyboardType={'numeric'}
							>
							</TextInput>
						</View>
						<View style = {styles.questionnaireView}>
							<Text style={styles.text}>Do you want roommates?</Text>
							<RadioGroup row = {true} getChecked = {(value) => container.setTempConstraints(value, "roommates")}>
								<Radio iconName = {"lens"} label = {"Yes"} value = {"true"}/>
								<Radio iconName = {"lens"} label = {"No"} value = {"false"}/>
							</RadioGroup>
						</View>
						<View style = {styles.questionnaireView}>
							<Text style={styles.text}>What kind of personality are you?</Text>
							<RadioGroup getChecked = {(value) => container.setTempConstraints(value, "personality")}>
								<Radio iconName = {"lens"} label = {"Introverted"} value = {"introvert"}/>
								<Radio iconName = {"lens"} label = {"Ambiverted"} value = {"ambivert"}/>
								<Radio iconName = {"lens"} label = {"Extroverted"} value = {"extrovert"}/>
							</RadioGroup>
						</View>
						<View style = {styles.questionnaireView}>
							<Text style={styles.text}>Are you talkative?</Text>
							<RadioGroup getChecked = {(value) => container.setTempConstraints(value, "talkative")}>
								<Radio iconName = {"lens"} label = {"Shh"} value = {"little"}/>
								<Radio iconName = {"lens"} label = {"Bla"} value = {"medium"}/>
								<Radio iconName = {"lens"} label = {"BlaBlaBla"} value = {"high"}/>
							</RadioGroup>
						</View>
							<Text style={styles.textQuest}>How much do you care about these things?</Text>
						<View style = {styles.sliderView}>
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
						<View style = {styles.sliderView}>
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
						<View style = {styles.sliderView}>
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
						<View style = {styles.sliderView}>
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
						onPress = {async () => 
							{
								if(container.checkConstraints())
								{
									await container.register()
									props.navigation.navigate('MainApp')
								}
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