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
	AvoidingView:{
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
		marginLeft:5,
	},
	sliderView:{
		alignItems: 'stretch',
		marginBottom: 10,
		marginTop: 10,
		marginLeft:20,
		marginRight:20
	},
	wrappingView:{
		flexDirection:'row',
		justifyContent: 'flex-start',
		backgroundColor: '#f5fcff',
	},
	buttonView:{
		flexDirection: 'row', 
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f5fcff',
	},
	Scroll:{
		justifyContent: 'center',
		alignItems: 'flex-start',
		backgroundColor: 'lightgrey',
		padding: 10,
	},
	Scroll2:{
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-start',
		backgroundColor: 'lightgrey',
		padding: 10,
	},
	notintView:{
		flexDirection: 'row', 
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		backgroundColor: '#f5fcff',
	},
	text: {
		fontSize: 17,
	},
	textQuest: {
		fontSize: 17,
		marginLeft:5,
	},
	row: {
		marginLeft: 10,
		marginRight: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	row2: {
		marginLeft: 10,
		flexDirection: 'row', 
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
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
	whitebutton: {
		alignSelf: 'stretch',
		margin: 5,
		padding: 5,
		borderRadius: 10,
		height: 35,
		justifyContent: 'center',
		backgroundColor: 'white',
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
		padding: 5
	},
	infoProfile:{
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: '#f5fcff',
		padding: 5
	},
	infoTextTitle:{
		fontWeight: 'bold',
		marginTop: 10,
		fontSize: 22,
	},
	infoText:{
		fontSize: 17,
	},
	infoText2:{
		fontSize: 17,
		margin: 2,
	},
    edittext: {
		fontSize:25,
		color: 'white'
	},
    joiningUsers: {
		fontSize:18,
		color: 'black',
		backgroundColor: 'lightgrey'
	},
	buttonTextLike: {
		color: 'white',
		fontSize: 20,
		alignSelf: 'center'
	},
	interestedbutton:{
		borderRadius: 5,
		height: 40,
		width: 120,
		marginLeft: 15,
		marginTop: 10,
		justifyContent: 'space-evenly',
		alignItems: 'stretch',
		backgroundColor:'lightgreen',
	},
	notintbutton:{
		borderRadius: 5,
		height: 40,
		width:170,
		marginLeft: 190,
		justifyContent: 'center',
		backgroundColor:'#ff6666',
	},
}); 

export default styles;