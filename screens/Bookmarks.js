import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Bookmarks = ({navigation})=>{
  return(
      <View style={styles.container}>
        <Text>Hellooo from Bookmarks</Text>
        <Button title="Go to Home" onPress={()=> navigation.navigate("Home")} />
      </View>
  )
}

export default Bookmarks;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})