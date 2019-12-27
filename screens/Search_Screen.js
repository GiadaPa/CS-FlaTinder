import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image } from 'react-native';
 
const Search_Screen = props => {

  return (
      <View style={styles.MainContainer}>

        <Image source={require('../assets/flats.jpg')} style={{ maxHeight:200, maxWidth: 350}}/>
        <TouchableHighlight
        onPress={() => props.navigation.navigate('Flats')}
        style={styles.button}>
        <Text style={styles.buttonText}>SEARCH FLATS</Text>
        </TouchableHighlight> 
        
        <Image source={require('../assets/flatmates.jpg')} style={{ maxHeight:200, maxWidth: 350}}/> 
        <TouchableHighlight
          onPress={() => props.navigation.navigate('Flatmates')}     
          style={styles.button}>
          <Text style={styles.buttonText}>SEARCH FLATMATES</Text>
        </TouchableHighlight> 

      </View>
  )
}

Search_Screen.navigationOptions = ({navigation}) => ({
  title: "Search"
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
    marginBottom: 25,
    borderRadius: 10,
    height: 35,
    justifyContent: 'center',
    backgroundColor:'#ff4d4d',
    },
    buttonText: {
    color: 'white',
    fontSize: 20,
        alignSelf: 'center'
    },
})

export default Search_Screen