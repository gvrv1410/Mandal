import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DonorCardView = () => {
  return (
    <View style={style.mainContainer}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 2 }}></View>
    </View>
  );
};
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default DonorCardView;
