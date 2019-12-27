import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
 
const Flatmates_Screen = props => {

  return (
    <View style={styles.MainContainer}>
      <Text style={{ marginTop: 40, fontSize: 20 }}>Flatmates search Screen</Text>
    </View>
  )
}

Flatmates_Screen.navigationOptions = ({navigation}) => ({
  title: "Flatemates search"
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

export default Flatmates_Screen