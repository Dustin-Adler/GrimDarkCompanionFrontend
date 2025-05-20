import { View, Text } from 'react-native'
import React from 'react'
import MainNav from '../nav_bar/_main_nav'
import CalculatorIndex from './calculator_index'
import { containerStyles } from '../../../styles/container_styles'

const Calc = () => {
  return (
    <View style={containerStyles.maxSpaceCenter}>
      <MainNav/>
      <CalculatorIndex/>
    </View>
  )
}

export default Calc