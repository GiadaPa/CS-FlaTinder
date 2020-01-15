import React from 'react';
import { TouchableHighlight, View, Text, Image, Button } from 'react-native';

import styles from '../style'


const Search_Component = props => (
	<View style={styles.MainContainer}>
        <View style = {styles.MainContainerProfile}>
            {(props.user.image == '') ?
				(props.user.info.gender == 'female'?
					<Image
						source={require('../assets/femalepic.jpg')}
						style = {{width:200, height:300}}
					/>:
					<Image
						source={require('../assets/malepic.jpg')}
						style = {{width:200, height:300}}
					/>
				):
				(<Image
					source={{uri: props.user.image}}
					style = {{width:200, height:300}}
				/>)
			}
            <Text style={styles.TextMyname}>{props.user.username}</Text>
            <View style={styles.constrPersonal}>
				<View style = {styles.infoContainer}>
					<Text style={styles.infoText}>{props.user.constraints.budget}</Text> 
					<Text style={styles.infoText}> max. budget</Text>
				</View>
				<View style = {styles.infoContainer}>
					<Text style={styles.infoText}>{props.user.constraints.size}m^2</Text>
					<Text style={styles.infoText}> min. size</Text>
				</View>
				<View style = {styles.infoContainer}>
					<Text style={styles.infoText}>{props.user.constraints.flatmates}</Text>
					<Text style={styles.infoText}> max. mates</Text> 
				</View>
			</View>
			<View style = {styles.infoProfile}>
				<Text style={styles.infoTextTitle}>Info:</Text>
				<Text style={styles.infoText}>    Age: {props.user.info.age}</Text>
				<Text style={styles.infoText}>    City: {props.user.info.city}</Text>
				<Text style={styles.infoText}>    Gender: {props.user.info.gender}</Text>
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