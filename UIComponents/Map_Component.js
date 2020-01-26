import React from 'react';
import { Dimensions, View, Text, Image, Button } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const Map_Component = props => (
	<MapView 
		style={{
			width: Dimensions.get('window').width,
			height: Dimensions.get('window').height
		}}
		initialRegion={{
			latitude: (props.location.latitude + props.myLocation.latitude)/2,
			longitude: (props.location.longitude + props.myLocation.longitude)/2,
			latitudeDelta: Math.abs(props.location.latitude - props.myLocation.latitude)*2,
			longitudeDelta: Math.abs(props.location.longitude - props.myLocation.longitude)*2,
		}}
	>
		<Marker
			coordinate={{latitude: props.location.latitude,
			longitude: props.location.longitude}}
			title={"Mate"}
			description={"Mates position"}
			pinColor = {"red"}
		/>
		<Marker
			coordinate={{latitude: props.myLocation.latitude,
			longitude: props.myLocation.longitude}}
			title={"Me"}
			description={"My position"}
			pinColor={"blue"}
		/>
	</MapView>
)

export default Map_Component