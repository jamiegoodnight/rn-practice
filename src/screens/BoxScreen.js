import React, { useState } from "react";
import { View, Button, Text, StyleSheet, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  view1: {
    height: 50,
    width: 50,
    backgroundColor: "red"
  },
  view2: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    top: 50
  },
  view3: {
    height: 50,
    width: 50,
    backgroundColor: "blue"
  }
});

export default BoxScreen;
