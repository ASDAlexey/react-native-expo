import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props: { text: string; id: string; onDelete: (id: string) => void }): React.JSX.Element {
  function onDelete() {
    props.onDelete(props.id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable onPress={onDelete} style={({ pressed }) => pressed && styles.pressedItem} android_ripple={{ color: '#210644' }}>
        <Text style={styles.goalItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
