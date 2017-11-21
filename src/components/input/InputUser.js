import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput,TouchableHighlight,Image} from 'react-native';



export default class InputUser extends Component{

  constructor(props) {
  super(props);
  this.state = {}
}

_onPressCansel(){
  this.setState({text: '' });
}
  render(){
    return(
      <View style={styles.container}>
          <Text style={styles.title}>ФИО Клиента</Text>
          <View style={styles.bar}>
          <TextInput placeholder={'Введите ФИО'} multiline={true} style={styles.inputText} onChangeText={(text) => this.setState({text})} value={this.state.text} />
          <TouchableHighlight onPress={(temp)=>this._onPressCansel(temp)} style={styles.touchCansel}>
             <Image
               style={styles.cansel}
               source={require('./images/cansel.png')}
             />
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>this._onPressSearch()} style={styles.touchInput} >
             <Image
             style={styles.search}
               source={require('./images/input.png')}
             />
          </TouchableHighlight>

          </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container:{
    //flex:1,
    //alignSelf:'center',
  },
  bar:{
    flexWrap: 'wrap',
       alignItems: 'flex-start',
       flexDirection:'row',
    borderBottomColor:'green',
    borderBottomWidth: 1,
    //justifyContent: 'center',
  },
  touchCansel:{
      top:20,
  },
  touchInput:{
top:20,
left:10,
  },
  title:{
    fontSize:14,
    color: 'green',
  },
  inputText:{
    fontSize:17,
    borderBottomColor:'green',
    width:'80%',
  },
  search:{
    width: 20,
    height: 20,
    flexDirection:'column',
justifyContent: 'center',

  },
  cansel:{
    width: 20,
    height: 20,
    justifyContent: 'center',
  },
});
