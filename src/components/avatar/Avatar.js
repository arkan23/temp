import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
export default class Login extends Component{
  render(){
    return(
      <View style={styles.container}>

          <Image style={styles.img} source={require('../../images/Octocat.png')}/>

          <Text style={styles.name}>Игорь Николаевич</Text>
          <Text style={styles.status}>Главный архитектор</Text>
      </View>
    );
  }
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    height:10,
    alignSelf:'center',
  },
  // imgContainer:{
  //   alignItems: 'center',
  //   flexGrow:1,
  //   justifyContent: 'center',
  // },
  img:{
    width: 100,
    height: 100,
alignSelf:'center',
    //transform: translateX('-50%'),
  },
  name:{
    fontSize:20,
    color: '#000',
    alignSelf:'center',

  },
  status:{
alignSelf:'center',
    fontSize:17,
  }
});
