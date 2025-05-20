import { View, Text } from 'react-native'
import React from 'react'
import { containerStyles } from '../../../styles/container_styles'

const ListItem = () => {
  return (
    <View style={containerStyles.listItem}>
      <Text>ListItem</Text>
    </View>
  )
}

export default ListItem