import React from 'react';
import {Text, View, ScrollView, Dimensions, StyleSheet} from 'react-native';

export default class Horizontal extends React.Component {
    render() {
        return (
            <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
                <View style={styles.outer}>
                    <Text style={styles.innerText}>Welcome To LCO app</Text>
                </View>
                <View style={[styles.outer, styles.red]}>
                    <Text style={styles.innerText}>Best quality videos</Text>
                </View>
                <View style={[styles.outer, styles.green]}>
                    <Text style={styles.innerText}>Available on IOS and Android</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    innerText: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
    },
    outer: {
        backgroundColor: '#007bb6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    red: {
        backgroundColor: '#dd4b39'
    },
    green: {
        backgroundColor: '#27ae60'
    }

});




