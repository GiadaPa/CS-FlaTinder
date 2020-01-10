import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from '../style'
import Personal_Profile_Component from '../UIComponents/Personal_Profile_Component'

const Personal_Profile_Screen = props => {
 
    return (
      <View style={styles.MainContainer}>
        <Personal_Profile_Component />
      </View>
    )
}

Personal_Profile_Screen.navigationOptions = ({ navigation }) => ({
  title: "My profile",
  headerRight: () => (
      <Button
          color = 'white'
          title = "Settings"
          onPress = {() => navigation.navigate('Settings')}
      />
  )
})

export default Personal_Profile_Screen
