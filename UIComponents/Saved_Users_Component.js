//Saved_Users_Component.js
import React from 'react';
import { TouchableHighlight,ScrollView, View, Text, Image, Button } from 'react-native';

import { Divider } from 'react-native-elements';
import styles from '../style'



const Saved_Users_Component = props => (
	<View style = {{flex:1, margin: 5}}>
		<Text style={styles.joiningUsers}>Saved Users</Text>
		{props.users.length == 0?
			<Text>No user saved</Text>:
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
						<View style = {styles.Scroll}>
							{user.image == ''?
								(user.info.gender == 'female'?
									<Image
										source={require('../assets/femalepic.jpg')}
										style = {{width:100, height:100}}
									/>:
									<Image
										source={require('../assets/malepic.jpg')}
										style = {{width:100, height:100}}
									/>
								):
								(<Image
									source={{uri: user.image}}
									style = {{width:100, height:100}}
								/>)
							}
							<Text style={styles.infoText}>{user.username}</Text>
						</View>
					</TouchableHighlight>
				))
			}
			</ScrollView>
		}
	</View>
)

export default Saved_Users_Component;