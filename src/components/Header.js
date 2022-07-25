import React from 'react';
import {View, Text, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {TextInput, useTheme} from 'react-native-paper';
import {styles} from '../styles/components/HeaderStyles';

const Header = ({text, page, navigation}) => {
  const theme = useTheme();
  const handleBackNavigation = () => {
    navigation.navigate('LandingPage');
  };
  return (
    <View style={[styles.root, {backgroundColor: theme.colors.primary}]}>
      {page === 'details' && (
        <Pressable style={styles.close}>
          <TextInput.Icon
            onPress={handleBackNavigation}
            name="arrow-left"
            color={theme.colors.white}
          />
        </Pressable>
      )}
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Header;

Header.propTypes = {
  text: PropTypes.string.isRequired,
  page: PropTypes.string,
  navigation: PropTypes.object.isRequired,
};
