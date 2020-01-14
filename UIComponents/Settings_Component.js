import React from 'react';
import { TouchableHighlight, View, Text, Image, Button } from 'react-native';

import styles from '../style'


const Settings_Component = props => (
    
    <View style={styles.MainContainer}>
    
        <TouchableHighlight
            style={styles.button}
            onPress={props.navigateEditInfo}
            >
            <View style={styles.row}>
                <Image 
                    source={require('../assets/infoicon.jpg')}
                    style={{ width: 25, height: 25, }} 
                    /> 
                <Text style={styles.edittext}> Edit personal information </Text>  
            </View>
        </TouchableHighlight>
            
        <TouchableHighlight
            style={styles.button}
            onPress={props.navigateEditSearchConst}
            >
            <View style={styles.row}>
                <Image
                    source={require('../assets/quest_icon.jpg')}
                    style={{ width: 25, height: 25, }} 
                    />
                <Text style={styles.edittext}> Edit search constraints </Text>
            </View>
        </TouchableHighlight>
        <Button 
            color = 'red'
            title = "LOG OUT"
            onPress = {props.navigateOut}
		/>
    </View>
)

export default Settings_Component;