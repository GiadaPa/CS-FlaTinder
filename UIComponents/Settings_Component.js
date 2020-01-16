import React from 'react';
import { TouchableHighlight, View, Text, Image, Button } from 'react-native';

import { Divider } from 'react-native-elements';
import styles from '../style'


// DESCRIZIONE dell'app

const Settings_Component = props => (
    
    <View>
    <View>
    <Text style={styles.infoTextTitle}>WHAT IS FLATINDER?</Text>  
    <Text style={styles.infoText}>Almost everyone has struggled, at least once in their life, finding a shared house, maybe as a student, as a young worker or as an exchange student. We thought of creating an application that makes the task of searching a shared house or a new flatmate enjoyable and easy</Text>
    <Text></Text>  
    <Divider style={{ height: 2, backgroundColor: 'black'}} />
    </View>
    <View style={styles.MainContainer}>
    <TouchableHighlight
            style={styles.button}
            onPress={props.navigateEditInfo}
            >
            <View style={styles.row2}>
                <Image 
                    source={require('../assets/infoicon.jpg')}
                    style={{ width: 30, height: 30, }} 
                    /> 
                <Text style={styles.edittext}> Edit personal information </Text>  
            </View>
        </TouchableHighlight>
            
        <TouchableHighlight
            style={styles.button}
            onPress={props.navigateEditSearchConst}
            >
            <View style={styles.row2}>
                <Image
                    source={require('../assets/quest_icon.jpg')}
                    style={{ width: 30, height: 30, }} 
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
    </View>
)

export default Settings_Component;