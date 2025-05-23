import { View, Text, Pressable } from 'react-native'
import AllianceList from './_alliance_lists'
import { useState } from 'react'
import { containerStyles } from '../../../styles/container_styles'
import { textStyles } from '../../../styles/text_styles'
import { buttonStyles } from '../../../styles/button_styles'

const ListNavTabs = () => {
  const [activeTab, setActiveTab] = useState('Imperium')

  const createTabLists = () => {
    const alliances = ['Imperium', 'Xenos', 'Chaos']
    const allianceLists = alliances.map((alliance) => {
      const display = alliance === activeTab ? true : false
      return (
        <AllianceList key={alliance} alliance={alliance} showAllianceLists={display}/>
      )
    })
    return (
      allianceLists
    )
  }

  const isActiveTab = (alliance: string) => {
    return alliance === activeTab ? buttonStyles.allianceTabActive : buttonStyles.allianceTabs
  }

  return (
    <View style={containerStyles.maxSpaceCenter}>
      <View style={[containerStyles.navBar, containerStyles.greenBack]}>
        <Pressable
          onPress={() => setActiveTab('Imperium')}
          style={isActiveTab('Imperium')}>
            <Text style={textStyles.navBarText}>Imperium</Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab('Chaos')}
          style={isActiveTab('Chaos')}>
          <Text style={textStyles.navBarText}>Chaos</Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab('Xenos')}
          style={isActiveTab('Xenos')}>
            <Text style={textStyles.navBarText}>Xenos</Text>
        </Pressable>
      </View>
      {createTabLists()}
    </View>
    
  )
}

export default ListNavTabs