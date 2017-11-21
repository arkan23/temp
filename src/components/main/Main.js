import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class Main extends Component{
  render(){
    return(
      <View style={styles.mainView}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Arkan App</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>Powered by React Native</Text>
          </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  mainView:{
    backgroundColor: '#1abc9c',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    color: 'white',
    fontSize:35,
    fontWeight: 'bold',

  },
  subtitle:{
    color: 'white',
    fontWeight: '200',
    paddingBottom:20,

  },
  titleWrapper:{
        flex:1,
        justifyContent: 'center',
  },

});
