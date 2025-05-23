import { View, Text } from 'react-native'
import React from 'react'
import ListNavTabs from './_list_nav_tabs'
import { containerStyles } from '../../../styles/container_styles'

const ListIndex = () => {
  return (
    <View style={[containerStyles.tabContent]}>
      <ListNavTabs/>
    </View>
  )
}

export default ListIndex