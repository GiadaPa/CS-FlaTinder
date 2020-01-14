//StateContainer.js
import {PersistContainer} from './PersistContainer'
import {AsyncStorage, Alert} from 'react-native'

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as MailComposer from 'expo-mail-composer';

export default class StateContainer extends PersistContainer{
	constructor(props){
		super(props)
		this.state = {
			users: [],
			shownUserIndex: -1,
			tempUsername: "",
			tempPassword: "",
			tempInfo: {age: 0, city: "", gender: "", email: "", phone:""},
			tempConstraints: {budget: 0, flatmates: 0, size: 0, roommates: null, personality: "", talkative: "", food:0, study:0, party:0},
			loggedInUser: -1	//the index of the logged in user in the users array
		}
	}
	
	getUsers = () => {
		console.log(this.state.users)
		return this.state.users
	}
	
	getLoggedInUser = () => {
		console.log(this.state.loggedInUser)
		return this.state.loggedInUser
	}
	
	getShownUserIndex = () => {
		return this.state.shownUserIndex
	}
	
	setTempInfo = (value, id) => {
		var newInfo = this.state.tempInfo
		switch(id) {
			case "age":
				newInfo = {age:value, city:this.state.tempInfo.city, gender:this.state.tempInfo.gender, email:this.state.tempInfo.email, phone:this.state.tempInfo.phone}
				break;
			case "city":
				newInfo = {age:this.state.tempInfo.age, city:value, gender:this.state.tempInfo.gender, email:this.state.tempInfo.email, phone:this.state.tempInfo.phone}
				break;
			case "gender":
				newInfo = {age:this.state.tempInfo.age, city:this.state.tempInfo.city, gender:value, email:this.state.tempInfo.email, phone:this.state.tempInfo.phone}
				break;
			case "email":
				newInfo = {age:this.state.tempInfo.age, city:this.state.tempInfo.city, gender:this.state.tempInfo.gender, email:value, phone:this.state.tempInfo.phone}
				break;
			case "phone":
				newInfo = {age:this.state.tempInfo.age, city:this.state.tempInfo.city, gender:this.state.tempInfo.gender, email:this.state.tempInfo.email, phone:value}
				break;
		}
		this.setState({tempInfo: newInfo})
	}
	
	updateTempInfo = () => {
		this.setState({tempInfo: {age: this.state.users[this.state.loggedInUser].info.age, city: this.state.users[this.state.loggedInUser].info.city, gender: this.state.users[this.state.loggedInUser].info.gender, email: this.state.users[this.state.loggedInUser].info.email, phone: this.state.users[this.state.loggedInUser].info.phone}})
	}
	
	updateTempConstraints = () => {
		this.setState({tempConstraints: {budget: this.state.users[this.state.loggedInUser].constraints.budget, flatmates: this.state.users[this.state.loggedInUser].constraints.flatmates, size: this.state.users[this.state.loggedInUser].constraints.size, roommates: this.state.users[this.state.loggedInUser].constraints.roommates, personality: this.state.users[this.state.loggedInUser].constraints.personality, talkative: this.state.users[this.state.loggedInUser].constraints.talkative, food: this.state.users[this.state.loggedInUser].constraints.food, study:this.state.users[this.state.loggedInUser].constraints.study, party:this.state.users[this.state.loggedInUser].constraints.party}})
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
			for(var i=0; i<this.state.users.length; i++)
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
	}

	sendEmail = () => {
		MailComposer.composeAsync({
			recipients:[this.state.users[this.state.shownUserIndex].info.email],  //sono i destinatari o chi la manda?
			subject:"Request for flat sharing",
			})
			console.log("hey")
	}

	likeAlert = () => {
		Alert.alert(
			'Liked profile'
		)
	}
	
	login = () => {
		for(var i=0; i<this.state.users.length; i++)
		{
			if(this.state.tempUsername == this.state.users[i].username && this.state.tempPassword == this.state.users[i].password)
			{
				this.setState({loggedInUser: i, tempPassword: "", tempUsername: ""})
				return true
			}
		}
		return false
	}

	logout = () => {
		console.log(this.state)
	}

	signup = () => {
		if(this.state.tempUsername == "")
		{
			alert("invalid username")
			return false
		}
		if(this.state.tempPassword == "")
		{
			alert("invalid password")
			return false
		}
		if(this.state.tempInfo.age == 0)
		{
			alert("invalid age")
			return false
		}
		if(this.state.tempInfo.city == "")
		{
			alert("invalid city")
			return false
		}
		if(this.state.tempInfo.email == "")
		{
			alert("invalid email")
			return false
		}
		if(this.state.tempInfo.gender == "")
		{
			alert("invalid gender")
			return false
		}
		for(var i=0; i<this.state.users.length; i++)
		{
			if(this.state.tempUsername == this.state.users[i].username)
			{
				alert("username already exists")
				return false
			}
		}
		return true
	}
	
	checkConstraints = () => {
		if(this.state.tempConstraints.budget == 0)
		{
			alert("invalid budget")
			return false
		}
		if(this.state.tempConstraints.flatmates == 0)
		{
			alert("invalid flatmates number")
			return false
		}
		if(this.state.tempConstraints.size == 0)
		{
			alert("invalid size")
			return false
		}
		if(this.state.tempConstraints.roommates == null)
		{
			alert("insert if you want roommates")
			return false
		}
		if(this.state.tempConstraints.personality == "")
		{
			alert("insert your personality")
			return false
		}
		if(this.state.tempConstraints.talkative == "")
		{
			alert("insert your talkative level")
			return false
		}
		return true
	}
	
	register = () => { //save username, password and constraints
		const updatedUsers = [...this.state.users, {username: this.state.tempUsername, password: this.state.tempPassword,info: this.state.tempInfo, constraints: this.state.tempConstraints, image: ''}]
		this.setState({users: updatedUsers, loggedInUser: (updatedUsers.length-1), tempPassword: "", tempUsername: ""})
	}
	
	resetTemps = () => {
		const clearInfo = {age: 0, city: "", gender: "", email: "", phone:""}
		const clearConstraints = {budget: 0, flatmates: 0, size: 0, roommates: null, personality: "", talkative: "", food:0, study:0, party:0}
		this.setState({shownUserIndex: -1, tempUsername: "", tempPassword: "", tempInfo: clearInfo, tempConstraints: clearConstraints, loggedInUser: -1})
	}
	
	saveChanges = (id) => {
		switch(id) {
			case "info":
				updatedUser = {username: this.state.users[this.state.loggedInUser].username, password: this.state.users[this.state.loggedInUser].password, info: this.state.tempInfo, constraints: this.state.users[this.state.loggedInUser].constraints, image: this.state.users[this.state.loggedInUser].image}
				break;
			case "constraints":
				updatedUser = {username: this.state.users[this.state.loggedInUser].username, password: this.state.users[this.state.loggedInUser].password, info:  this.state.users[this.state.loggedInUser].info, constraints: this.state.tempConstraints, image: this.state.users[this.state.loggedInUser].image}
				break;
		}
		var newUsers = []
		for(i=0; i<this.state.users.length; i++)
		{
			if(i==this.state.loggedInUser)
			{
				newUsers = [...newUsers, updatedUser]
			}
			else
			{
				newUsers = [...newUsers, this.state.users[i]]
			}
		}
		this.setState({users: newUsers})
	}
	
	setShownUserIndex = (index) => {
		this.setState({shownUserIndex: index})
	}
	
	persist = {			
		key: 'flatinder',
		version: 1,
		storage: AsyncStorage,
	}
}