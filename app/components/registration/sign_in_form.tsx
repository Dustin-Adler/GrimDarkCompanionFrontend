import { Text, View, TextInput, Pressable } from 'react-native'
import { containerStyles } from '../../../styles/container_styles'
import { textStyles } from '../../../styles/text_styles'
import { buttonStyles } from '../../../styles/button_styles'

export const SignIn = () => {
  return (
    <View style={containerStyles.card}>
      <Text style={textStyles.registrationHeading}>Sign In!</Text>
      <TextInput
        style={containerStyles.textInputBox}
        placeholder="Username or Email"
      />
      <TextInput
        style={containerStyles.textInputBox}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable
        style={buttonStyles.registrationButton}
        onPress={() => {
          // Handle sign in logic here
        }}>
        <Text style={textStyles.button}>Sign In!</Text>
      </Pressable>
    </View>
  )
}

export default SignIn