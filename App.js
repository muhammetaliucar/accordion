import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef,useMemo,useCallback } from 'react';
import Home from './Home';

const App = () => {
  // ref
  const bottomSheetRef = useRef(null);

  const handleClosePress = () => bottomSheetRef.current.close()

  // variables
  const snapPoints = useMemo(() => ['1%', '50%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.open();
  }, []);


  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
   <Home />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;

{/* <View style={{marginTop:100}}>
      <Button title='123'  onPress={handlePresentModalPress} />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
        <Button style={{marginBottom:100}} title="Close Sheet" onPress={handleClosePress} />
      </BottomSheet> */}
