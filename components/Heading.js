import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DisplayHeading = (props) => {
  return (
    <View style={styles.heading}>
      <Text> {props.heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    justifyContent: "center",
    alignContent: "space-around",
    fontSize: 30,
    margin: 1,
  },
});

export default DisplayHeading;
