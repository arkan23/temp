import React, {Component} from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity,StatusBar} from 'react-native';


export default class LoginForm extends Component{
  render(){
    return(
      <View style={styles.container}>
          <StatusBar barStyle='light-content'/>
          <TextInput style={styles.input} placeholder='username or email'
                                          placeholderTextColor='rgba(255,255,255,0.7)'
                                          returnKeyType='next'
                                          keyboardType='email-address'
                                          autoCapitalize='none'
                                          autoCorrect={false}
                                          onSubmitEditing={()=>this.passwordInput.focus()}
                                          />
          <TextInput style={styles.input} placeholder='password'
                                          placeholderTextColor='rgba(255,255,255,0.7)'
                                          secureTextEntry
                                          returnKeyType='go'
                                          ref={(input)=>this.passwordInput=input}
                                          />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container:{
    padding:20
  },
  input:{
      height:40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom:20,
      color: '#fff',
      paddingHorizontal:10,
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 15,
  },
  buttonText:{
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
  }
});
