import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';
import { useState, useContext } from 'react';
import { applicationContext } from '@/hooks/applicationContext';

const styles = StyleSheet.create({
  ingredientTextInput: {
    color: '#24231e',
    fontWeight: 'bold',
    border: 'solid 2px',
    borderRadius: '5px',
    padding: '3px',
    margin: '3px',
    fontSize: '12pt',
    width: '45%',
    overflow: 'hidden',
  },
  primaryButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#d89821',
    width: '40%'
  },
  primaryButtonText: {
    color: '#f3f1ed',
    padding: '3px',

  },
});

export function AddIngredient() {

  const { state, dispatch } = useContext(applicationContext)

  const [ingredientName, setIngredientName] = useState('');

  const handleSubmit = () => {
    const inputIngredient = {
      name: ingredientName,
      user_id: 1,
    }

    // Dispatch action to add ingredient
    dispatch({type: "ADD_INGREDIENTS_USER", payload: inputIngredient})

    // Clear input values
    setIngredientName('');
  };

  return (
    <View>
      <TextInput
        style={styles.ingredientTextInput}
        value={ingredientName}
        onChangeText={text => setIngredientName(text)}
      />
      <View>
        <Pressable
          style={styles.primaryButton}
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text style={styles.primaryButtonText}>add ingredient</Text>
        </Pressable>
      </View>
    </View>
  );
}
