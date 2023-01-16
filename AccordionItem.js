import { Animated, LayoutAnimation, StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
const AccordionItem = ({ title, bodyText }) => {

    const [showContent, setShowContent] = useState(false)
    const animationController = useRef(new Animated.Value(0)).current
    const toggleAnimation = {
        duration:300,
        update:{
            duration:500,
            property:LayoutAnimation.Properties.opacity,
            type:LayoutAnimation.Types.easeInEaseOut
        },
        delete:{
            duration:200,
            property:LayoutAnimation.Properties.opacity,
            type:LayoutAnimation.Types.easeInEaseOut
        }
    }

    const toggleListItem = () => {
        const config = {
            duration: 300,
            toValue: showContent ? 0 : 1,
            useNativeDriver: true
        };
            Animated.timing(animationController, config).start();
            LayoutAnimation.configureNext(toggleAnimation)
            setShowContent(!showContent)
    }

    const arrowTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "90deg"]
    })

    

    return (
        <View style={styles.container}>
            <Pressable onPress={toggleListItem}>
                <View style={styles.titleContainer}>
                    <Text>{title}</Text>
                    <Animated.View style={{transform:[{rotateZ:arrowTransform}]}}>
                    <AntDesign name="right" size={16} color="gray" />
                    </Animated.View>
                </View>
            </Pressable>
            {showContent && <Pressable  onPress={toggleListItem}>
                <View style={styles.body}>
                <Text>{bodyText}</Text>
            </View></Pressable>}
        </View>
    )
}

export default AccordionItem

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        backgroundColor: "white",
        marginBottom: 10,
        overflow: "hidden",
        borderRadius:12
    },
    title: {
        fontSize: 16,
        color: "#2d2d2d",
        fontWeight: "bold"
    },
    body: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})