import { StyleSheet, Text, View, Image } from 'react-native'
import WarbossInMegaArmour from '../assets/images/warboss_in_mega_armour.png'
import React from 'react'

const Home = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Grim Dark Companion</Text>
      <Image source={ WarbossInMegaArmour } style={ styles.warboss_in_mega_armour }/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#014503',
    gap: 100
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  warboss_in_mega_armour: {
    width: 200,
    height: 200,
    borderRadius: 15
  }
})