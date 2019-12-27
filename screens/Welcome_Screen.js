import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
 
const Welcome_Screen = props => {

    return (
      <View style={styles.MainContainer}>
        <Text style={styles.titleText}>Welcome to FlaTinder</Text>
        <TouchableHighlight
            onPress={() => props.navigation.navigate('Login')}
            style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableHighlight>
                
        <TouchableHighlight
            onPress={() => props.navigation.navigate('Questionnaire')}
            style={styles.button}>
            <Text style={styles.buttonText}>SIGNUP</Text>
        </TouchableHighlight>       
        </View>
    )
}

Welcome_Screen.navigationOptions = ({ navigation }) => ({
    title: "FlaTinder",
})

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 10,
},
    button: {
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 10,
    height: 35,
    justifyContent: 'center',
    backgroundColor:'#ff4d4d',
    },
    buttonText: {
    color: 'black',
    fontSize: 20,
        alignSelf: 'center'
    },
})

export default Welcome_Screen