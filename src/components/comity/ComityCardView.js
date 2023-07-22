import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { apiConst } from "../../helper/apiConstant";
import images from "../../helper/imageConstant";
import { colors } from "../../utils";
import { Height } from "../../utils/responsive";

const ComityCardView = ({ data, onImagePress }) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.subContainer} />
      <View style={style.bodyViewStyle}>
        <Text style={style.titleStyle}>{data.name}</Text>
        <Text style={[style.subTitleStyle, { color: colors.primaryBlack }]}>
          {data.role}
        </Text>
        <Text style={[style.subTitleStyle, { color: colors.primary }]}>
          {data.mobile_no}
        </Text>
        <Text style={[style.subTitleStyle, { color: colors.primaryBlack }]}>
          {data.village}
        </Text>
      </View>
      <TouchableOpacity
        style={style.imageBtn}
        onPress={onImagePress}>
        <Image
          source={{ uri: apiConst.getAnyImages + data.photo }}
          style={style.imageStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
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
  },
  titleStyle: {
    fontSize: Height(15),
    fontWeight: "500",
    color: colors.primaryBlack,
  },
  subTitleStyle: {
    fontSize: Height(12),
    fontWeight: "400",
    marginTop: Height(10),
  },
  imageBtn: {
    position: "absolute",
    alignSelf: "center",
  },
});

export default ComityCardView;
