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
	MainContainerProfile: {
		flex: 1,
		justifyContent: 'flex-start',
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
		marginTop: 5,
		marginRight:20,
		marginBottom: 20,
	},
	textQuestions: {
		fontWeight: 'bold',
		fontSize: 15,
		color: 'black',
		marginTop: 10
	},
	underlinedText: {
		fontSize: 15,
		color: 'red',
		textDecorationLine: 'underline',
	},
	radioTitle: {
		fontWeight: 'bold',
	},
	TextMyname: {
		fontWeight: 'bold',
		fontSize: 30,
		margin: 10,
	},
	myPicStyle:{
		maxHeight:200, 
		maxWidth: 350,
	},
	constrPersonal: {
		justifyContent: 'flex-start',
		alignItems: 'baseline',
		backgroundColor: '#f5fcff',
		flexDirection: 'row'
	},
	infoContainer:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lightgrey',
		padding: 20
	},
	infoProfile:{
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: '#f5fcff',
		padding: 11
	},
	infoTextTitle:{
		fontWeight: 'bold',
		marginTop: 20,
		fontSize: 20,
	},
	infoText:{
		fontSize: 20,
	},
}); 

export default styles;
