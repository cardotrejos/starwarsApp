import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import IconComponent from './SpeciesIcon';
import {theme} from '../theme';
import {Character} from '../types';
import {CARD_WIDTH, CARD_HEIGHT} from '../utils/dimensionUtil';

type Props = {
  item: Character;
};

export const TopCharsCardItem = ({item}: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{item.name}</Text>
        {IconComponent(item.speciesName, item.gender)}
      </View>
      <Text style={styles.gender}>Gender: {item.gender}</Text>
      <Text>Species: {item.speciesName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.gray,
    padding: 15,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  cardHeader: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  gender: {
    textTransform: 'capitalize',
  },
});
