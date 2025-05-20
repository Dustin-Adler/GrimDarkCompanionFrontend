import { View, TextInput, Pressable, Text } from 'react-native'
import { containerStyles } from '../../../styles/container_styles'
import { textStyles } from '../../../styles/text_styles'
import { buttonStyles } from '../../../styles/button_styles'
import { useState } from 'react'

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')

  const Search = () => {
    // Handle search logic here
  }

  return (
    <View style={containerStyles.searchBar}>
      <TextInput
        style={containerStyles.seachbarTextInput}
        placeholder="Search..."
        onChangeText={setSearchText}/>
      <Pressable style={buttonStyles.searchButton} onPress={() => Search()}>
        <Text style={[textStyles.button, textStyles.searchButtonText]}>Search</Text>
      </Pressable>
    </View>
  )
}

export default SearchBar