import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListsScreen = () => {
  const list = [
    { name: "Jamie", age: 30 },
    { name: "Vince", age: 15 },
    { name: "Honey", age: 2 },
    { name: "Knobby", age: 2 }
  ];
  return (
    <View>
      <Text>Lists Screen</Text>
      <FlatList
        data={list}
        horizontal={false}
        keyExtractor={ele => ele.name}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - {item.age}!
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 20
  }
});

export default ListsScreen;
