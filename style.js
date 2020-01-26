//style.js
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
	MainContainer: { //si
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5fcff',
		padding: 11
	},
	MainContainerProfile: {// si
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#f5fcff',
		padding: 11
	},
	questionnaireView: { //si
		alignItems: 'stretch',
		marginBottom: 10,
		marginTop: 10,
		marginLeft:5,
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
	ScrollSave:{
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: 'lightgrey',
		padding: 50,
	},
	notintView:{
		flexDirection: 'row', 
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		backgroundColor: '#f5fcff',
	},
	text: { //si
		fontSize: 17,
	},
	row: {
		marginLeft: 10,
		marginRight: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	row2: { //si
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
    button: { //si
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
	underlinedText: {
		fontSize: 15,
		color: 'red',
		textDecorationLine: 'underline',
	},
	TextMyname: { //si
		fontWeight: 'bold',
		fontSize: 30,
		margin: 10,
	},
	constrPersonal: { //si
		justifyContent: 'flex-start',
		alignItems: 'baseline',
		backgroundColor: '#f5fcff',
		flexDirection: 'row'
	},
	infoContainer:{  //si
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lightgrey',
		padding: 5
	},
	infoProfile:{ //si
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: '#f5fcff',
		padding: 5
	},
	noUserText:{
		fontWeight: 'bold',
		marginTop: 40,
		fontSize: 18,
		color: 'red',
	},
	infoTextTitle:{ //si
		fontWeight: 'bold',
		marginTop: 10,
		fontSize: 22,
	},
	infoText:{ //si
		fontSize: 17,
	},
	infoText2:{ //si
		fontSize: 17,
		margin: 2,
	},
    edittext: { //si
		fontSize:25,
		color: 'white'
	},
    joiningUsers: {
		fontSize:20,
		fontWeight: 'bold',
		color: 'red',
		backgroundColor: 'lightgrey'
	},
    savedUsers: {
		fontSize: 22,
		color: 'black',
		backgroundColor: 'lightgrey',
		padding:10
	},
	interestedbutton:{
		borderRadius: 5,
		height: 40,
		width: 120,
		marginLeft: 5,
		marginTop: 10,
		justifyContent: 'space-evenly',
		alignItems: 'stretch',
		backgroundColor:'lightgreen',
	},
	viewOnMap:{
		borderRadius: 5,
		height: 40,
		width: 135,
		marginLeft: 10,
		marginTop: 10,
		justifyContent: 'space-evenly',
		alignItems: 'stretch',
		backgroundColor:'lightblue',
	},
	notintbutton:{
		borderRadius: 5,
		height: 40,
		width:170,
		marginLeft: 190,
		justifyContent: 'center',
		backgroundColor:'#ff6666',
	},
	divider:{ //si
		height: 2, 
		backgroundColor: 'black'
	},
	tabIconStyle:{ //si
		width: 20,
		height: 20,
	},
	infoIcon:{ //si
		width: 30,
		height: 30,
	},
	image:{
		width:100,
		height:100,
	},
	newestUsersComponent :{
		height:200,
	},
}); 

export default styles;