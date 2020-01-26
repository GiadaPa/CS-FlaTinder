import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import {Subscribe} from 'unstated'

import StateContainer from '../StateContainer'
import Map_Component from '../UIComponents/Map_Component'

import styles from '../style'

const Map_Screen = props => {
    return (
		<Subscribe to = {[StateContainer]}>
			{
				container =>
				(
					<View style={styles.MainContainer}>
                        <Map_Component
							myLocation = {container.getTempMapMyCoord()}
                            location = {container.getTempMapCoord()}
						/>
					</View>
				)
			}
		</Subscribe>
    )
}

Map_Screen.navigationOptions = ({ navigation }) => ({
    title: "Map",
})

export default Map_Screen