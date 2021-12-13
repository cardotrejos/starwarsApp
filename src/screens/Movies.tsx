import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {MovieCardItem} from '../components/MovieCardItem';
import useMovies from '../hooks/useMovies';
import {theme} from '../theme';
import {MoviesProps} from '../types';

export const Movies = ({navigation}: MoviesProps) => {
  const {data, isLoading, isSuccess} = useMovies();
  return (
    <View style={styles.container}>
      {isLoading && (
        <React.Fragment>
          <Text style={styles.loading}>Loading...</Text>
        </React.Fragment>
      )}

      {isSuccess && (
        <React.Fragment>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            style={styles.wrapper}
            keyExtractor={item => `${item.episode_id}`}
            renderItem={({item}) => (
              <MovieCardItem navigation={navigation} item={item} />
            )}
          />
        </React.Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
    padding: 20,
  },
  wrapper: {
    flex: 1,
    paddingVertical: 30,
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: theme.white,
  },
});
