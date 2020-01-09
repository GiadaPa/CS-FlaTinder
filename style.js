//style.js
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5fcff',
		padding: 11
	},
	titleText: {
		fontWeight: 'bold',
		fontSize: 30,
		paddingBottom: 10,
	},
    button: {
		alignSelf: 'stretch',
		marginBottom: 25,
		borderRadius: 10,
		height: 35,
		justifyContent: 'center',
		backgroundColor:'#ff4d4d',
    },
    buttonText: {
		color: 'white',
		fontSize: 20,
		alignSelf: 'center'
	},
	textInput:{
		borderColor: 'black',
		borderWidth:1,
		height:40,
		width: 300,
		margin: 20,
	},
	text: {
		fontSize: 15,
		color: 'black',
	},
	underlinedText: {
		fontSize: 15,
		color: 'red',
		textDecorationLine: 'underline',
	},
}); 

export default styles