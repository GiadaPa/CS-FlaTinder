import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

import styles from '../style'

const Personal_Profile_Screen = props => {
 
    return (
      <View style={styles.MainContainer}>
        <Text style={{ marginTop: 40, fontSize: 20 }}>Personal profile Screen</Text>
      </View>
    )
}

Personal_Profile_Screen.navigationOptions = ({ navigation }) => ({
  title: "Personal profile",
  headerRight: () => (
      <Button
          color = 'white'
          title = "Settings"
          onPress = {() => navigation.navigate('Settings')}
      />
  )
})

export default Personal_Profile_Screen