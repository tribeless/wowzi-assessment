import React from 'react';
import {View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from '../styles/components/CharacterDetailsCardStyles';

const CharacterDetailsCard = ({item}) => {
  const [height, setHeight] = React.useState(0);
  const onLayout = e => {
    const {height} = e.nativeEvent.layout;
    setHeight(height);
  };
  return (
    <View onLayout={onLayout} style={styles.root}>
      <Image
        style={[styles.image, {height: height - 300}]}
        source={{uri: item?.image}}
      />
      <View style={styles.details}>
        <Text style={[styles.text, {marginTop: 30}]}>
          Species:
          <Text style={styles.innerText}> {item?.species}</Text>
        </Text>
        <Text style={[styles.text, {marginTop: 10}]}>
          Gender:
          <Text style={styles.innerText}> {item?.gender}</Text>
        </Text>
        <Text style={[styles.text, {marginTop: 10}]}>
          Status:
          <Text style={styles.innerText}> {item?.status}</Text>
        </Text>
        <Text style={[styles.text, {marginTop: 10}]}>
          Episodes Appeared In:
          <Text style={styles.innerText}>
            {' '}
            {item?.episode.length} episode(s)
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default CharacterDetailsCard;

CharacterDetailsCard.propTypes = {
  item: PropTypes.object.isRequired,
};
