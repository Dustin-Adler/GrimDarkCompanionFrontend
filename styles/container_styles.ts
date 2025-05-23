import { StyleSheet } from 'react-native';

export const containerStyles = StyleSheet.create({
  maxSpaceCenter: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  tabContent: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      borderLeftWidth: 4,
      borderRightWidth: 4,
      borderColor: 'black',
  },
  greenBack: {
    backgroundColor: 'rgb(9, 108, 16)',
  },
  allianceTab: {
    paddingHorizontal: '1%',
    paddingTop: '1%',
    gap: '1%',
    backgroundColor: 'rgb(52, 52, 52)',
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
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    height: '8%',
    justifyContent: 'space-between'
  },
  listItem: {
    width: '100%',
    paddingVertical: '5%',
    backgroundColor: 'rgb(136, 0, 0)',
    borderWidth: 4,
    borderRadius: 10,
  },
  searchBar: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    paddingHorizontal: '2%',
    paddingVertical: '5%',
    backgroundColor: 'rgb(9, 108, 16)',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    gap: '4%',
  },
  seachbarTextInput: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 14,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)'
  }
});