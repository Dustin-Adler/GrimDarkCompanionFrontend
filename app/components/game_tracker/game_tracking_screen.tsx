import { View, Text } from 'react-native'
import React from 'react'
import MainNav from '../nav_bar/_main_nav'
import GameIndex from './_game_index'
import SearchBar from '../search_bar/_search_bar'
import { containerStyles } from '../../../styles/container_styles'

const GameTracker = () => {
  return (
    <View style={containerStyles.maxSpaceCenter}>
      <MainNav/>
      <SearchBar/>
      <GameIndex/>
    </View>
  )
}

export default GameTracker