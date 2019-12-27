import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
 
const Questionnaire_Screen = props => {
  return (
    <View style={styles.MainContainer}>
      <Text style={{ marginTop: 40, fontSize: 20 }}> Questionnaire Screen</Text>
    </View>
  )
}

Questionnaire_Screen.navigationOptions = ({navigation}) => ({
  title: "Sign up"
})

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11
  },
})

export default Questionnaire_Screen