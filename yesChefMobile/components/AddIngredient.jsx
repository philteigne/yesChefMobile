import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';
import { useState, useContext } from 'react';
import { applicationContext } from '@/hooks/applicationContext';

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
        style={{
          borderBottomWidth: 2,
          borderColor: 'white',
        }}
        value={ingredientName}
        onChangeText={text => setIngredientName(text)}
      />
      <View>
        <Pressable
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text style={styles.white}>add ingredient</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  white: {
    color: 'white'
  },
});
