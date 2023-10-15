import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App(): React.JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<{ text: string; id: string }[]>([]);

  function startAddGoalHandler(): void {
    setModalIsVisible(true);
  }

  function endAddGoalHandler(): void {
    setModalIsVisible(false);
  }

  function addGoalHandler(text: string): void {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text, id: `${Math.random()}` }]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id: string): void {
    setCourseGoals((currentCourseGoals) => currentCourseGoals.filter((goal) => goal.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} visible={modalIsVisible}></GoalInput>
      <Button title="Add New Goal" color={styles.addNewGoalBtn.color} onPress={startAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} id={itemData.item.id} onDelete={deleteGoalHandler} />}
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
  addNewGoalBtn: {
    color: '#5e0acc',
  },
});
