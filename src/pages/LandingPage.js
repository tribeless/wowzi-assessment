import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import isEmpty from 'lodash.isempty';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FilterComponent from '../components/FilterComponent';
import {
  setIsEnd,
  setLoading,
  setPage,
  setError,
} from '../redux/reducers/characterReducer';
import InfiniteScrolling from '../containers/InfiniteScrolling';
import fetchCharacterData from '../api';
import ErrorCard from '../components/ErrorCard';
import {styles} from '../styles/pages/LandingPageStyles';

const LandingPage = ({navigation}) => {
  const theme = useTheme();
  const [data, setData] = React.useState([]);
  const [next, setNext] = React.useState(false);
  const dispatch = useDispatch();
  const page = useSelector(state => state.characterReducer.page);
  const loading = useSelector(state => state.characterReducer.loading);
  const isEnd = useSelector(state => state.characterReducer.isEnd);
  const error = useSelector(state => state.characterReducer.error);
  const filters = useSelector(state => state.filterCharacterReducer.filters);

  React.useEffect(() => {
    dispatch(setLoading(true));
    setNext(false);
    fetchCharacterData({page, filters})
      .then(res => {
        if (res?.data?.results.length > 0) {
          setData(res?.data?.results);
          if (res?.data?.info?.next !== null) {
            setNext(true);
          }
        } else {
          setData([]);
          setNext(false);
          dispatch(setIsEnd(true));
        }
        dispatch(setLoading(false));
        dispatch(setError(''));
      })
      .catch(e => {
        dispatch(setLoading(false));
        dispatch(setError(e.message));
        setNext(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filters]);

  const incrementPageNumber = () => {
    if (!loading && !isEnd && next) {
      dispatch(setPage(page + 1));
    }
  };
  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        height: '100%',
      }}>
      <Header navigation={navigation} page="landingPage" text="ELGOOG" />
      <FilterComponent />
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          {!isEmpty(error) ? (
            <ErrorCard error={error} />
          ) : (
            <InfiniteScrolling
              data={data}
              incrementPageNumber={incrementPageNumber}
              isEnd={isEnd}
              navigation={navigation}
            />
          )}
        </>
      )}
    </View>
  );
};

export default LandingPage;

LandingPage.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};
