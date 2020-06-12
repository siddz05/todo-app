import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const GoalInput = (props) => {
  //variables state.
  const [enteredGoal, setEnteredGoal] = useState("");

  //functions.
  const inputHandler = (enterText) => {
    console.log("input", enterText);
    setEnteredGoal(enterText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  //view
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.root}>
        <TextInput
          style={styles.inputBox}
          placeholder="enter your task"
          onChangeText={inputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>

        {/*{props.onAddGoal.bind(this, enteredGoal) */}

        {/* <Button title="REMOVE ALL" onPress={removeGoalHandler} /> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 30,
    //flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    //alignItems: "center",
  },
  inputBox: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    //width: "60%",
    //flex: 1,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    //width: "50%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
