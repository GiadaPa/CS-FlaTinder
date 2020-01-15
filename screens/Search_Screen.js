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
			<Search_Component 
				user = {container.getBestFittingUsers()[container.getNextMate()]}
				sendEmail = {() => container.sendEmail(container.getBestFittingUsers()[container.getNextMate()])}
				likeAlert = {() => container.likeAlert()}
			/>
			<TouchableHighlight
				style ={styles.notintbutton}
				onPress={() => 
					{
						container.nextMate()
						
					}
				}
			>
				<Text style={styles.text}>NOT INTERESTED</Text>
			</TouchableHighlight>
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