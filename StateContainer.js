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
			users: [], //username, password, info, constraints, image, likes, firstScore, secondScore, savedUsers
			shownUserIndex: -1,
			nextMate: 0,
			tempUsername: "",
			tempPassword: "",
			tempInfo: {age: 0, city: "", gender: "", email: "", phone:""},
			tempConstraints: {budget: 0, flatmates: 0, size: 0, roommates: null, personality: "", talkative: "", food:0, study:0, party:0},
			loggedInUser: -1	//the index of the logged in user in the users array
		}
	}
	
	getUsers = () => {
		return this.state.users
	}
	
	getLoggedInUser = () => {
		return this.state.loggedInUser
	}
	
	getShownUserIndex = () => {
		console.log("BBBBBBBBBBBBBBBBB")
		console.log(this.state.shownUserIndex)/////
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
					updatedUsers = [...updatedUsers, {username: this.state.users[this.state.loggedInUser].username, password: this.state.users[this.state.loggedInUser].password, info: this.state.users[this.state.loggedInUser].info, constraints: this.state.users[this.state.loggedInUser].constraints, image: result.uri, likes: this.state.users[this.state.loggedInUser].likes, firstScore: this.state.users[this.state.loggedInUser].firstScore, secondScore: this.state.users[this.state.loggedInUser].secondScore, savedUsers: this.state.users[this.state.loggedInUser].savedUsers}]
				}
				else
				{
					updatedUsers = [...updatedUsers, this.state.users[i]]
				}
			}
			await this.setState({users: updatedUsers})
		}
	}

	sendEmail = (user) => {
		MailComposer.composeAsync({
			recipients:[user.info.email],  //sono i destinatari o chi la manda?
			subject:"Request for flat sharing",
			})
	}

	saveUser = (user) => {
		var newSavedUsers = []
		var newUsers = []
		var different = true
		for(var i=0; i<this.state.users[this.state.loggedInUser].savedUsers.length; i++)
		{
			if(this.state.users[this.state.loggedInUser].savedUsers[i].username.toUpperCase() == user.username.toUpperCase())
			{
				different = false //se giò saved
				
			}
		}
		if(different)
		{
			newSavedUsers = [...this.state.users[this.state.loggedInUser].savedUsers, user]
			for(var i=0; i<this.state.users.length; i++)
			{
				if(this.state.users[this.state.loggedInUser].username.toUpperCase() == this.state.users[i].username.toUpperCase())
				{
					newUsers = [...newUsers, {username: this.state.users[this.state.loggedInUser].username, password: this.state.users[this.state.loggedInUser].password, info: this.state.users[this.state.loggedInUser].info, constraints: this.state.users[this.state.loggedInUser].constraints, image: this.state.users[this.state.loggedInUser].image, likes: this.state.users[this.state.loggedInUser].likes, firstScore: this.state.users[this.state.loggedInUser].firstScore, secondScore: this.state.users[this.state.loggedInUser].secondScore, savedUsers: newSavedUsers}]
				}
				else
				{
					newUsers = [...newUsers, this.state.users[i]]
				}
			}
			this.setState({users: newUsers})
			alert('Saved')
		}
		else //se già saved
		{
			for(i=0; i<this.state.users[this.state.loggedInUser].savedUsers.length; i++)
			{
				if(this.state.users[this.state.loggedInUser].savedUsers[i].username.toUpperCase() != user.username.toUpperCase())
				{
					newSavedUsers = [...newSavedUsers, this.state.users[this.state.loggedInUser].savedUsers[i]]
				}
			}
			for(var i=0; i<this.state.users.length; i++)
			{
				if(this.state.users[this.state.loggedInUser].username.toUpperCase() == this.state.users[i].username.toUpperCase())
				{
					newUsers = [...newUsers, {username: this.state.users[this.state.loggedInUser].username, password: this.state.users[this.state.loggedInUser].password, info: this.state.users[this.state.loggedInUser].info, constraints: this.state.users[this.state.loggedInUser].constraints, image: this.state.users[this.state.loggedInUser].image, likes: this.state.users[this.state.loggedInUser].likes, firstScore: this.state.users[this.state.loggedInUser].firstScore, secondScore: this.state.users[this.state.loggedInUser].secondScore, savedUsers: newSavedUsers}]
				}
				else
				{
					newUsers = [...newUsers, this.state.users[i]]
				}
			}
			this.setState({users: newUsers})
			alert('Removed')
		}
	}

	likeAlert = (user) => {
		alert('Liked profile')
		var newLikes = []
		var newUsers = []
		for(var i=0; i<this.state.users.length; i++)
		{
			if(user.username.toUpperCase() == this.state.users[i].username.toUpperCase())
			{
				const newLike = {username: this.state.users[this.state.loggedInUser].username}
				newLikes = [...this.state.users[i].likes, newLike]
				newUsers = [...newUsers, {username: user.username, password: user.password, info:  user.info, constraints: user.constraints, image: user.image, likes: newLikes, firstScore: user.firstScore, secondScore: user.secondScore, savedUsers: user.savedUsers}]
			}
			else
			{
				newUsers = [...newUsers, this.state.users[i]]
			}
		}
		this.setState({users: newUsers})
		console.log(newUsers)
	}
	
	login = () => {
		for(var i=0; i<this.state.users.length; i++)
		{
			if(this.state.tempUsername.toUpperCase() == this.state.users[i].username.toUpperCase() && this.state.tempPassword == this.state.users[i].password)
			{
				this.setState({loggedInUser: i, tempPassword: "", tempUsername: "", nextMate: 0})
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
			if(this.state.tempUsername.toUpperCase() == this.state.users[i].username.toUpperCase())
			{
				alert("username already exists")
				return false
			}
		}
		return true
	}
	
	checkConstraints = () => {
		if(this.state.tempConstraints.budget <= 0)
		{
			alert("invalid budget")
			return false
		}
		if(this.state.tempConstraints.flatmates <= 0)
		{
			alert("invalid flatmates number")
			return false
		}
		if(this.state.tempConstraints.size <= 0)
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
		var firstscore = 0
		var secondscore = 0
		const constraints = this.state.tempConstraints
		var budget  = Math.floor(constraints.budget / 100) *3
		if(budget > 9)
		{
			budget = 9
		}
		console.log("BUDGET")
		console.log(budget)
		var flatmates = (4-constraints.flatmates) * 3
		if(flatmates < 0)
		{
			flatmates = 0
		}
		console.log("FLATMATES")
		console.log(flatmates)
		var size = 0
		console.log(constraints.size)
		if(constraints.size > 0 && constraints.size <10)
		{
			size = 0
		}
		else
		{
			if(constraints.size >= 10 && constraints.size < 12)
			{
				size = 3
			}
			else
			{
				if(constraints.size >= 12 && constraints.size < 15)
				{
					size = 6
				}
				else
				{
					size = 9
				}
			}
		}
		console.log("SIZE")
		console.log(size)
		var roommates = 0
		if(constraints.roommates == true)
		{
			roommates = 0
		}
		else
		{
			roommates = 9
		}
		
		console.log("ROOMMATES")
		console.log(roommates)
		firstscore = (budget + flatmates + size + roommates) / 4
		
		var personality = 0
		if(constraints.personality == "introvert")
		{
			personality = 3
		}
		else
		{
			if(constraints.personality == "ambivert")
			{
				personality = 6
			}
			else
			{
				personality = 9
			}
		}		
		var talkative = 0
		if(constraints.talkative == "little")
		{
			talkative = 3
		}
		else
		{
			if(constraints.talkative == "medium")
			{
				talkative = 6
			}
			else
			{
				talkative = 9
			}
		}
		var clean = constraints.clean
		var food = constraints.food
		var study = constraints.study
		var party = 9 - constraints.party
		
		secondscore = (personality + talkative + clean + food + study + party)/6
		
		const updatedUsers = [...this.state.users, {username: this.state.tempUsername, password: this.state.tempPassword,info: this.state.tempInfo, constraints: this.state.tempConstraints, image: '', likes: [],  firstScore: firstscore, secondScore: secondscore, savedUsers:[]}]
		this.setState({users: updatedUsers, loggedInUser: (updatedUsers.length-1), tempPassword: "", tempUsername: "", nextMate: 0})
	}
	
	resetTemps = () => {
		const clearInfo = {age: 0, city: "", gender: "", email: "", phone:""}
		const clearConstraints = {budget: 0, flatmates: 0, size: 0, roommates: null, personality: "", talkative: "", food:0, study:0, party:0}
		this.setState({shownUserIndex: -1, tempUsername: "", tempPassword: "", tempInfo: clearInfo, tempConstraints: clearConstraints, loggedInUser: -1})
	}
	
	saveChanges = (id) => {
		switch(id) {
			case "info":
				updatedUser = {username: this.state.users[this.state.loggedInUser].username, password: this.state.users[this.state.loggedInUser].password, info: this.state.tempInfo, constraints: this.state.users[this.state.loggedInUser].constraints, image: this.state.users[this.state.loggedInUser].image, likes: this.state.users[this.state.loggedInUser].likes, savedUsers: this.state.users[this.state.loggedInUser].savedUsers}
				break;
			case "constraints":
				updatedUser = {username: this.state.users[this.state.loggedInUser].username, password: this.state.users[this.state.loggedInUser].password, info:  this.state.users[this.state.loggedInUser].info, constraints: this.state.tempConstraints, image: this.state.users[this.state.loggedInUser].image, likes: this.state.users[this.state.loggedInUser].likes, savedUsers: this.state.users[this.state.loggedInUser].savedUsers}
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
	
	
	getBestFittingUsers = () => {
		console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
		var orderedUsers = []
		for(var i=0; i<this.state.users.length; i++)
		{
			console.log(this.state.users[this.state.loggedInUser].username)
			console.log(this.state.users[i].username)
			if(this.state.users[this.state.loggedInUser].username.toUpperCase() != this.state.users[i].username.toUpperCase())
			{
				console.log("if")
				orderedUsers = [...orderedUsers, this.state.users[i]]
			}
		}
		const loggedInFirstScore = this.state.users[this.state.loggedInUser].firstScore
		const loggedInSecondScore = this.state.users[this.state.loggedInUser].secondScore
		
		orderedUsers.sort(function (a, b) { //se è meno li lascia così se è piu li gira
			const differenceA = (Math.abs(a.firstScore-loggedInFirstScore) + Math.abs(a.secondScore-loggedInSecondScore))/2
			const differenceB = (Math.abs(b.firstScore-loggedInFirstScore) + Math.abs(b.secondScore-loggedInSecondScore))/2
			return differenceA - differenceB;
		});
		
		console.log(orderedUsers)
		return(orderedUsers)
	}
	
	getNextMate = () => {
		return this.state.nextMate
	}
	
	nextMate = () => {
		newMate = this.state.nextMate + 1
		if(newMate == this.state.users.length -1)
		{
			alert("no more mates, restarting from first")
			newMate = 0
		}
		this.setState({nextMate: newMate})
	}
	
	getNewestUsers = () => {
		console.log("getnewusers")
		var newest = []
		for(var i=this.state.users.length-1; i>this.state.users.length-11 && i>=0; i--)
		{
			if(this.state.users[this.state.loggedInUser].username.toUpperCase() != this.state.users[i].username.toUpperCase())
			{
				newest = [...newest, this.state.users[i]]
			}
		}
		return newest
	}
	
	checkIfSaved(user)
	{
		console.log("checkIfSaved")
		for(i=0; i<this.state.users[this.state.loggedInUser].savedUsers.length; i++)
		{
			if(user.username.toUpperCase() == this.state.users[this.state.loggedInUser].savedUsers[i].username.toUpperCase())
			{
				console.log("true")
				return true
			}
		}
		console.log("false")
		return false
	}
	
	getSavedUsers = () => {
		console.log("getsavedusers")
		return this.state.users[this.state.loggedInUser].savedUsers
	}
	
	setShownUserIndex = (username) => {
		var index = 0
		for(var i=0; i<this.state.users.length; i++)
		{
			if(username.toUpperCase() == this.state.users[i].username.toUpperCase())
			{
				index = i
			}
		}
		this.setState({shownUserIndex: index})
	}
	
	persist = {			
		key: 'flatinder',
		version: 1,
		storage: AsyncStorage,
	}
}