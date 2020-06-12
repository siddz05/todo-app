import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, Image } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

import DisplayHeading from "./components/Heading";

function Todo({ goal }) {
  return (
    <View style={styles.listView}>
      <Text>{goal}</Text>
    </View>
  );
}
export default function App() {
  //state
  const [courseGoals, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  //functions
  const addGoalHandler = (goalTitle) => {
    if (goalTitle.length == 0) {
      console.log("empty goal");
      return;
    }
    console.log("addGoalHandler--> " + goalTitle);
    setCourseGoal((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(36).substring(7), value: goalTitle },
    ]);

    //hide the button
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
        style={{
          width: 200,
          height: 200,
          justifyContent: "center",
          flexDirection: "column",
          flex: 1,
        }}
      />
      <Button title="add new goal" onPress={() => setIsAddMode(true)} />

      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isAddMode}
        onCancel={cancelGoalHandler}
      />

      <FlatList
        keyExtractor={(item) => item.id}
        data={courseGoals} //list
        renderItem={({ item }) => (
          <GoalItem
            goal={item.value}
            id={item.id}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    //alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: 10,
  },
  heading: { alignItems: "center", padding: 20 },
});
