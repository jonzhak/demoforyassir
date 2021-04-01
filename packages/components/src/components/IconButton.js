import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function IconButton({name, style, onPress}) {
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
		{name}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});
