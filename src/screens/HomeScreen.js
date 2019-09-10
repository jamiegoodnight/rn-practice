import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = ({ navigation }) => {
  let { button, container } = styles;
  return (
    <View style={container}>
      <Text style={styles.text}>Hello, cruel world!</Text>
      <Button
        title="View Components Screen"
        style={button}
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        onPress={() => navigation.navigate("List")}
        style={button}
        title="List of Pals"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        style={button}
        title="Nice Places"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        style={button}
        title="A Counter"
      />
      <Button
        onPress={() => navigation.navigate("Colors")}
        style={button}
        title="Make Some Colors"
      />
      <Button
        onPress={() => navigation.navigate("Generator")}
        style={button}
        title="Generate Custom Color"
      />
      <Button
        onPress={() => navigation.navigate("Input")}
        style={button}
        title="Play with Inputs"
      />
      <Button
        onPress={() => navigation.navigate("Box")}
        style={button}
        title="The Box model"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical: 10
  },

  container: {
    margin: 20,
    alignItems: "center",
    width: 100
  },

  button: {}
});

export default HomeScreen;
