import React from 'react'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'

import StoryCircle from '../../components/StoryCircle'

const handleStoryPress = (username: string) => {
    Alert.alert(`${username}'s story was clicked`)
}

const Home: React.FC = () => {
    const stories = [
        { id: '1', username: 'Your Story', image: { uri: 'https://picsum.photos/200/300' }, isViewed: false },
        { id: '2', username: 'johndoe', image: { uri: 'https://picsum.photos/200/300' }, isViewed: false },
        { id: '3', username: 'janedoe', image: { uri: 'https://picsum.photos/200/300' }, isViewed: true },
        { id: '4', username: 'alex_smith', image: { uri: 'https://picsum.photos/200/300' }, isViewed: false },
        { id: '5', username: 'maria_g', image: { uri: 'https://picsum.photos/200/300' }, isViewed: true },
        { id: '6', username: 'chris_w', image: { uri: 'https://picsum.photos/200/300' }, isViewed: false },
        { id: '7', username: 'sara_j', image: { uri: 'https://picsum.photos/200/300' }, isViewed: false },
        { id: '8', username: 'mike_t', image: { uri: 'https://picsum.photos/200/300' }, isViewed: true },
    ]

    return (
        <View>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.storiesScrollView}
            >
                {
                    stories.map(story => (
                        <StoryCircle 
                            key={story.id}
                            imageSource={story.image}
                            username={story.username}
                            isViewed={story.isViewed}
                            onPress={() => handleStoryPress(story.username)}
                        />
                    ))
                }
            </ScrollView>
            <Text>
                Home page
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    storyBar: {
        backgroundColor: '#ffffff'
    },

    storiesScrollView: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        backgroundColor: "#fff",
    },
})

export default Home