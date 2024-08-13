import React, { useState, useEffect, useContext } from 'react';
import { applicationContext } from '@/hooks/applicationContext';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal } from 'react-native';

const Stack = createStackNavigator();

function RecipeList({ navigation }) {

  const {state, dispatch} = useContext(applicationContext)

  const recipe = state.recipes.find(r => r.id === state.activeRecipe);

  const [modalVisible, setModalVisible] = useState(false);
  
  const handleSelectRecipe = (recipe, fullDetails = false) => {
    dispatch({type: "SET_ACTIVE_RECIPE", payload: recipe.id})
    console.log(state.activeRecipe)
    if (fullDetails) {
      navigation.navigate('RecipeDetails', { recipe });
    } else {
      setModalVisible(true);
    }
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectRecipe(item)} style={styles.recipeItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.tags}>{item.tags}</Text>
    </TouchableOpacity>
  );

  return (
      
    <View style={styles.container}>
      <FlatList
        data={state.recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{recipe?.title}</Text>

          <Text style={styles.ingredientsTitle}>Ingredients:</Text>
          {(state.recipeIngredients).map((ing, index) => (
            <Text key={index}>{`${ing.quantity} ${ing.units} of ${ing.name}`}</Text>
          ))}
          <Text style={styles.ingredientsTitle}>Steps:</Text>

          <Text>{recipe?.steps}</Text>

          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Back to Recipes</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

function RecipeDetailsScreen({ route }) {
  const { recipe } = route.params;
  return (
    <View style={styles.modalView}>
      <Text style={styles.modalTitle}>{recipe.title}</Text>
      <Text>{recipe.steps}</Text>
    </View>
  );
}

function RecipesNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RecipeList" component={RecipeList} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use flex to ensure that the container uses all available space
    backgroundColor: '#f7f7f7', // A light grey background color for the whole view
  },
  recipeItem: {
    backgroundColor: '#ffffff', // White background for each item
    borderRadius: 8, // Rounded corners for the recipe items
    padding: 16, // Padding inside each recipe item
    marginVertical: 8, // Vertical spacing between items
    marginHorizontal: 16, // Horizontal margin for breathing space
    shadowColor: "#000", // Shadow to make the items "pop" a bit
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 18, 
    fontWeight: 'bold',
    marginBottom: 4, 
    color: '#333'
  },
  tags: {
    fontSize: 14, 
    color: '#666' 
  },
  modalView: {
    flex: 1, 
    backgroundColor: 'white',
    padding: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  modalTitle: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
  },
  ingredientsTitle: {
    fontSize: 16, 
    fontWeight: 'bold', 
    marginTop: 20, 
    marginBottom: 10, 
  },
  buttonClose: {
    marginTop: 20, 
    padding: 10, 
    backgroundColor: '#6200ee', 
    borderRadius: 20, 
  },
  textStyle: {
    color: 'white', 
    fontWeight: 'bold', 
    textAlign: 'center', 
  }
});


export default RecipesNavigator;
