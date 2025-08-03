import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

import Create from './create'
import Home from './home'
import Profile from './profile'

// Define the type for the screen parameters.
// 'undefined' means the screen has no parameters.
type RootTabParamList = {
  Home: undefined,
  Create: undefined,
  Profile: undefined
}

// Create an instance of a tab navigator, typed with our parameter list.
const Tab = createBottomTabNavigator<RootTabParamList>()

const Index: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }: { route: RouteProp<RootTabParamList, keyof RootTabParamList>}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconEmoji: string

          if (route.name === 'Home') {
            iconEmoji = '🏠'
          } else if (route.name === 'Create') {
            iconEmoji = '🍁'
          } else if (route.name === 'Profile') {
            iconEmoji = '🧑‍🦱'
          } else {
            iconEmoji = '❓'
          }
        
          return (
            <Text style={{fontSize: size, color: color, fontWeight: focused ? 'bold' : 'normal'}}>
              {iconEmoji}
            </Text>
          )
        },
        topBarActiveTintColor: '#000000',
        topBarInactiveTintColor: '#888888',
        tabBarStyle: styles.tabBarStyle,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    height: 70,
  },

  headerStyle: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },

  headerTitleStyle: {
    fontWeight: 'bold'
  }
})

export default Index