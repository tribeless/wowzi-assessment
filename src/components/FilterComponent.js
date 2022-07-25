import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import Icon from 'react-native-vector-icons/FontAwesome';
import {setFilters} from '../redux/reducers/filterCharacterReducer';
import {setPage} from '../redux/reducers/characterReducer';
import {styles} from '../styles/components/FilterComponentStyles';

const InputComponent = ({inputDimensions, name, handleChange, text}) => {
  return (
    <View style={[styles.input]}>
      <TextInput
        mode="flat"
        placeholder={name}
        placeholderTextColor="#8B8484"
        underlineColor="transparent"
        value={text}
        name={name}
        style={{
          backgroundColor: '#fff',
          color: '#000',
          fontSize: 14,
          width: inputDimensions.width + 5,
          height: 40,
        }}
        onChangeText={val => handleChange(val, name)}
      />
      <View style={[styles.divider, {height: 40}]} />
    </View>
  );
};

InputComponent.propTypes = {
  inputDimensions: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string,
};

const FilterComponent = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filterCharacterReducer.filters);
  const [inputDimensions, setInputDimensions] = React.useState({
    width: 0,
    height: 0,
  });
  const [text, setText] = React.useState({
    Name: '',
    Species: '',
    Status: '',
    Gender: '',
  });
  const onLayout = e => {
    // we want to equally divide the different TextInput fields
    const {width, height} = e.nativeEvent.layout;
    setInputDimensions({width: Math.floor(width / 5), height});
  };

  const inputData = [
    {
      name: 'Name',
    },
    {
      name: 'Species',
    },
    {
      name: 'Status',
    },
    {
      name: 'Gender',
    },
  ];
  const handleChange = (val, name) => {
    setText({...text, [name]: val});
  };
  const handleAddFilters = () => {
    if (Object.values(text).some(item => item !== '')) {
      let newFilterState = {...filters};
      Object.keys(text).forEach(item => {
        if (!isEmpty(text[item])) {
          newFilterState[item] = text[item].trim(); // had to remove any spaces because it caused a 404 in the api response
        }
      });
      dispatch(setFilters({...newFilterState}));
      setText({Name: '', Species: '', Status: '', Gender: ''});
    }
  };
  const handleClearAllFilters = () => {
    dispatch(setFilters({Name: '', Species: '', Status: '', Gender: ''}));
    dispatch(setPage(1));
  };
  const handleClearOneFilters = val => {
    let temp = {...filters};
    Object.keys(filters).forEach(item => {
      if (filters[item] === val) {
        temp[item] = '';
      }
      if (Object.values(temp).every(item => isEmpty(item))) {
        dispatch(setPage(1));
      }
    });
    dispatch(setFilters({...temp}));
  };
  return (
    <View style={[styles.root, {backgroundColor: theme.colors.primary}]}>
      <View onLayout={onLayout} style={styles.filter}>
        {Array.isArray(inputData) &&
          inputData.length > 0 &&
          inputData.map((item, index) => (
            <React.Fragment key={index}>
              <InputComponent
                name={item.name}
                inputDimensions={inputDimensions}
                text={text[item.name]}
                handleChange={handleChange}
              />
            </React.Fragment>
          ))}
        <Pressable onPress={handleAddFilters} style={styles.search}>
          <Icon name="search" size={20} color="#900" />
        </Pressable>
      </View>
      <View style={styles.filters}>
        {Array.isArray(Object.values(filters)) &&
          Object.values(filters).some(item => !isEmpty(Object.values(item))) &&
          Object.values(filters)
            .filter(item => !isEmpty(item))
            .map((item, index) => (
              <React.Fragment key={index}>
                <View style={styles.filtersCard}>
                  <Text style={{color: '#000'}}>{Object.values(item)}</Text>
                  <Pressable style={styles.close}>
                    <TextInput.Icon
                      onPress={() => handleClearOneFilters(item)}
                      name="close"
                      color={theme.colors.black}
                    />
                  </Pressable>
                </View>
              </React.Fragment>
            ))}
        {Object.values(filters).some(item => !isEmpty(item)) && (
          <Pressable style={styles.closeAll}>
            <TextInput.Icon
              onPress={handleClearAllFilters}
              name="close"
              color={theme.colors.black}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FilterComponent;
