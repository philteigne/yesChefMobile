import { Image, StyleSheet, Platform, Text, View, Pressable } from 'react-native';

import { IngredientList } from '@/components/IngredientList';
import { AddIngredient } from '@/components/AddIngredient';

// -----
import React from 'react';

// -----

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: '#f3f1ed',
    marginBottom: '200px'
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sectionHeader: {
    color: '#d89821'
  },
});

export default function HomeScreen() {
  return (
    <View style={styles.appBackground}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>&#8226; pantry</Text>

        <Pressable
          onPress={() => {
            console.log('You tapped the button!');
          }}
        >
          <Text>O</Text>
        </Pressable>
      </View>

      <IngredientList />

      <Text style={styles.sectionHeader}>
        &#8226; add an ingredient
      </Text>
      <AddIngredient />
    </View>
  );
}