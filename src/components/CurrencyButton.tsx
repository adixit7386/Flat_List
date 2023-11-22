import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;
export default function CurrencyButton(
  props: CurrencyButtonProps,
): JSX.Element {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.name}</Text>
      <Text style={styles.country}>{props.flag}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {fontSize: 14, color: '#2d3436'},
  country: {
    fontSize: 28,
    color: 'white',
    marginBottom: 4,
  },
});
