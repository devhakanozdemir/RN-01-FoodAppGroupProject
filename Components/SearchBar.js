import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = (props) => {
  return (
    <View style={styles.SearchBarContainer}>
      <TextInput
       style={styles.textInputContainer}
       placeholder='Search...'
       onChangeText={props.getSearchData}/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    textInputContainer: {
        borderWidth:0.2,
        width:350,
        height:50,
        borderRadius:5,
        textAlign:"center",
    },
    SearchBarContainer: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        
    }
})