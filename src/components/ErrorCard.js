import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from '../styles/components/ErrorCardStyles';

const ErrorCard = ({error}) => {
  return (
    <View style={styles.root}>
      <View style={styles.errorHolder}>
        <Text style={styles.error}>{error.toUpperCase()}</Text>
      </View>
    </View>
  );
};

export default ErrorCard;

ErrorCard.propTypes = {
  error: PropTypes.string.isRequired,
};
