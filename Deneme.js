import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useRef } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View ,Text, Dimensions, SafeAreaView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from './BottomSheet';

export default function Deneme() {
  const ref = useRef(null);

  const SCREEN_HEIGHT = Dimensions.get("screen").height

  console.log(SCREEN_HEIGHT)

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-SCREEN_HEIGHT);
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1,marginTop:50 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress} />
        <BottomSheet ref={ref}>
          <View style={{ flex: 1, backgroundColor: 'orange',justifyContent:"center",alignItems:"center" }}>
          <Pressable onPress={()=>ref.current.scrollTo(0)}>
            <Text>Kapat</Text>
          </Pressable>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  },
});