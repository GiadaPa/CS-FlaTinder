import React from 'react';
import { TouchableHighlight, View, Text, Image, Button } from 'react-native';

import styles from '../style'


const Search_Component = props => (
    <View style={styles.MainContainer}>
        <View style = {styles.MainContainerProfile}>
            <Image 
                source= {{uri: props.user.image}}
                style = {{width:200, height:300}}
            />
            <Text style={styles.TextMyname}>{props.user.username}</Text>
            <View style = {styles.infoProfile}>
            </View>
        </View>
        <View style={styles.buttonView}>
            <TouchableHighlight
            onPress={() => props.likeAlert()}
            >
            <Image
                source={require('../assets/like.png')}
                style={{ width: 35, height: 35, }} 
                />
            </TouchableHighlight>
            
            <TouchableHighlight
                style ={styles.interestedbutton}
                onPress={() => props.sendEmail()}
                >
            <Text style={styles.text}>SEND EMAIL</Text>
            </TouchableHighlight>
        </View>
      </View>
)

export default Search_Component;