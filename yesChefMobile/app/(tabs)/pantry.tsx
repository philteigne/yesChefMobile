import { Image, StyleSheet, Platform, Text, View, Pressable } from 'react-native';

import { IngredientList } from '@/components/IngredientList';


// -----
import React from 'react';

// -----

export default function HomeScreen() {
  return (
  // <applicationContext.Provider value={{state, dispatch}}>
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Text style={styles.white}>&#8226; pantry</Text>

        <Pressable
          style={{
            width: 10
          }}
          onPress={() => {
            console.log('You tapped the button!');
          }}
        >
          <Text style={styles.white}>O</Text>
        </Pressable>
      </View>

      <IngredientList />

      <Text
        style={[
          styles.white,
          {
          marginTop: 2,
          marginBottom: 0.5,
          }
        ]}
      >
        &#8226; add an ingredient
      </Text>
      {/* <AddIngredient /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  white: {
    color: 'white'
  },
});
