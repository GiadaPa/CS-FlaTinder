import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import styles from '../style'

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

export default Search_Screen