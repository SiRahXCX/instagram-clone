import { Stack } from 'expo-router'
import { Image, StyleSheet, View } from 'react-native'

import { AntDesign, Feather } from '@expo/vector-icons'
import logo from '../assets/images/Instagram.png'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{
          headerTitle: () => (
            <View style={styles.mainHeader}>
                <View
                  style={styles.logoContainer}
                >
                  <Image 
                    source={logo}
                    style={styles.logo}
                  />
                </View>

              <View style={styles.headerTabs}>
                <AntDesign name="hearto" size={24} color="black" />
                <Feather name="message-circle" size={26} color="black" />
              </View>
            </View>
          )
        }}
      />
    </Stack>
  )
}

const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoContainer: {
    width: 140,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },

  headerTabs: {
    width: 70,
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})