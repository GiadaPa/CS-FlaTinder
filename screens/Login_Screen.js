import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
 
const Login_Screen = props => {

    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('MainApp')}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
}

Login_Screen.navigationOptions = ({navigation}) => ({
  title: "Log in",
})

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11
  }
})

export default Login_Screen