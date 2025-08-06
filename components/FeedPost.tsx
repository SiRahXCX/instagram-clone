import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import React from 'react'
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native'

const { width: screenWidth } = Dimensions.get('window')

interface FeedPostParams {
    profilePicture: {uri: string} | number,
    username: string,
    contentSource: {uri: string} | number,
    likedUsers: string[],
    date: string
}

const FeedPost: React.FC<FeedPostParams> = ({
    profilePicture,
    username,
    contentSource,
    likedUsers,
    date
}) => {
    return (
        <View>
            <View style={styles.profileInfoHeader}>
                <View style={styles.profileInfo}>
                    <Image
                        source={profilePicture}
                        style={styles.profilePicture}
                    />
                    <Text style={styles.username}>{username}</Text>
                </View>
                <Entypo name="dots-three-horizontal" size={18} color="black" />
            </View>

            <View style={styles.contentContainer}>
                <Image
                    source={contentSource} 
                    style={styles.contentSource}
                />
            </View>

            <View style={styles.contentInteractionContainer}>
                <View style={[styles.contentInteractionContainer, styles.contentInteractionLeft]}>
                    <AntDesign name="hearto" size={24} color="black" />

                    {/* Left-faching comment icon doesn't exist in expo 
                    
                    <View style={{width: 30}}>
                        <Image
                            source={commenticon}
                            style={{width: 30, resizeMode: 'contain'}}
                        />
                    </View> */}

                    <AntDesign name="message1" size={24} color="black" />
                
                    <SimpleLineIcons name="paper-plane" size={24} color="black" />
                </View>

                <FontAwesome name="bookmark-o" size={24} color="black" />
            </View>

            <View>
                <Text numberOfLines={1}>
                    {likedUsers.length > 0 ? `Liked by ${likedUsers[0]}${likedUsers.length > 1 ? ' and others' : ''}` : ''}
                </Text>
                <Text>{date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentInteractionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingRight: 17
    },

    contentInteractionLeft: {
        marginLeft: 12,
        width: 120,
    },

    profileInfoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingRight: 20,
    },

    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 10
    },

    profilePicture: {
        width: 30,
        height: 30,
        borderRadius: 30, // Makes the image itself a perfect circle
    },

    username: {
        fontWeight: 'bold',
        marginLeft: 8
    },

    contentContainer: {
        width: screenWidth,
        height: screenWidth
    },

    contentSource: {
        width: screenWidth,
        height: screenWidth,
        resizeMode: 'cover'
    },
})

export default FeedPost