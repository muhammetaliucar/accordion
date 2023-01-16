import { FlatList, StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import AccordionItem from './AccordionItem'

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
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <SafeAreaView>
                <View style={styles.container}>
                    <FlatList data={data} keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <AccordionItem title={item.title} bodyText={item.body} />}
                    />

                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: "100%",
        backgroundColor: "#e7e7e7"
    }
})