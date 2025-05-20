import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  registrationButton: {
    marginTop: "5%",
    width: '50%',
    backgroundColor: 'rgb(253, 126, 0)',
    borderRadius: 6,
    padding: 10,
  },
  mainNavTabs: {
    backgroundColor: 'rgb(2, 13, 136)',
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: 'black',
  },
  mainNavTabActive: {
    backgroundColor: 'rgb(9, 108, 16)',
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: 'black',
  }
})