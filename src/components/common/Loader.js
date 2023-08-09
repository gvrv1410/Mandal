import React from "react";
import { ActivityIndicator, View, StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils";
import { Width } from "../../utils/responsive";

const { width, height } = Dimensions.get("screen");
const Loader = ({ loaderViewStyle }) => {
  return (
    <View style={[style.loaderViewStyle, loaderViewStyle]}>
      <View style={style.loaderView}>
        <ActivityIndicator
          size={"small"}
          color={colors.primary}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  loaderViewStyle: {
    position: "absolute",
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.15)",
  },
  loaderView: {
    height: Width(15),
    width: Width(15),
    backgroundColor: colors.primaryWhite,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Width(15) / 2,
  },
});

export default Loader;
