import React from 'react';
import { Text, View, TouchableHighlight} from 'react-native';

import styles from '../style'

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

export default Flats_Screen