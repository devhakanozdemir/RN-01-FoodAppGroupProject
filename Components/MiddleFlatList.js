import { FlatList, StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const MiddleFlatList = (props) => {

 const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    axios.get("https://api.spoonacular.com/recipes/716429/information?apiKey=f3b84b6662aa49738e92941cdb55e6e8&includeNutrition=true")
      .then((res) => {
        setFoodList(res.data.extendedIngredients);
      });
      
  }, []);

  const newList = foodList != undefined && foodList.slice(0, 4);


  return (
    <View> 
      <View style={styles.FlatListContainer}> 
      <FlatList
          numColumns={2}
          data={newList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
                const image = "https://spoonacular.com/recipeImages/" + item.image; // you can define dynamic uri like this when {uri.image} doesnt work
            return (
              <View style={styles.RenderContainer}>
                <Image style={styles.imageStyle} source={{ uri: image }} />
                <Text style={styles.textStyle} numberOfLines={2} ellipsizeMode="tail">{item.name}</Text>
              </View>
            );
          }}
        />
      </View>   
    </View>
  )
}

export default MiddleFlatList

const styles = StyleSheet.create({
    FlatListContainer: {
       
        width: "90%",
        height: 400,
        bottom:60,
      },
    
      RenderContainer: {
        width: 135,
        borderWidth: 0.5,
        borderColor:"gray",
        height: 150,
        margin: 15,
        marginTop: 30,
        marginLeft: 20,
        borderRadius: 10,
      },
    
      imageStyle: {
        width: "100%",
        height: "75%",
        borderWidth: 1,
        borderRadius: 10,
      },
    
      textStyle: {
        borderRadius: 10,
        borderWidth: 0.5,
        height: "25%",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    
      },


})