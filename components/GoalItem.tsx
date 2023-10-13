import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function GoalItem(props: { text: string }): React.JSX.Element {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{props.text}</Text>
    </View>
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
