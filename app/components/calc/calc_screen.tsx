import { View, Text } from 'react-native'
import React from 'react'
import MainNav from '../nav_bar/_main_nav'
import CalculatorIndex from './_calculator_index'
import SearchBar from '../search_bar/_search_bar'
import { containerStyles } from '../../../styles/container_styles'

const Calc = () => {
  return (
    <View style={containerStyles.maxSpaceCenter}>
      <MainNav/>
      <SearchBar/>
      <CalculatorIndex/>
    </View>
  )
}

export default Calc