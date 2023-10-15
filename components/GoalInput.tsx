import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View, Image } from 'react-native';

function GoalInput({ visible, onAddGoal, onCancel }: { visible: boolean; onAddGoal: (text: string) => void; onCancel: () => void }) {
  const [text, setEnteredGoalText] = useState('');

  function goalInputHandler(text: string): void {
    setEnteredGoalText(text);
  }

  function addGoalHandler() {
    if (text) {
      onAddGoal(text);
      setEnteredGoalText('');
    }
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          style={styles.textInput}
          value={text}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          placeholderTextColor={styles.textInput.color}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} disabled={!text} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    flex: 1,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    color: '#120438',
    borderRadius: 6,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 80.5,
    margin: 20,
  },
});
