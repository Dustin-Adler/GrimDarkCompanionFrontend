import { View, ImageBackground, Pressable, Text } from 'react-native'
import { Link } from 'expo-router'
import images from '../../../assets/images'
import { imageStyles } from '../../../styles/image_styles'
import { containerStyles } from '../../../styles/container_styles'
import { textStyles } from '../../../styles/text_styles'
import { buttonStyles } from '../../../styles/button_styles'
import RegistrationForm from './registration_form'
import SignIn from './sign_in_form'
import { useState } from 'react'

const registration_screen = () => {
  const [formType, setFormType] = useState("register");

  const registerOrSignIn = () => {
    let element = null
    if (formType === "register") {
      element = <RegistrationForm />
    } else {
      element = <SignIn />
    }
    return element
  }

  const toggleForm = () => {
    setFormType(formType === "register" ? "sign-in" : "register")
  }

  return (
    <ImageBackground source={images.WarbossInMegaArmour3} style={imageStyles.backgroundImage}>
      <View style={[containerStyles.maxSpaceCenter, containerStyles.greyscreen]}>
        {registerOrSignIn()}
        <Pressable
          style={buttonStyles.registrationButton}
          onPress={toggleForm}>
            <Text style={textStyles.button}>{formType === "register" ? 'Switch to Sign In' : 'Switch to Registration'}</Text>
        </Pressable>
        <Link href="/" style={textStyles.link}>To Home Page</Link>
      </View>
    </ImageBackground>
  )
}

export default registration_screen
