import React from 'react';
import {FlatList, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import ImageCard from '../components/ImageCard';

const InfiniteScrolling = ({data, incrementPageNumber, isEnd, navigation}) => {
  const renderFooter = () => (
    <View>{isEnd && <Text>No more articles at the moment</Text>}</View>
  );
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <ImageCard navigation={navigation} item={item} />}
      onEndReached={incrementPageNumber}
      onEndReachedThreshold={0.2}
      ListFooterComponent={renderFooter}
    />
  );
};

export default InfiniteScrolling;

InfiniteScrolling.propTypes = {
  data: PropTypes.array.isRequired,
  incrementPageNumber: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  isEnd: PropTypes.bool,
};
