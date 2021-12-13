import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import {theme} from '../theme';

const styles = StyleSheet.create({
  defaultText: {
    color: theme.primary,
    fontSize: 18,
  },
});

type Props = {
  children: React.ReactNode;
  style?: {
    color: string;
    fontSize: number;
  };
};

export const Text = ({
  children,
  style = {
    color: theme.primary,
    fontSize: 18,
  },
}: Props) => {
  const textStyles = [styles.defaultText];
  textStyles.push(style);
  return <RNText style={textStyles}>{children}</RNText>;
};
