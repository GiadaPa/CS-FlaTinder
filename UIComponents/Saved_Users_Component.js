//Saved_Users_Component.js
import React from 'react';
import { TouchableHighlight,ScrollView, View, Text, Image } from 'react-native';

import styles from '../style'



const Saved_Users_Component = props => (
	<View style = {{flex:1, margin: 5}}>
		<Text style={styles.joiningUsers}>Saved Users</Text>
		{props.users.length == 0?
			<Text style={styles.noUserText}>No user saved</Text>:
			<ScrollView
				bounces={false}
				contentContainerStyle={{alignItems:'flex-start'}}
			>
			{
				props.users.map((user, index) => (
					<TouchableHighlight
						key = {user.username}
						onPress= {() => props.selectUser(user.username)}
					>
						<View style = {styles.ScrollSave}>
							{user.image == ''?
								(user.info.gender == 'female'?
									<Image
										source={require('../assets/femalepic.jpg')}
										style = {{width:200, height:200}}
									/>:
									<Image
										source={require('../assets/malepic.jpg')}
										style = {{width:200, height:200}}
									/>
								):
								(<Image
									source={{uri: user.image}}
									style = {{width:200, height:200}}
								/>)
							}
							<Text style={styles.savedUsers}>{user.username}</Text>
						</View>
					</TouchableHighlight>
				))
			}
			</ScrollView>
		}
	</View>
)

export default Saved_Users_Component;