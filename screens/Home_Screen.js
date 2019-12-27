import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
 
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
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11
  }, 
});

export default Home_Screen