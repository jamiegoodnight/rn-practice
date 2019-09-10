import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageComponent = ({ title, pic }) => {
  return (
    <View style={styles.imgCom}>
      <Image source={pic} />
      <Text>{title}</Text>
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

export default ImageComponent;
