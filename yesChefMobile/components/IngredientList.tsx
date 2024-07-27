import { StyleSheet, View, FlatList, Text } from 'react-native';

export function IngredientList() {

  const listOfIngredients = [
    {
        id: 1,
        name: "Flour",
    },
    {
        id: 2,
        name: "Sugar",
    },
    {
        id: 3,
        name: "Butter",
    },
    {
        id: 4,
        name: "Eggs",
    },
    {
        id: 5,
        name: "Milk",
    },
    {
        id: 6,
        name: "Baking Powder",
    },
    {
        id: 7,
        name: "Salt",
    },
    {
        id: 8,
        name: "Vanilla Extract",
    },
    {
        id: 9,
        name: "Cocoa Powder",
    },
    {
        id: 10,
        name: "Chocolate Chips",
    }
  ];

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
      }}
    >
      <FlatList
        data={listOfIngredients}
        renderItem={({item}) => <Text style={styles.white}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  white: {
    color: 'white'
  },
});
