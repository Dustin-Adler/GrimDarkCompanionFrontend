import { View, Text, Pressable } from 'react-native'
import useState from 'react'
import { containerStyles } from '../../../styles/container_styles'

type ListItemProps = {
  alliance: string
}

const ListItem = ({ alliance }: ListItemProps) => {
  // const [activeTab, setActiveTab] = useState('Imperium')

  return (
    <View style={containerStyles.listItem}>
      <Text>{alliance} ListItem</Text>
    </View>
  )
}

export default ListItem