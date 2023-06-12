import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils";

const Divider = ({ mainContainer, title }) => {
  return (
    <View style={[style.mainContainer, mainContainer]}>
      <Text style={style.titleTextStyle}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    padding: 13,
    backgroundColor: colors.tabColor,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTextStyle: {
    color: colors.primary,
  },
});

export default Divider;
