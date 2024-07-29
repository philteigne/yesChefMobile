import { useContext } from 'react';
import { applicationContext } from '@/hooks/applicationContext';
import { StyleSheet, View, FlatList, Text } from 'react-native';

export function IngredientList() {

  const { state } = useContext(applicationContext)

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
      }}
    >
      <FlatList
        data={state.ingredientList}
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
