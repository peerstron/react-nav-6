import React from 'react'
import { Alert, ScrollView, StyleSheet } from 'react-native'
import { Avatar, Paragraph, Card, Button, IconButton, useTheme } from 'react-native-paper'

const NewsItems = ()=>{

    const { colors: {background}, } = useTheme();
    return(
        <ScrollView style={{flex:1}} contentContainerStyle={{padding:4}}>
            <Card style={{margin:4}}>
                <Card.Cover source={require('../assets/ass1.jpeg')} />
                <Card.Title title="Easter Service" />
                <Card.Content>
                    <Paragraph>
                        Hello to mobile app Navigation
                    </Paragraph>
                </Card.Content>
            </Card>

            <Card style={{margin:4}}>
                <Card.Cover source={require('../assets/ass2.jpeg')} />
                <Card.Title title="Easter Service" />
                <Card.Content>
                    <Paragraph>
                        Hello to mobile app Navigation
                    </Paragraph>
                </Card.Content>
            </Card>

            <Card style={{margin:4}}>
                <Card.Cover source={require('../assets/ass3.jpeg')} />
                <Card.Title title="Easter Service" />
                <Card.Content>
                    <Paragraph>
                        Hello to mobile app Navigation
                    </Paragraph>
                </Card.Content>
            </Card>

            <Card style={{margin:4}}>
                <Card.Cover source={require('../assets/ass4.jpeg')} />
                <Card.Title title="Easter Service" />
                <Card.Content>
                    <Paragraph>
                        Hello to mobile app Navigation
                    </Paragraph>
                </Card.Content>
            </Card>

            <Card style={{margin:4}}>
                <Card.Cover source={require('../assets/ass5.jpeg')} />
                <Card.Title title="Easter Service" />
                <Card.Content>
                    <Paragraph>
                        Hello to mobile app Navigation
                    </Paragraph>
                </Card.Content>
            </Card>
        </ScrollView>
    )
}

export default NewsItems;