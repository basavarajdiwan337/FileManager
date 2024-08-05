import {Dimensions, StyleSheet, Platform} from 'react-native';
const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;

export default StyleSheet.create({

  // Splash screen
  container: {
    flex: 1,
    backgroundColor: '#0D1B29',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: deviceWidth,
    height: deviceHeight * 0.3,
    alignSelf: 'center',
    resizeMode: 'contain',
    flexWrap: 'wrap',
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20, 
    textAlign: 'center', 
  },
  uploadText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 10, 
    textAlign: 'center', 
  },

// Dashboard File
dashboardContainer: {
  flex: 1,
  padding: 16,
},
emptyContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
emptyText: {
  fontSize: 18,
  color: 'gray',
  fontWeight: 'bold',
},
fileContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 8,
  shadowColor: 'black',
  shadowRadius: 5,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
},
fileIcon: {
  width: 50,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 8,
  borderRadius: 6,
},
imageIcon: {
  backgroundColor: 'lightgrey',
},
pdfIcon: {
  backgroundColor: 'red',
},
docIcon: {
  backgroundColor: 'lightblue',
},
unknownIcon: {
  backgroundColor: 'grey',
},
fileIconText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
fileImage: {
  width: 50,
  height: 50,
  marginRight: 8,
  borderRadius: 6,
},
fileName: {
  flex: 1,
},
removeButton: {
  marginLeft: 8,
},
removeButtonText: {
  color: 'red',
  fontWeight: 'bold',
  fontSize:23,
  padding:3
},

previewButton: {
  backgroundColor: 'orange',
  padding: 5,
  borderRadius: 5,
  marginLeft: 10,
},
previewButtonText: {
  color: 'white',
},

modalFileContent: {
  alignItems: 'center',
},

fileType: {
  fontSize: 14,
  color: 'grey',
},
uploadButton: {
  backgroundColor: 'orange',
  padding: 10,
  borderRadius: 5,
  alignItems: 'center',
  marginTop: 16,
},
uploadButtonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
},
modalContent: {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  alignItems: 'center',
  width: '80%',
},
modalImage: {
  width: 200,
  height: 200,
  marginBottom: 10,
},
modalFileName: {
  fontSize: 18,
  marginBottom: 20,
},
closeButton: {
  backgroundColor: 'red',
  padding: 10,
  borderRadius: 5,
},
closeButtonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  marginTop:2
},

//upload screen
uploadContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
},

uploadTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'gray',
  textAlign: 'center',
  marginBottom: 20,
},

progressContainer: {
  alignItems: 'center',
},
 

});
