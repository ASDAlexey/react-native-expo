import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

function GoalInput({ onAddGoal }: { onAddGoal: (text: string) => void }) {
  const [text, setEnteredGoalText] = useState('');

  function goalInputHandler(text: string): void {
    setEnteredGoalText(text);
  };

  function addGoalHandler() {
    if (text) {
      onAddGoal(text);
      setEnteredGoalText('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} value={text} placeholder="Your course goal!" onChangeText={goalInputHandler} />
      <Button title="Add Goal" onPress={addGoalHandler} disabled={!text} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBlockColor: '#ccc',
    flex: 1,
    marginBottom: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 8,
    width: '70%',
  },
});
