import { View, Text } from 'react-native'
import React from 'react'
import MainNav from '../nav_bar/_main_nav'
import { containerStyles } from '../../../styles/container_styles'
import FriendsList from './friends_list'

const Friends = () => {
  return (
    <View style={containerStyles.maxSpaceCenter}>
      <MainNav/>
      <FriendsList/>
    </View>
  )
}

export default Friends