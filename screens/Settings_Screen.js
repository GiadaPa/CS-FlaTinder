import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
 
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

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11
  },
})

export default Settings_Screen