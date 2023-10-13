import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App(): React.JSX.Element {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  function goalInputHandler(text: string): void {
    setEnteredGoalText(text);
  };

  function addGoalHandler() {
    setEnteredGoalText('');
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} value={enteredGoalText} placeholder="Your course goal!" onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map(goal => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 4,
  },
});
