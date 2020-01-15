//Newest_Users_Component.js
import React from 'react';
import { TouchableHighlight,ScrollView, View, Text, Image, Button } from 'react-native';

import { Divider } from 'react-native-elements';
import styles from '../style'


const Newest_Users_Component = props => (
	<View>
	<View>
	<Text style={styles.joiningUsers}>Users that joined FlaTinder recently</Text>
		<ScrollView
			horizontal={true}
			bounces={false}
			contentContainerStyle={{alignItems:'flex-start'}}
			>
				{
					props.users.reverse().map((user, index) => ( //invert array
						<TouchableHighlight
							key = {user.username}
							onPress= {() => props.selectUser(index)}
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
								<Text style={styles.infoText}>Liked: </Text>
								</View>
							</TouchableHighlight>
					))
				}
		</ScrollView>
		</View>
		<Divider style={{ height: 2, backgroundColor: 'black' }} />
	</View>
)

//<Text>{props.userLikes}</Text>
export default Newest_Users_Component;
