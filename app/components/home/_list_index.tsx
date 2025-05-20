import { View, Text } from 'react-native'
import React from 'react'
import ListItem from './_list_item'
import { containerStyles } from '../../../styles/container_styles'

const ListIndex = () => {
  return (
    <View style={[containerStyles.tabContent]}>
      <ListItem/>
    </View>
  )
}

export default ListIndex