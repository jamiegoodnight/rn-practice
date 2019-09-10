import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.imgCom}>
      <Button
        title="Increase Count"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Descrease Count"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter} </Text>
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

export default CounterScreen;
