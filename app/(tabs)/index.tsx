import React from 'react'
import { Alert, ScrollView, StyleSheet, View } from 'react-native'

import FeedPost from '../../components/FeedPost'
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

    const posts = [
        {id: '1', profilePicture: {uri: 'https://picsum.photos/200/300'}, username: 'johndoe', contentSource: {uri: 'https://picsum.photos/200/300'}, likedUsers: ['chris_w', 'sara_j'], date: 'August 6'}
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
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {
                    posts.map(post => (
                        <FeedPost
                            key={post.id}
                            profilePicture={post.profilePicture}
                            username={post.username}
                            contentSource={post.contentSource}
                            likedUsers={post.likedUsers}
                            date={post.date}
                        />
                    ))
                }
            </ScrollView>
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