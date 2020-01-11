//StateContainer.js
import {PersistContainer} from './PersistContainer'
import {AsyncStorage} from 'react-native'

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class StateContainer extends PersistContainer{
	constructor(props){
		super(props)
		this.state = {
			users: [],
			tempUsername: "",
			tempPassword: "",
			tempInfo: {age: 0, city: "", gender: "", email: "", phone:""},
			tempConstraints: {budget: 0, flatmates: 0, size: 0, roommates: false, personality: "ambivert", talkative: "medium", food: 0, study:0, party:0},
			loggedInUser: 0	//the index of the logged in user in the users array
		}
	}
	
	getUsers = () => {
		return this.state.users
	}
	
	getLoggedInUser = () => {
		return this.state.loggedInUser
	}
	
	setTempInfo = (value, id) => {
		var newInfo = this.state.tempInfo
		switch(id) {
			case "age":
				newInfo = {age:value, city:this.state.tempInfo.city, gender:this.state.tempInfo.gender, email:this.state.tempInfo.email, phone:this.state.tempInfo.phone}
				this.setState({tempInfo: newInfo})
				break;
			case "city":
				newInfo = {age:this.state.tempInfo.age, city:value, gender:this.state.tempInfo.gender, email:this.state.tempInfo.email, phone:this.state.tempInfo.phone}
				this.setState({tempInfo: newInfo})
				break;
			case "gender":
				newInfo = {age:this.state.tempInfo.age, city:this.state.tempInfo.city, gender:value, email:this.state.tempInfo.email, phone:this.state.tempInfo.phone}
				this.setState({tempInfo: newInfo})
				break;
			case "email":
				newInfo = {age:this.state.tempInfo.age, city:this.state.tempInfo.city, gender:this.state.tempInfo.gender, email:value, phone:this.state.tempInfo.phone}
				this.setState({tempInfo: newInfo})
				break;
			case "phone":
				newInfo = {age:this.state.tempInfo.age, city:this.state.tempInfo.city, gender:this.state.tempInfo.gender, email:this.state.tempInfo.email, phone:value}
				this.setState({tempInfo: newInfo})
				break;
		}
	}
	
	setTempUsername = username => {
		this.setState({tempUsername: username})
	}
	
	setTempPassword = password => {
		this.setState({tempPassword: password})
	}
	
	setTempConstraints = (value, id) => {
		var newConstraints = this.state.tempConstraints
		switch(id) {
			case "budget":
				newConstraints = {budget: value, flatmates: this.state.tempConstraints.flatmates, size: this.state.tempConstraints.size, roommates: this.state.tempConstraints.roommates, personality: this.state.tempConstraints.personality, talkative: this.state.tempConstraints.talkative, clean: this.state.tempConstraints.clean, food: this.state.tempConstraints.food, study:this.state.tempConstraints.study, party: this.state.tempConstraints.party}
				this.setState({tempConstraints: newConstraints})
				break;
			case "flatmates":
				newConstraints = {budget: this.state.tempConstraints.budget, flatmates: value, size: this.state.tempConstraints.size, roommates: this.state.tempConstraints.roommates, personality: this.state.tempConstraints.personality, talkative: this.state.tempConstraints.talkative, clean: this.state.tempConstraints.clean, food: this.state.tempConstraints.food, study:this.state.tempConstraints.study, party: this.state.tempConstraints.party}
				this.setState({tempConstraints: newConstraints})
				break;
			case "size":
				newConstraints = {budget: this.state.tempConstraints.budget, flatmates: this.state.tempConstraints.flatmates, size: value, roommates: this.state.tempConstraints.roommates, personality: this.state.tempConstraints.personality, talkative: this.state.tempConstraints.talkative, clean: this.state.tempConstraints.clean, food: this.state.tempConstraints.food, study:this.state.tempConstraints.study, party: this.state.tempConstraints.party}
				this.setState({tempConstraints: newConstraints})
				break;
			case "roommates":
				var newValue = false
				if(value == "true")
				{
					newValue = true
				}
				newConstraints = {budget: this.state.tempConstraints.budget, flatmates: this.state.tempConstraints.flatmates, size: this.state.tempConstraints.size, roommates: newValue, personality: this.state.tempConstraints.personality, talkative: this.state.tempConstraints.talkative, clean: this.state.tempConstraints.clean, food: this.state.tempConstraints.food, study:this.state.tempConstraints.study, party: this.state.tempConstraints.party}
				this.setState({tempConstraints: newConstraints})
				break;
			case "personality":
				newConstraints = {budget: this.state.tempConstraints.budget, flatmates: this.state.tempConstraints.flatmates, size: this.state.tempConstraints.size, roommates: this.state.tempConstraints.roommates, personality: value, talkative: this.state.tempConstraints.talkative, clean: this.state.tempConstraints.clean, food: this.state.tempConstraints.food, study:this.state.tempConstraints.study, party: this.state.tempConstraints.party}
				this.setState({tempConstraints: newConstraints})
				break;
			case "talkative":
				newConstraints = {budget: this.state.tempConstraints.budget, flatmates: this.state.tempConstraints.flatmates, size: this.state.tempConstraints.size, roommates: this.state.tempConstraints.roommates, personality: this.state.tempConstraints.personality, talkative: value, clean: this.state.tempConstraints.clean, food: this.state.tempConstraints.food, study:this.state.tempConstraints.study, party: this.state.tempConstraints.party}
				this.setState({tempConstraints: newConstraints})
				break;
			case "clean":
				newConstraints = {budget: this.state.tempConstraints.budget, flatmates: this.state.tempConstraints.flatmates, size: this.state.tempConstraints.size, roommates: this.state.tempConstraints.roommates, personality: this.state.tempConstraints.personality, talkative: this.state.tempConstraints.talkative, clean: value, food: this.state.tempConstraints.food, study:this.state.tempConstraints.study, party: this.state.tempConstraints.party}
				this.setState({tempConstraints: newConstraints})
				break;
			case "food":
				newConstraints = {budget: this.state.tempConstraints.budget, flatmates: this.state.tempConstraints.flatmates, size: this.state.tempConstraints.size, roommates: this.state.tempConstraints.roommates, personality: this.state.tempConstraints.personality, talkative: this.state.tempConstraints.talkative, clean: this.state.tempConstraints.clean, food: value, study:this.state.tempConstraints.study, party: this.state.tempConstraints.party}
				this.setState({tempConstraints: newConstraints})
				break;
			case "study":
				newConstraints = {budget: this.state.tempConstraints.budget, flatmates: this.state.tempConstraints.flatmates, size: this.state.tempConstraints.size, roommates: this.state.tempConstraints.roommates, personality: this.state.tempConstraints.personality, talkative: this.state.tempConstraints.talkative, clean: this.state.tempConstraints.clean, food: this.state.tempConstraints.food, study: value, party: this.state.tempConstraints.party}
				this.setState({tempConstraints: newConstraints})
				break;
			case "party":
				newConstraints = {budget: this.state.tempConstraints.budget, flatmates: this.state.tempConstraints.flatmates, size: this.state.tempConstraints.size, roommates: this.state.tempConstraints.roommates, personality: this.state.tempConstraints.personality, talkative: this.state.tempConstraints.talkative, clean: this.state.tempConstraints.clean, food: this.state.tempConstraints.food, study:this.state.tempConstraints.study, party: value}
				this.setState({tempConstraints: newConstraints})
				break;
        }
	}
	
	chooseImage = async () => {
		//Permissions
		if (Constants.platform.ios) {
			const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
			if (status !== 'granted') {
				alert('Sorry, we need camera roll permissions to make this work!');
				return 
			}
		}
		
		let result = await ImagePicker.launchImageLibraryAsync
		({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1
		});

		if (!result.cancelled) {
			var updatedUsers = []
			for(i=0; i<this.state.users.length; i++)
			{
				if(i==this.state.loggedInUser)
				{
					updatedUsers = [...updatedUsers, {username: this.state.users[this.state.loggedInUser].username, password: this.state.users[this.state.loggedInUser].password, info: this.state.users[this.state.loggedInUser].info, constraints: this.state.users[this.state.loggedInUser].constraints, image: result.uri}]
				}
				else
				{
					updatedUsers = [...updatedUsers, this.state.users[i]]
				}
			}
			await this.setState({users: updatedUsers})
		}
	};
	
	login = () => {
		for(i=0; i<this.state.users.length; i++)
		{
			if(this.state.tempUsername == this.state.users[i].username && this.state.tempPassword == this.state.users[i].password)
			{
				this.setState({loggedInUser: i})
				return true
			}
		}
		return false
	}
	
	signup = () => { //check if username already exists
		for(i=0; i<this.state.users.length; i++)
		{
			if(this.state.tempUsername == this.state.users[i].username)
			{
				return false
			}
		}
		return true
	}
	
	register = () => { //save username, password and constraints
		const updatedUsers = [...this.state.users, {username: this.state.tempUsername, password: this.state.tempPassword,info: this.state.tempInfo, constraints: this.state.tempConstraints, image: ''}]
		this.setState({users: updatedUsers, loggedInUser: (updatedUsers.length-1)}, () => {
			console.log("STATE AS REGISTER")
			console.log(this.state)
		})
		
	}
	
	persist = {			
		key: 'flatinder',
		version: 1,
		storage: AsyncStorage,
	}
}