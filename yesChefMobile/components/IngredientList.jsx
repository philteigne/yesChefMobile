import { useContext } from 'react';
import { applicationContext } from '@/hooks/applicationContext';
import { StyleSheet, View, FlatList, Text } from 'react-native';

const styles = StyleSheet.create({
  ingredientList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '50%',
    overflow: 'scroll'
  },
  ingredientListItem: {
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
  sectionHeader: {
    color: '#d89821'
  },
});

export function IngredientList() {

  const { state } = useContext(applicationContext)

  return (
    <View style={styles.ingredientList}>
      <FlatList
        data={state.ingredientList}
        renderItem={({item}) => <Text style={styles.ingredientListItem}>{item.name}</Text>}
      />
    </View>
  );
}

