import React from 'react';
import { Text, View, TouchableHighlight} from 'react-native';

import styles from '../style'

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

export default Flatmates_Screen