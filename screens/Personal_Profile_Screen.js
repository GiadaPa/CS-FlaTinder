import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
 
const Personal_Profile_Screen = props => {
 
    return (
      <View style={styles.MainContainer}>
        <Text style={{ marginTop: 40, fontSize: 20 }}>Personal profile Screen</Text>
      </View>
    )
}

Personal_Profile_Screen.navigationOptions = ({ navigation }) => ({
  title: "Personal profile",
  headerRight: () => (
      <Button
          color = 'white'
          title = "Settings"
          onPress = {() => navigation.navigate('Settings')}
      />
  )
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

export default Personal_Profile_Screen