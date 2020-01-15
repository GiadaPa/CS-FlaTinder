import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

import styles from '../style'

const Personal_Profile_Component = props => (
	<View style = {styles.MainContainerProfile}>
		{props.user.image == ''?
			(props.user.info.gender == 'female'?
				<Avatar
					source={require('../assets/femalepic.jpg')}
					showEditButton
					size='xlarge'
					onEditPress={() => props.chooseImage()}
				/>:
				<Avatar
					source={require('../assets/malepic.jpg')}
					showEditButton
					size='xlarge'
					onEditPress={() => props.chooseImage()}
				/>
			):
			(<Avatar
				source={{uri: props.user.image}}
				showEditButton
				size='xlarge'
				onEditPress={() => props.chooseImage()}
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
			<Text style={styles.infoTextTitle}>Contact:</Text>
			<Text style={styles.infoText}>    Email address: {props.user.info.email}</Text>
			<Text style={styles.infoText}>    Phone number: {props.user.info.phone}</Text>
		</View>
	</View>
)

export default Personal_Profile_Component
