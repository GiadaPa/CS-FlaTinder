//Newest_Users_Component.js
import React from 'react';
import { TouchableHighlight,ScrollView, View, Text, Image, Button } from 'react-native';

import styles from '../style'


const Newest_Users_Component = props => (
    <ScrollView
	horizontal={true}
	>
		{
			props.users.map((user, index) => ( //invert array
				<TouchableHighlight
					key = {user.username}
					onPress= {() => props.selectUser(index)}
				>
					<View style = {styles.MainContainerProfile}>
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
						<Text>{user.username}</Text>
					</View>
				</TouchableHighlight>
			))
		}
    </ScrollView>
)

export default Newest_Users_Component;