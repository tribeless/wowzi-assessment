import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from '../styles/components/InternetConnectivityStyles';

const InternetConectionCard = ({message}) => {
  return (
    <View style={styles.root}>
      <View style={styles.errorHolder}>
        <Text style={styles.error}>{message.toUpperCase()}</Text>
      </View>
    </View>
  );
};

export default InternetConectionCard;

InternetConectionCard.propTypes = {
  message: PropTypes.string.isRequired,
};
