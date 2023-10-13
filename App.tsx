import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App(): React.JSX.Element {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<{ text: string, id: string }[]>([]);

  function goalInputHandler(text: string): void {
    setEnteredGoalText(text);
  };

  function addGoalHandler() {
    if (enteredGoalText) {
      setEnteredGoalText('');
      setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, id: `${Math.random()}` }]);
    }
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} value={enteredGoalText} placeholder="Your course goal!" onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalHandler} disabled={!enteredGoalText} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return (
            <View style={styles.goalItem}>
              <Text style={styles.goalItemText}>{itemData.item.text}</Text>
            </View>
          );
        }} keyExtractor={(item, index) => {
          return item.id;
        }} alwaysBounceVertical={false}>
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 16,
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
