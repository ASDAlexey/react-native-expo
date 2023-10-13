import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props: { text: string, id: string, onDelete: (id: string) => void }): React.JSX.Element {
  function onDelete() {
    props.onDelete(props.id)
  }

  return (
    <Pressable onPress={onDelete}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  goalItemText: {
    color: '#fff',
  },
});
