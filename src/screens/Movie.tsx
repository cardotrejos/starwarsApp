import React from 'react';
import {View, StyleSheet} from 'react-native';
import useMovie from '../hooks/useMovie';
import {Text} from '../components/Text';
import {theme} from '../theme';
import {FlatList} from 'react-native-gesture-handler';
import {MovieProps} from '../types';
import {TopCharsCardItem} from '../components/TopCharsCardItem';

export const Movie = ({route}: MovieProps) => {
  const {movie} = route && route.params;
  const {data, isSuccess, isLoading} = useMovie(movie.episode_id);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{movie.title}</Text>
      <View style={styles.movie}>
        <Text style={styles.content}>Episode {movie.episode_id}</Text>
        <Text style={styles.content}>Release date: {movie.release_date}</Text>
      </View>
      {isLoading && <Text style={styles.loading}>Loading...</Text>}

      {isSuccess && (
        <React.Fragment>
          <Text style={styles.charHeader}>Top 5 Characters</Text>
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.name}
            renderItem={({item}) => <TopCharsCardItem item={item} />}
          />
        </React.Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    textAlign: 'center',
    color: theme.white,
  },
  container: {
    flex: 1,
    backgroundColor: theme.black,
    padding: 30,
  },
  header: {
    fontFamily: theme.fontFamilyStarWars,
    textAlign: 'center',
    textTransform: 'lowercase',
    fontWeight: 'bold',
    fontSize: 40,
    color: theme.yellow,
    paddingVertical: 10,
  },
  charHeader: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: theme.fontFamilyStarWars,
    fontWeight: 'bold',
    fontSize: 30,
    color: theme.white,
    paddingVertical: 10,
  },
  movie: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  content: {
    fontFamily: theme.fontFamilyStarWars,
    textAlign: 'center',
    textTransform: 'lowercase',
    fontSize: 20,
    color: theme.white,
  },
});
