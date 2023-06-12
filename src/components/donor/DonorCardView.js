import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import images from "../../helper/imageConstant";
import { colors } from "../../utils";

const DonorCardView = ({ data }) => {
  return (
    <View style={style.mainContainer}>
      <View>
        <Text></Text>
      </View>
      <View></View>
    </View>
  );
};
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default DonorCardView;
