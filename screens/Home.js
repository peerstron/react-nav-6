import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import NewsItems from '../components/NewsItems';

const Home = ({navigation})=>{
  return(
      
        <NewsItems />
        
  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})