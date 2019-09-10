import React from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";

const ColorButton = ({ boxColor, more, less }) => {
  return (
    <View>
      <Button onPress={() => more()} title={`More ${boxColor}`} />
      <Button onPress={() => less()} title={`Less ${boxColor}`} />
    </View>
  );
};

export default ColorButton;
