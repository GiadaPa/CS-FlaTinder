import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import {Subscribe} from 'unstated'

import StateContainer from '../StateContainer'
import Search_Component from '../UIComponents/Search_Component'

import styles from '../style'

const Search_Screen = props => {

  return (
    <Subscribe to = {[StateContainer]}>
    {
      container =>
      (
        <View style={styles.MainContainer}>
			{container.getBestFittingUsers().length == 0?
			<Text>You are the only user :( invite your friends!</Text>:
			<View>
				<Search_Component 
					user = {container.getBestFittingUsers()[container.getNextMate()]}
					checkIfSaved = {container.checkIfSaved(container.getBestFittingUsers()[container.getNextMate()])}
					sendEmail = {() => container.sendEmail(container.getBestFittingUsers()[container.getNextMate()])}
					likeAlert = {() => container.likeAlert(container.getBestFittingUsers()[container.getNextMate()])}
					saveUser = {() => container.saveUser(container.getBestFittingUsers()[container.getNextMate()])}	
					viewOnMap = {async() => 
						{
							container.setTempMapMyCoord(await container.getLocation(container.getUsers()[container.getLoggedInUser()]))
							container.setTempMapCoord(await container.getLocation(container.getBestFittingUsers()[container.getNextMate()]))
							props.navigation.navigate('Map')
						}
					}
				/>
				<View style={styles.notintView}>
					<TouchableHighlight
						style ={styles.notintbutton}
						onPress={() => 
						{
							container.nextMate()
						}
						}
					>
						<Text style={styles.buttonText}>NOT INTERESTED</Text>
					</TouchableHighlight>
					
					
				</View>
			</View>}
        </View>
      )
    }
  </Subscribe>
  )
}

Search_Screen.navigationOptions = ({navigation}) => ({
  title: "Search flatmates"
})

export default Search_Screen