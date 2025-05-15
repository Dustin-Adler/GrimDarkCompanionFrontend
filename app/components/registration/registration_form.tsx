import { View, TextInput, Text, Button, Pressable } from 'react-native'
import { containerStyles } from '../../../styles/container_styles'
import { textStyles } from '../../../styles/text_styles'
import { buttonStyles } from '../../../styles/button_styles'

const RegistrationForm = () => {
  return (
    <View style={containerStyles.card}>
      <Text style={textStyles.registrationHeading}>Create a new Account!</Text>
      <TextInput
        style={containerStyles.textInputBox}
        placeholder="Username"
      />      
      <TextInput
        style={containerStyles.textInputBox}
        placeholder="Email"
      />
      <TextInput
        style={containerStyles.textInputBox}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable
        style={buttonStyles.registrationButton}
        onPress={() => {
          // Handle registration logic here
        }}>
        <Text style={textStyles.button}>Create Account!</Text>
      </Pressable>
    </View>
  )
}

export default RegistrationForm