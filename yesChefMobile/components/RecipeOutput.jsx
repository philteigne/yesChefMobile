import React, {useContext} from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { applicationContext } from '@/hooks/applicationContext';

const RecipeOutput = () => {

  const {state,dispatch} = useContext(applicationContext);
  const recipe = state.recipeResponse;
  // const exampleJson = {
  //   "title": "Classic Bread",
  //   "tags": ["baking", "bread"],
  //   "steps": [
  //     "1. Mix ingredients.",
  //     "2. Knead dough.",
  //     "3. Let rise.",
  //     "4. Bake at 200°C for 30 minutes."
  //   ],
  //   "ingredients": [
  //     { "name": "Flour", "quantity": 15, "units": "grams", "id": "1" },
  //     { "name": "Yeast", "quantity": 0.5, "units": "tablespoons", "id": "2" }
  //   ]
  // } 
  const clearRecipe = () => {
    dispatch({type: 'CLEAR_RECIPE_RESPONSE'})
  }
  return (
    <View style={styles.container}>
      {/* RECIPE TITLE AND TAGS */}
      
      <Text style={styles.tags} testID="recipe-tags">
        {/* {recipe.tags.join(', ')} */}
      </Text>
      <Text style={styles.title}>
        Recipe Viewer
      </Text>
      <Card style={styles.card}>
        <Card.Content>
        <Text style={styles.title} testID="recipe-title">
          {recipe.title}
        </Text>
          {/* RECIPE INGREDIENTS */}
          {recipe.ingredients.map((ing, i) => (
            <Text key={i} style={styles.text}>
              • {ing.name} - {ing.quantity} {ing.units}
            </Text>
          ))}
          {/* RECIPE STEPS */}
          {recipe.steps.map((step, i) => (
            <Text key={i} style={styles.step}>
             {step}
            </Text>
          ))}
        </Card.Content>
      </Card>
      <Button
        title='Clear'
        onPress={clearRecipe}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tags: {
    fontSize: 14,
    marginBottom: 16,
    color: 'gray',
  },
  card: {
    padding: 16,
    marginVertical: 8,
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
  },
  step: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 8,
  },
});

export default RecipeOutput;
