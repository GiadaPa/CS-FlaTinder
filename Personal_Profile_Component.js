import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView } from 'react-native';
import { Avatar, Divider } from 'react-native-elements';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import styles from '../style'

export default class Personal_Profile_Component extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            myname:"Giada Palma",
            image: '../assets/mypic.jpg',
            budget: 250,
            size: 30,
            mates: 3,
            info: {
                age: 20,
                city: 'Bolzano',
                gender: 'Female',
            },
            contact: {
                email: 'gipalma@unibz.it',
                phone: 123456,
            }
        }
    }

    render(){
        let {image} = this.state;

        return(
            <View style = {styles.MainContainerProfile}>
                <Avatar
                    source={{uri: image}}
                    showEditButton
                    size='xlarge'
                    onEditPress={this.chooseImage}
                />
                <Text style={styles.TextMyname}>{this.state.myname}</Text>
                <View style={styles.constrPersonal}>
                    <View style = {styles.infoContainer}>
                        <Text style={styles.infoText}>{this.state.budget}</Text> 
                        <Text style={styles.infoText}> max. budget</Text>
                    </View>
                    <View style = {styles.infoContainer}>
                        <Text style={styles.infoText}>{this.state.size}m^2</Text>
                        <Text style={styles.infoText}> min. size</Text>
                    </View>
                    <View style = {styles.infoContainer}>
                        <Text style={styles.infoText}>{this.state.mates}</Text>
                        <Text style={styles.infoText}> max. mates</Text> 
                    </View>
                </View>
                <View style = {styles.infoProfile}>
                    <Text style={styles.infoTextTitle}>Info:</Text>
                    <Text style={styles.infoText}>Age: {this.state.info.age}</Text>
                    <Text style={styles.infoText}>City: {this.state.info.city}</Text>
                    <Text style={styles.infoText}>Gender: {this.state.info.gender}</Text>
                    <Text style={styles.infoTextTitle}>Contact:</Text>
                    <Text style={styles.infoText}>Email address: {this.state.contact.email}</Text>
                    <Text style={styles.infoText}>Phone number: {this.state.contact.phone}</Text>
                </View>
            </View>
        )
    }

        componentDidMount() {
            this.getPermissionsAsync();
        }

        getPermissionsAsync = async () => {
            if (Constants.platform.ios) {
                const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
                if (status !== 'granted') {
                  alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        }

        chooseImage = async () => {
            let result = await ImagePicker.launchImageLibraryAsync
            ({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            });

            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }
        };
}
