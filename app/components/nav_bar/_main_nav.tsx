import { View, Pressable, Text } from 'react-native'
import { useRouter, usePathname } from 'expo-router'
import React from 'react'
import { containerStyles } from '../../../styles/container_styles'
import { textStyles } from '../../../styles/text_styles'
import { buttonStyles } from '../../../styles/button_styles'

const MainNav = () => {
  const router = useRouter();
  const navigateTo = (path: string) => {
    router.push(path);
  }

  const isActive = (path: string) => {
    const currentPath = usePathname();
    if (path === currentPath) {
      return buttonStyles.mainNavTabActive;
    }
    return buttonStyles.mainNavTabs;
  }

  return (
    <View style={containerStyles.navBar}>
      <Pressable
        onPress={() => navigateTo("/")}
        style={isActive("/")}>
          <Text style={textStyles.navBarText}>Lists</Text>
      </Pressable>
      <Pressable
        onPress={() => navigateTo("/components/game_tracker/game_tracking_screen")}
        style={isActive("/components/game_tracker/game_tracking_screen")}>
        <Text style={textStyles.navBarText}>Games</Text>
      </Pressable>
      <Pressable
        onPress={() => navigateTo("/components/friends/friends_screen")}
        style={isActive("/components/friends/friends_screen")}>
          <Text style={textStyles.navBarText}>Friends</Text>
      </Pressable>
      <Pressable
        onPress={() => navigateTo("/components/calc/calc_screen")}
        style={isActive("/components/calc/calc_screen")}>
          <Text style={textStyles.navBarText}>Calcs</Text>
      </Pressable>
    </View>
  )
}

export default MainNav