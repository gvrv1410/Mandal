import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import images from "../../helper/imageConstant";
import { colors } from "../../utils";

const ComityCardView = ({ data }) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.subContainer} />
      <View style={style.bodyViewStyle}>
        <Text style={style.titleStyle}>{data.name}</Text>
        <Text style={style.subTitleStyle}>{data.post}</Text>
        <Text style={style.subTitleStyle}>{data.mobileNo}</Text>
        <Text style={style.subTitleStyle}>{data.village}</Text>
      </View>
      <Image
        source={images.profile}
        style={style.imageStyle}
        resizeMode="contain"
      />
    </View>
  );
};
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    height: 30,
  },
  bodyViewStyle: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,

    paddingBottom: 15,
    backgroundColor: colors.primaryWhite,

    shadowOffset: { width: 0, height: 0 },
    shadowColor: colors.shadowColor,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 5,
    elevation: 2,
  },
  imageStyle: {
    height: 75,
    width: 75,
    borderRadius: 75 / 2,
    borderColor: colors.primary,
    borderWidth: 1.5,
    position: "absolute",
    alignSelf: "center",
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: "500",
  },
  subTitleStyle: {
    fontSize: 10,
    fontWeight: "400",
  },
});

export default ComityCardView;
