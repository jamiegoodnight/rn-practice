import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import ColorButton from "../Components/ColorButton";

const COLOR_INCREMENT = 10;
const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return state.red + action.payload > 255 || state.red + action.ppayload < 0
        ? state
        : {
            ...state,
            red: state.red + action.payload
          };
    case "green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : {
            ...state,
            green: state.green + action.payload
          };
    case "blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : {
            ...state,
            blue: state.blue + action.payload
          };
    default:
      return state;
  }
};

const CGSWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0
  });

  return (
    <View style={styles.imgCom}>
      <ColorButton
        more={() => dispatch({ type: "red", payload: COLOR_INCREMENT })}
        less={() => dispatch({ type: "red", payload: -1 * COLOR_INCREMENT })}
        boxColor="red"
      />
      <ColorButton
        more={() => dispatch({ type: "green", payload: COLOR_INCREMENT })}
        less={() => dispatch({ type: "green", payload: -1 * COLOR_INCREMENT })}
        boxColor="green"
      />
      <ColorButton
        more={() => dispatch({ type: "blue", payload: COLOR_INCREMENT })}
        less={() => dispatch({ type: "blue", payload: -1 * COLOR_INCREMENT })}
        boxColor="blue"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
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

export default CGSWithReducer;
