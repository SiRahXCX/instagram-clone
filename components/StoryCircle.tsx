import React from 'react'
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native'

interface StoryCircleProps {
    imageSource: {uri: string} | number,
    username: string,
    isViewed: boolean,
    onPress?: () => void
}


const StoryCircle: React.FC<StoryCircleProps> = ({
    imageSource,
    username, 
    isViewed = false,
    onPress
}) => {
    return (
        <Pressable style={styles.storyContainer} onPress={onPress}>
            <View
                style={[
                    styles.circleBorder,
                    isViewed ? styles.viewedBorder : styles.unviewedBorder
                ]}
            >
                <Image source={imageSource} style={styles.profileImage} />
            </View>
            <Text style={styles.usernameText} numberOfLines={1}>
                {username}
            </Text> 
        </Pressable>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        paddingTop: 50, // Adjust as needed for safe area/header
    },
    storyContainer: {
        alignItems: "center",
        marginHorizontal: 8,
    },
    circleBorder: {
        width: 70,
        height: 70,
        borderRadius: 35, // Makes it a perfect circle
        justifyContent: "center",
        alignItems: "center",
        padding: 3, // Space between border and image
    },
    unviewedBorder: {
        borderWidth: 2,
        borderColor: "#F97316", // Orange-ish, like Instagram's unviewed border
    },
    viewedBorder: {
        borderWidth: 1,
        borderColor: "#d4d4d4", // Lighter grey for viewed stories
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30, // Makes the image itself a perfect circle
        backgroundColor: "#ccc", // Placeholder background
    },
    usernameText: {
        fontSize: 12,
        marginTop: 5,
        color: "#333",
        maxWidth: 70, // Ensure username doesn't overflow
        textAlign: "center",
    },
});

export default StoryCircle