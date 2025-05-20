import { View } from 'react-native'
import { containerStyles } from '../styles/container_styles'
import MainNav from './components/nav_bar/_main_nav'
import ListIndex from './components/home/_list_index'
import SearchBar from './components/search_bar/_search_bar'

const Home = () => {
  return (
    <View style={containerStyles.maxSpaceCenter}>
      <MainNav/>
      <SearchBar/>
      <ListIndex/>
    </View>
  )
}

export default Home