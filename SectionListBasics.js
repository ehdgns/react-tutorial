import React,{Component} from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

export default class SectionListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                sections={[
                    {title: 'D', data: ['Devin']},
                    {title: 'J', data: ['Jackson', 'James','Jilian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => <Text style={{fontsize: 18}}>{item} </Text>}
                    renderSectionHeader={
                        ({section}) => <Text style={styles.sectionHeader}>{section.title} </Text>
                    }
                    keyExtractor={(item, index) => index} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sectionHeader: {
        fontSize: 22,
        color: 'red',
    }
})

