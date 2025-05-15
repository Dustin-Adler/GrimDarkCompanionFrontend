import {Text, View, Image, ImageBackground } from 'react-native'
import { Link } from 'expo-router'
import images from '../assets/images'
import { textStyles } from '../styles/text_styles'
import { containerStyles } from '../styles/container_styles'
import { imageStyles } from '../styles/image_styles'
import React from 'react'

const Home = () => {
  return (
    <ImageBackground source={images.WarbossInMegaArmour3} style={ imageStyles.backgroundImage }>
      <View style={ containerStyles.maxSpaceCenter }>
        <Text style={ textStyles.title }>Grim Dark Companion</Text>
      </View>
      <Link href="">  </Link>
    </ImageBackground>
  )
}

export default Home