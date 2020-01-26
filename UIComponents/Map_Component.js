import React from 'react';
import { Dimensions, View, Text, Image, Button } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class Map_Component extends React.Component {
    state = {
        location: null,
        getFlatmateLocation: null,
      }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            console.error('Permission to access location was denied')
            return;
        }
    
        let location = await Location.getCurrentPositionAsync({});
        let getFlatmateLocation = this.props.getLocation()
        this.setState({ location, getFlatmateLocation });
    }

    componentDidUpdate() {
          this._getLocationAsync();
    }
    
    render() {
        if(this.state.location){
            return (<View/>)
        }
        return(
            <MapView style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height}}
                initialRegion={{
                    latitude: this.state.location.coords.latitude,
                    longitude: this.state.location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
            <Marker   
                coordinate={this.state.location.coords}
                title="you are here"
                pinColor="blue"
                />
            <Marker   
                coordinate={this.state.getFlatmateLocation}
                //title={this.props. //nome dell'user}
                pinColor="red"
                />
            </MapView>
        )
    }
}
