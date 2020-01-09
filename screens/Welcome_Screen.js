import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from '../style'

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
            onPress={() => props.navigation.navigate('SignUp')}
            style={styles.button}>
            <Text style={styles.buttonText}>SIGNUP</Text>
        </TouchableHighlight>       
        </View>
    )
}

Welcome_Screen.navigationOptions = ({ navigation }) => ({
    title: "FlaTinder",
})

export default Welcome_Screen