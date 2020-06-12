import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      underlayColor="white"
      accessibilityLabel="lable"
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listView}>
        <Text>{props.goal}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listView: {
    padding: 10,
    flex: 1,
    backgroundColor: "grey",
    borderWidth: 1,
    justifyContent: "space-around",
    marginBottom: 10,
    marginTop: 10,
  },
});

export default GoalItem;
