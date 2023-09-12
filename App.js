import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import SearchBar from './Components/SearchBar'
import MiddleFlatList from './Components/MiddleFlatList'
import axios from 'axios'
import BestRated from './Components/BestRated'
import BottomHorizontalBoxes from './Components/BottomHorizontalBoxes'

const App = () => {
 
 const [foodList, setFoodList]= useState([])


 const [searchData, setSearchData]= useState("")
 const [filterList, setFilterList]= useState([])
 
 
 
 const handleSearchData= (value)=> {
  setSearchData(value)


const filtered= foodList.filter((item)=> {
  item.name.toLowerCase().includes(searchData.toLowerCase())
})


setFilterList(filtered)

 }
 
 
 
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTextContainer}>FOOD APP</Text>
      <SearchBar getSearchData={handleSearchData}/>
      <MiddleFlatList />
      <BestRated />
      <BottomHorizontalBoxes /> 
       
       
       
       
         
    </View>
      
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    alignItems:"center",
    justifyContent: 'space-evenly',
    marginBottom: 50,
    
  },
  mainTextContainer:{
    top:30,
    width:300,
    height:50,
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
    marginTop: 70,

  }
  
})