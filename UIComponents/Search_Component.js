import React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import {Avatar} from 'react-native-elements';

import styles from '../style'

const Search_Component = props => (
        <View style = {styles.MainContainerProfile}>
            {(props.user.image == '') ?
				(props.user.info.gender == 'female'?
					<Avatar
						source={require('../assets/femalepic.jpg')}
						rounded
						size={280}
					/>:
					<Avatar
						source={require('../assets/malepic.jpg')}
						rounded
						size={280}
					/>
				):
				(<Avatar
					source={{uri: props.user.image}}
					rounded
					size={280}
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

            <View style={styles.wrappingView}>
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
						style={{ width: 40, height: 40}} 
					/>
				</TouchableHighlight>
				
				<TouchableHighlight
				onPress={() => props.saveUser()}
				>
				{props.checkIfSaved?
					<Image
						source= {require('../assets/saved.png')}
						style={{ width: 40, height: 40}} 
					/>:
					<Image
						source={require('../assets/save.png')}
						style={{ width: 40, height: 40}} 
					/>
				}
				</TouchableHighlight>
				
				<TouchableHighlight
					style ={styles.interestedbutton}
					onPress={() => props.sendEmail()}
				>
					<Text style={styles.buttonText}>SEND EMAIL</Text>
                </TouchableHighlight>
				<TouchableHighlight
					style ={styles.viewOnMap}
					onPress={() => props.viewOnMap()}
				>
					<Text style={styles.buttonText}>VIEW ON MAP</Text>
				</TouchableHighlight>
			</View>
        </View>
)

export default Search_Component;