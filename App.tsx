import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App(): React.JSX.Element {
  const [courseGoals, setCourseGoals] = useState<{ text: string, id: string }[]>([]);

  function addGoalHandler(text: string) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text, id: `${Math.random()}` }]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}></GoalInput>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals} renderItem={itemData => <GoalItem text={itemData.item.text} />}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        ></FlatList>
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
  goalsContainer: {
    flex: 4,
  },
});
