import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import CharacterDetailsCard from '../components/CharacterDetailsCard';

const CharacterDetailsPage = ({navigation, route}) => {
  const theme = useTheme();
  const item = useSelector(state => state.characterDetailsReducer.item);
  const {
    params: {title},
  } = route;
  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        height: '100%',
      }}>
      <Header
        navigation={navigation}
        page="details"
        text={`${title.toUpperCase()} IN DETAIL`}
      />
      <CharacterDetailsCard item={item} />
    </View>
  );
};

export default CharacterDetailsPage;

CharacterDetailsPage.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};
