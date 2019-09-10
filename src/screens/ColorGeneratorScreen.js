import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import ColorButton from "../Components/ColorButton";

const COLOR_INCREMENT = 10;

const ColorGeneratorScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View style={styles.imgCom}>
      <ColorButton
        more={() => setColor("red", COLOR_INCREMENT)}
        less={() => setColor("red", -1 * COLOR_INCREMENT)}
        boxColor="red"
      />
      <ColorButton
        more={() => setColor("green", COLOR_INCREMENT)}
        less={() => setColor("green", -1 * COLOR_INCREMENT)}
        boxColor="green"
      />
      <ColorButton
        more={() => setColor("blue", COLOR_INCREMENT)}
        less={() => setColor("blue", -1 * COLOR_INCREMENT)}
        boxColor="blue"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgCom: {
    marginVertical: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ColorGeneratorScreen;
