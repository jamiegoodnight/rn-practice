import React, { useState } from "react";
import { View, Button, Text, StyleSheet, TextInput } from "react-native";

const InputTest = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        name="text"
        value={text}
        onChangeText={newValue => setText(newValue)}
      />
      <Text>Type something and watch it appear—{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default InputTest;
