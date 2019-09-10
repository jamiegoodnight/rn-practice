import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [color, setColor] = useState([]);
  return (
    <View style={styles.imgCom}>
      <Button
        title="More Color Squares"
        onPress={() => {
          setColor([...color, randomRgb()]);
        }}
      />
      <FlatList
        data={color}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item
              }}
            />
          );
        }}
      />
      <Text>Colors above</Text>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  imgCom: {
    marginVertical: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ColorScreen;
