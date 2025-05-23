import { View, Text } from 'react-native'
import React from 'react'
import ListItem from './_list_item'
import { containerStyles } from '../../../styles/container_styles'

type AllianceListProps = {
  alliance: string
  showAllianceLists: boolean
}

const AllianceList = ({ alliance, showAllianceLists }: AllianceListProps) => {

  const listItems = () => {
    let listItems = []
    for (let i = 0; i < 5; i++) {
      listItems.push(
        <ListItem key={i} alliance={alliance}/>
      )
    }
    return (
      listItems
    )
  }

  const display = showAllianceLists ? "flex" : "none"
  return (
    <View 
      style={[
        containerStyles.tabContent,
        containerStyles.allianceTab,
        {display: display}]}>
      {listItems()}
    </View>
  )
}

export default AllianceList