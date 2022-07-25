import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },
  image: {
    width: '100%',
    height: 169,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  characterInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: 58,
  },
  text: {
    color: '#000',
    marginLeft: 20,
  },
  innerText: {
    color: '#E89242FF',
    marginLeft: 10,
  },
});
