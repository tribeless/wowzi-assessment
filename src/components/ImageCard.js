import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {setItem} from '../redux/reducers/characterDetailsReducer';
import {styles} from '../styles/components/ImageCardStyles';

const ImageCard = ({item, navigation}) => {
  const dispatch = useDispatch();
  const handleNavigation = () => {
    dispatch(setItem(item));
    navigation.navigate('CharacterDetailsPage', {
      title: item?.name,
    });
  };
  return (
    <Pressable onPress={() => handleNavigation(item)} style={styles.root}>
      <Image style={styles.image} source={{uri: item?.image}} />
      <View style={styles.characterInfo}>
        <Text style={styles.text}>
          Location:
          <Text style={styles.innerText}> {item?.location?.name}</Text>
        </Text>
        <Text style={[styles.text, {marginTop: 5}]}>
          Species:
          <Text style={styles.innerText}> {item?.species}</Text>
        </Text>
      </View>
    </Pressable>
  );
};

export default ImageCard;

ImageCard.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
