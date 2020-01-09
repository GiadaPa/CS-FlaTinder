//StateContainer.js
import {PersistContainer} from './PersistContainer'
import {AsyncStorage} from 'react-native'

export default class StateContainer extends PersistContainer{
	constructor(props){
		super(props)
		this.state = {
			users: [],
			tempUsername: "",
			tempPassword: "",
			tempConstraints: {budget: 0, flatmates: 0, size: 0, roommates: false, personality: "ambivert", talkative: "medium", food: 0, study:0, party:0}
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
	
	login = () => {
		for(i=0; i<this.state.users.length; i++)
		{
			if(this.state.tempUsername == this.state.users[i].username && this.state.tempPassword == this.state.users[i].password)
			{
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
		const updatedUsers = [...this.state.users, {username: this.state.tempUsername, password: this.state.tempPassword, constraints: this.state.tempConstraints}]
		this.setState({users: updatedUsers}, () => {
			console.log("STATE")
			console.log(this.state)
		})
		
	}
	
	persist = {			
		key: 'flatinder',
		version: 1,
		storage: AsyncStorage,
	}
}