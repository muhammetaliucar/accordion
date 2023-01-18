import { FlatList, StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Platform, TextInput, Button, Keyboard } from 'react-native'
import React, { useState } from 'react'
import AccordionItem from './AccordionItem'
import axios from 'axios'

const data = [
    {
        id: 0,
        title: "Lorem ipsum",
        body: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
    },
    {
        id: 1,
        title: "Lorem ipsum",
        body: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
    },
    {
        id: 2,
        title: "Lorem ipsum",
        body: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
    }
]


const Home = () => {

    const fetchData = async() =>{
        await axios.get("")
    }



    const [data,setData]= useState()


    return (
            <SafeAreaView style={{flex:1,marginTop:30, backgroundColor: "#e7e7e7",}}>
                <View style={styles.container}>
                    <FlatList data={data} keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <AccordionItem title={item.title} bodyText={item.body} />}
                    />
                </View>
               
            </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        height:"100%",
       

    }
})