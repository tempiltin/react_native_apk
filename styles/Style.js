import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding:16
  },
  root: {
    flex: 1
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: 'cover'
  },
  mt50:{
    marginTop:50
  },
  inputControl:{
    width:'100%',
    backgroundColor:'#fff',
    padding:10,
    fontSize:22,
    borderRadius:8
  },
  infoView:{
    alignItems:'center'
  },
  cityCountryText:{
    color:"#fff",
    fontWeight:'bold',
    fontSize:40,
    marginTop:20,

  },
  dateText:{
    color:"#fff",
    fontSize:22,
    marginVertical:10,

  },
  tempText:{
    fontSize:55,
    color:"#fff",
    fontWeight:'bold',
    marginVertical:10,
  },
  minMaxText:{
    fontSize:22,
    color:"#fff",
    fontWeight:'500',
    marginVertical:10,

  }


});
export default styles