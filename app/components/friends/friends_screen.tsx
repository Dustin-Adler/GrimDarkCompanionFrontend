import { View, Text } from 'react-native'
import React from 'react'
import MainNav from '../nav_bar/_main_nav'
import FriendsList from './_friends_list'
import SearchBar from '../search_bar/_search_bar'
import { containerStyles } from '../../../styles/container_styles'

const Friends = () => {
  return (
    <View style={containerStyles.maxSpaceCenter}>
      <MainNav/>
      <SearchBar/>
      <FriendsList/>
    </View>
  )
}

export default Friends