import React,{Component} from 'react';
import { StyleSheet, Text, View, FlatList,Data, TouchableOpacity, TextInput } from 'react-native';
// import TextInput from '../screen/TextInput';

export default class FlatListBasics extends Component {
    constructor(props){
        super(props);
        this.state={
            keyword:""
        }
    }
    onPress(){
        alert('터치')
    }

    render() {
        return (
            <View style ={{ flex: 1, paddingTop: 22}}>
                <TextInput placeholder="검색어"
                onChangeText={(keyword)=> this.setState({keyword})}/>
                
            <FlatList
            data={[
                {key: '영수', univ: 'knu'},
                {key: '민수', univ: 'pnu'},
                {key: '경수', univ: 'snu'},
                {key: '희수', univ: 'knu'},
                {key: '한수', univ: 'enu'},
                {key: '재수', univ: 'snu'},
                {key: '용수', univ: 'knu'},
            ]}
            renderItem={({item}) => {
                    if (item.univ.startsWith(this.state.keyword) || this.state.keyword == ""){

                    

                    return (
                        <TouchableOpacity onPress={()=>alert(item.key)}>
                         <Text style={{padding: 10,fontSize: 18, height: 44}}>
                        이름: {item.key} / 학교: {item.univ}
                      
                        </Text>  
                         
                        </TouchableOpacity>
                    
                    )
                    }
                }
              
            }
            />
            </View>
        )
    }
}