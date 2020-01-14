import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
 
const Flats_Screen = props => {

  return (
    <View style={styles.MainContainer}>
      <Text style={{ marginTop: 40, fontSize: 20 }}>Flats search Screen</Text>
    </View>
  )
}

Flats_Screen.navigationOptions = ({navigation}) => ({
  title: "Flats search"
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

export default Flats_Screen