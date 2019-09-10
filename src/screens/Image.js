import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ImageComponent from "../Components/ImageComponent";

const Image = () => {
  return (
    <View>
      <ImageComponent title="Forest" pic={require("../assets/forest.jpg")} />
      <ImageComponent title="Beach" pic={require("../assets/beach.jpg")} />
      <ImageComponent
        title="Mountain"
        pic={require("../assets/mountain.jpg")}
      />
    </View>
  );
};

export default Image;
