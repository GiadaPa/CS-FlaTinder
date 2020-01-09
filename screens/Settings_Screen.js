import React from 'react';
import { View, Text } from 'react-native';

import styles from '../style'

const Settings_Screen = props => {

  return (
    <View style={styles.MainContainer}>
      <Text style={{ marginTop: 40, fontSize: 20 }}>Settings Screen</Text>
    </View>
  )
}

Settings_Screen.navigationOptions = ({navigation}) => ({
  title: "Settings"
})

export default Settings_Screen