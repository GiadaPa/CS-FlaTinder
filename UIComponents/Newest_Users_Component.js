//Newest_Users_Component.js
import React from 'react';
import { TouchableHighlight,ScrollView, View, Text, Image } from 'react-native';

import { Divider } from 'react-native-elements';
import styles from '../style'



const Newest_Users_Component = props => (
	<View>
		<View style = {styles.newestUsersComponent}>
			<Text style={styles.joiningUsers}>Users that joined FlaTinder recently</Text>
			{props.users.length == 0?
				<Text style={styles.noUserText}>You are the only user :( invite your friends!</Text>:
				<ScrollView
					horizontal={true}
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
											style = {styles.image}
										/>:
										<Image
											source={require('../assets/malepic.jpg')}
											style = {styles.image}
										/>
									):
									(<Image
										source={{uri: user.image}}
										style = {styles.image}
									/>)
								}
								<Text style={styles.infoText}>{user.username}</Text>
								<Text style={styles.infoText}>Likes: {user.likes.length}</Text>
							</View>
						</TouchableHighlight>
					))
				}
				</ScrollView>
			}
		</View>
		<Divider style={styles.divider} />
	</View>
	
)

export default Newest_Users_Component;