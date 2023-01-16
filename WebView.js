import { StyleSheet, Text,WebView, View } from 'react-native'
import React from 'react'


const WebView1 = () => {
  return (
    <View>
     <WebView
        originWhitelist={['*']}
        source={{html: '<h1>Hello world</h1>'}}
      />
    </View>
  )
}

export default WebView1

const styles = StyleSheet.create({})