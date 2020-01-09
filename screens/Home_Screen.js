import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../style'

const Home_Screen = props => {

  return (
    <View style={styles.MainContainer}>
      <Text style={{ marginTop: 40, fontSize: 20 }}>Home Screen</Text>
    </View>
  )
}

Home_Screen.navigationOptions = ({navigation}) => ({
  title: "Home"
})
 


export default Home_Screen