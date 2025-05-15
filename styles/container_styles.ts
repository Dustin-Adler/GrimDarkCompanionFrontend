import { StyleSheet } from 'react-native';

export const containerStyles = StyleSheet.create({
  maxSpaceCenter: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  greyscreen: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  card: {
    width: '90%',
    paddingVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5%',
    backgroundColor: 'lightblue',
    borderRadius: 10,
    borderColor: 'darkblue',
    borderWidth: 5,
    elevation: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowColor: 'lightblue'
  },
  textInputBox: {
    width: '80%',
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)'
  }
});