import React from 'react'
import { View, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const DrawerContent = (props)=>{

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme=()=> setIsDarkTheme(!isDarkTheme);
  return(
      <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View styl={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row', marginTop:15}}>
                        <View>
                            <Avatar.Image source={require('../assets/prop.jpeg')} size={50} />
                        </View>
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title>Nyarko Ebenezer</Title>
                            <Caption>@tronix</Caption>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>

                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>800</Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({color,size})=>(
                            <Icon name="home-outline" color={color} size={size} />
                        )}
                        label="Home"
                        onPress={()=>{props.navigation.navigate("Home")}}
                    />

                    <DrawerItem
                        icon={({color,size})=>(
                            <Icon name="account-outline" color={color} size={size} />
                        )}
                        label="Profile"
                        onPress={()=>{props.navigation.navigate("Profile")}}
                    />

                    <DrawerItem
                        icon={({color,size})=>(
                            <Icon name="bookmark-outline" color={color} size={size} />
                        )}
                        label="Bookmarks"
                        onPress={()=>{props.navigation.navigate("Bookmarks")}}
                    />
                    <DrawerItem
                        icon={({color,size})=>(
                            <Icon name="account-settings-outline" color={color} size={size} />
                        )}
                        label="Settings"
                        onPress={()=>{props.navigation.navigate("Settings")}}
                    />

                    <DrawerItem
                        icon={({color,size})=>(
                            <Icon name="account-check-outline" color={color} size={size} />
                        )}
                        label="Support"
                        onPress={()=>{props.navigation.navigate("Support")}}
                    />
                </Drawer.Section>

                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={()=> toggleTheme()}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={isDarkTheme} />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>

        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
                icon={({color,size})=>(
                    <Icon name="exit-to-app" color={color} size={size} />
                )}
                label="Sign Out"
                onPress={()=>{}}
            />
        </Drawer.Section>
      </View>
  )
}

const styles = StyleSheet.create({
    bottomDrawerSection: {
        marginBottom:15,
        borderTopColor: '#f4f4f4',
        borderTopWidth:1
    },
    drawerContent: {
        flex:1
    },
    drawerSection: {
        marginTop:15
    },
    userInfoSection: {
        paddingLeft: 20
    },
    row: {
        flexDirection:'row'
    },
    title: {
        fontSize: 16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption: {
        fontSize:14,
        lineHeight:14
    },
    section: {
        flexDirection:'row',
        alignItems:'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight:3
    },
    preference: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 12,
        paddingHorizontal:16
    },
})