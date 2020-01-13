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
	questionnaireView: {
		alignItems: 'stretch',
		marginBottom: 10,
		marginTop: 10,
	},
	text: {
		fontSize: 17,
	},
	row: {
		marginLeft: 10,
		marginRight: 10,
		flexDirection: 'row', 
		justifyContent: 'space-between',
		alignItems: 'center',
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
		margin: 5,
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
    edittext: {
		fontSize:20,
		color: 'white'
	},
	buttonView:{
		flexDirection: 'row', 
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},
	interestedbutton:{
		borderRadius: 5,
		height: 35,
		marginLeft: 20,
		justifyContent: 'center',
		backgroundColor:'lightgreen',
	},
	notintbutton:{
		borderRadius: 5,
		height: 35,
		marginLeft: 20,
		justifyContent: 'center',
		backgroundColor:'#ff6666',

	},
}); 

export default styles;
