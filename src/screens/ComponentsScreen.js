import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const name = "Jamie";
  return (
    <View>
      <Text style={styles.textStyle}>This is the component screen</Text>
      <Text style={styles.nameStyle}>My name is {name}! Howdy.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  nameStyle: {
    fontSize: 20
  }
});

export default ComponentScreen;
