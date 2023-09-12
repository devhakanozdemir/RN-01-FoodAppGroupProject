import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BestRated = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Best Rated!</Text>
        </View>
    )
}

export default BestRated

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        width: '80%',
        marginBottom: 15,
    
        
    },

    text: {
        color: '#818181',
        width: '80%',
        fontWeight: 'bold',
    }
})