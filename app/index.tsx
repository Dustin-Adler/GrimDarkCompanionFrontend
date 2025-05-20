import {Text, View, ImageBackground, Button } from 'react-native'
import { Link } from 'expo-router'
import { textStyles } from '../styles/text_styles'
import { containerStyles } from '../styles/container_styles'
import { imageStyles } from '../styles/image_styles'
import images from '../assets/images'
import MainNav from './components/nav_bar/_main_nav'
import ListIndex from './components/home/list_index'

const Home = () => {
  return (
    <View style={containerStyles.maxSpaceCenter}>
      <MainNav/>
      <ListIndex/>
    </View>
  )
}

export default Home