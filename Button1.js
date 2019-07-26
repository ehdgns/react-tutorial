import React, {Component} from 'react';
import {View, Text, TextInput,Button,TouchableHighlight,TouchableOpacity,Image,StyleSheet} from 'react-native'

 export default class Button1 extends Component{
   onPress(){
        alert('터치')
    }

    render(){  
        return(
        <View>
        <TouchableHighlight onPress={this.onPress}>
            <Image 
                style={styles.button}
                source={require('./myButton.png')}
                />

        </TouchableHighlight>
        <TouchableOpacity onPress={this.onPress}>
         <Image 
            style={styles.button}
                source={require('./myButton.png')}
                />

        </TouchableOpacity>
        </View>
         )
}      
}
const styles = StyleSheet.create({
 
    button: {
        width: 30,
        height: 30
    }
})