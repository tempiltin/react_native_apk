import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    appContainer:{
      paddingTop:50,
       padding:16,
       position:'relative'
    },
    container: {
      flex: 1,
      height:"auto"
    },
    inputContainer:{
       flexDirection: "row",
       justifyContent:"space-between",
       alignItems:"center",
       borderBottomWidth:1,
       borderColor:'blue',
       paddingBottom:40,
       marginBottom:20
    },
    textInput:{
      borderWidth:1,
      borderColor:"#000",
      width:'70%',
      padding:8
    },
    addToDo:{
      width:'100%',
      paddingTop:20,
      paddingBottom:20,
      paddingLeft:5,
      paddingRight:5,
      borderRadius:8,
      backgroundColor:'green',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      marginTop:15,
      marginBottom:10,
      shadowColor:'black',
      shadowOpacity:1
      
    },
    text:{
      color:'#fff',
      fontSize:28,
    },
    btnCard:{
      padding:25,

    },
    fixedTrue:{
      width:'98%',
      height:'98%',
      backgroundColor:'black',
      position:'absolute',
      top:'1%',
      right:'1%',
      zIndex:999
    },
  
    fixedFalse:{
      width:'98%',
      height:'98%',
      backgroundColor:'black',
      position:'absolute',
      top:'1%',
      right:'-110%',
      zIndex:999
    },
    mb:{
      marginBottom:80
    }
    
  
  });
  export default styles