import { StyleSheet } from 'react-native';

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'rgba(214, 119, 2, 1)',
    textShadowColor: 'rgba(214, 119, 2, .3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },
  registrationHeading: {
    fontSize: 30,
    marginBottom: '5%',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4
  },
  link: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "rgba(26, 255, 0, 0.85)",
    textAlign: 'center',
    textShadowColor: 'rgba(26, 255, 0, 0.25)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
    textAlign: 'center'
  }
});
