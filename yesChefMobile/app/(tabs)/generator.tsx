import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Generator() {
  const handleGenerate = () => {
    // Logic to generate recipe
    console.log('Generate button pressed');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Recipe Generator</Text>
      <TextInput
        style={styles.input}
        placeholder="What should we cook tonight?"
      />
      <TextInput
        style={styles.input}
        placeholder="What ingredients should we use?"
      />
      <TextInput
        style={styles.input}
        placeholder="What ingredients should we avoid?"
      />
      <Button title="Generate Recipe" onPress={handleGenerate} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
});
