//SelectedUser_Screen.js
import React from 'react';
import { View } from 'react-native';
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
				user = {container.getUsers()[container.getShownUserIndex()]}
				sendEmail = {() => container.sendEmail()}
				likeAlert = {() => container.likeAlert()}
			/>
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