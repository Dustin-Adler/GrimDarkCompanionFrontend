import { View, ImageBackground } from 'react-native'
import { Link } from 'expo-router'
import images from '../../../assets/images'
import { imageStyles } from '../../../styles/image_styles'
import { containerStyles } from '../../../styles/container_styles'
import { textStyles } from '../../../styles/text_styles'
import RegistrationForm from './registration_form'
import SignIn from './sign_in_form'
import { useState } from 'react'

const registration_screen = () => {
  const [n, setN] = useState(2); // 1 for registration, 2 for sign in

  const registerOrSignIn = () => {
    let element = null
    if (n === 1) {
      element = <RegistrationForm />
    } else {
      element = <SignIn />
    }
    return element
  }

  return (
    <ImageBackground source={images.WarbossInMegaArmour3} style={imageStyles.backgroundImage}>
      <View style={[containerStyles.maxSpaceCenter, containerStyles.greyscreen]}>
        {registerOrSignIn()}
        <Link href="/" style={textStyles.link}>To Home Page</Link>
      </View>
    </ImageBackground>
  )
}

export default registration_screen
