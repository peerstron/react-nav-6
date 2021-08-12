import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Contacts from '../screens/Contacts';

import { DrawerContent } from '../screens/DrawerContent';
import Profile from '../screens/Profile';
import Bookmarks from '../screens/Bookmarks';
import Settings from '../screens/Settings';
import Support from '../screens/Support';

const Drawer = createDrawerNavigator();
const ContactsStack = createNativeStackNavigator();

const ContactsStackNavigation = ()=>(
    <ContactsStack.Navigator screenOptions={{headerShown:false}}>
        <ContactsStack.Screen name="Contacts" component={Contacts} />
    </ContactsStack.Navigator>
)

const AppNavigator = ()=>{
  return(
    <Drawer.Navigator drawerContent={props=> <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Bookmarks" component={Bookmarks} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Support" component={Support} />
    </Drawer.Navigator>
  )
}

export default AppNavigator;