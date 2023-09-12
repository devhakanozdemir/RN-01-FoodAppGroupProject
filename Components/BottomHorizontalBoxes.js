import { StyleSheet, Text, View, FlatList, SafeAreaView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BottomHorizontalBoxes = () => {

    const [foodList, setFoodList] = useState([])



    useEffect(() => {
        axios.get("https://api.spoonacular.com/recipes/716429/information?apiKey=f3b84b6662aa49738e92941cdb55e6e8&includeNutrition=true")
            .then((res) => {
                setFoodList(res.data.extendedIngredients)
            })
    }, [])



    const foodListWithoutFirst4 = foodList != undefined &&  foodList.slice(4)
 
    console.log(foodListWithoutFirst4);



    return (
        <View style={{ width: '100%' }}>
            <FlatList
                horizontal={true}
                data={foodListWithoutFirst4}            //the array that "slice"d of first 4 elements, gets as data {foodListWithoutFirst4} 
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    const image = "https://spoonacular.com/recipeImages/" + item.image // you can define dynamic uri like this when {uri.image} doesnt work
                    return (
                        <View style={styles.itemViewContainer}>
                            <Image style={styles.image} source={{ uri: image }} />
                        </View>
                    )
                }}
            />
        </View>
    )
}




export default BottomHorizontalBoxes

const styles = StyleSheet.create({
    itemViewContainer: {
        borderRadius: 10,
        backgroundColor: '#d9d9d9',
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        // width: '90%',
        width: 200,
        marginRight: 20,
    },

    image: {
        borderRadius: 10,
        width: 200,
        height: '100%',
    }

}
)