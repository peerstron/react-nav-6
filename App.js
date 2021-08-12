import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import AppNavigator from './navigation'

const App = ()=>{
  return(
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default App;