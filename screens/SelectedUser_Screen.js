//SelectedUser_Screen.js
import React from 'react';
import { View } from 'react-native';
import {Subscribe} from 'unstated'

import StateContainer from '../StateContainer'
import Search_Component from '../UIComponents/Search_Component'

import styles from '../style'

const SelectedUser_Screen = props => {

  return (
    <Subscribe to = {[StateContainer]}>
    {
      container =>
      (
        <View style={styles.MainContainer}>
			<Search_Component 
				user = {container.getUsers()[container.getShownUserIndex()]}
				checkIfSaved = {container.checkIfSaved(container.getUsers()[container.getShownUserIndex()])}
				sendEmail = {() => container.sendEmail(container.getUsers()[container.getShownUserIndex()])}
				likeAlert = {() => container.likeAlert(container.getUsers()[container.getShownUserIndex()])}
				saveUser = {() => container.saveUser(container.getUsers()[container.getShownUserIndex()])}
			/>
        </View>
      )
    }
  </Subscribe>
  )
}

SelectedUser_Screen.navigationOptions = ({navigation}) => ({
  title: "Newest Users"
})

export default SelectedUser_Screen