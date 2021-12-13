import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {getFullYear} from '../utils/dateUtils';
import {theme} from '../theme';
import {MoviesDataResults, MoviesProps} from '../types';

type Props = {
  item: MoviesDataResults;
  navigation: MoviesProps['navigation'];
};

export const MovieCardItem = ({item, navigation}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push('Movie', {movie: item})}
      style={styles.movie}>
      <View style={styles.item}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text style={styles.movieTitle}>Episode {item.episode_id}</Text>
        <Text style={styles.movieTitle}>{getFullYear(item.release_date)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  movie: {
    backgroundColor: theme.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  movieTitle: {
    color: theme.yellow,
    textTransform: 'lowercase',
    textAlign: 'center',
    fontFamily: theme.fontFamilyStarWars,
  },
});
