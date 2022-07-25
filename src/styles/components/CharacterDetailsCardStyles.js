import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '100%',
    marginTop: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    backgroundColor: '#fff',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  text: {
    color: '#000',
    fontSize: 20,
    marginLeft: 30,
  },
  innerText: {
    color: '#E89242FF',
    marginLeft: 10,
  },
});
