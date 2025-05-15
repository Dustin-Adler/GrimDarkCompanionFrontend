import {Text, View, ImageBackground, Button } from 'react-native'
import { Link } from 'expo-router'
import { textStyles } from '../../../styles/text_styles'
import { containerStyles } from '../../../styles/container_styles'
import { imageStyles } from '../../../styles/image_styles'
import images from '../../../assets/images'

const SplashScreen = () => {
  return (
    <ImageBackground source={images.WarbossInMegaArmour3} style={ imageStyles.backgroundImage }>
      <View style={ containerStyles.maxSpaceCenter }>
        <Text style={ textStyles.title }>Grim Dark Companion</Text>
        <Link href="./components/registration/registration_screen" style={textStyles.link}>To Registration Screen</Link>
      </View>
    </ImageBackground>
  )
}

export default SplashScreen