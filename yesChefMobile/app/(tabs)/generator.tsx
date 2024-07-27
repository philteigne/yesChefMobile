import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const Generator: React.FC = () => {
  const [recipeTags, setRecipeTags] = useState<string>('');
  const [recipeFocus, setRecipeFocus] = useState<string>('');
  const [recipeAvoid, setRecipeAvoid] = useState<string>('');

  const handleSubmit = () => {
    const recipeRequest = {
      // allIngredients: state.ingredientList,
      recipeTags: recipeTags,
      recipeFocus: recipeFocus,
      recipeAvoid: recipeAvoid,
    }

    // Dispatch action to add ingredient
    // dispatch({ type: "REQUEST_RECIPE", payload: recipeRequest });

    // Dispatch action to set temporary parameter input for recipe regeneration
    // dispatch({ type: "SET_TEMP_PARAMETER_INPUT", payload: recipeRequest })
    // Clear input values
    setRecipeTags('');
    setRecipeFocus('');
    setRecipeAvoid('');
    console.log('submitted');
    
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Recipe Generator</Text>
      <TextInput
        value={recipeTags}
        onChangeText={setRecipeTags}
        style={styles.input}
        placeholder="What should we cook tonight?"
      />
      <TextInput
        value={recipeFocus}
        onChangeText={setRecipeFocus}
        style={styles.input}
        placeholder="What ingredients should we use?"
      />
      <TextInput
        value={recipeAvoid}
        onChangeText={setRecipeAvoid}
        style={styles.input}
        placeholder="What ingredients should we avoid?"
      />
      <Button title="Generate Recipe" onPress={handleSubmit} />
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

export default Generator;