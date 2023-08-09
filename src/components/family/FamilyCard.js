import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Height, Width } from "../../utils/responsive";
import { colors } from "../../utils";
import imageConstant from "../../helper/imageConstant";
import iconConstant from "../../helper/iconConstant";

const FamilyCard = ({
  name,
  code,
  phone,
  onPress,
  onBtnPress,
  onImagePress,
  onDeletePress,
}) => {
  return (
    <TouchableOpacity
      style={style.mainContainer}
      onPress={onBtnPress}>
      <View style={{ flexDirection: "row" }}>
        <View style={style.view}>
          <TouchableOpacity
            onPress={onImagePress}
            hitSlop={{ bottom: 30, left: 30, right: 30, top: 30 }}>
            <Image
              source={imageConstant.profile}
              style={style.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            hitSlop={{ bottom: 15, left: 15, right: 15, top: 15 }}>
            <Text
              style={style.edit}
              onPress={onPress}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.subView}>
          <Text style={[style.name, { width: Width(150) }]}>{name}</Text>
          <Text style={style.code}>{code}</Text>
          <Text style={style.phone}>{phone}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={style.lastView}
        onPress={onDeletePress}
        hitSlop={{ bottom: 15, left: 15, right: 15, top: 15 }}>
        <Image
          source={iconConstant.ic_delete}
          style={style.deleteImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default FamilyCard;

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primaryWhite,
    borderRadius: Width(5),
    flexDirection: "row",
    marginTop: Height(30),
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    marginHorizontal: Width(20),
    paddingHorizontal: Width(20),
    paddingVertical: Height(10),
  },
  image: {
    height: Height(40),
    width: Height(40),
    borderRadius: Height(40) / 2,
  },
  view: {
    alignItems: "center",
  },
  deleteImage: {
    height: Height(15),
    width: Width(15),
  },
  subView: {
    marginLeft: Width(30),
  },
  lastView: {},
  edit: {
    fontSize: Height(10),
    fontWeight: "400",
    color: colors.primary,
    marginTop: Height(5),
  },
  name: {
    fontSize: Height(15),
    fontWeight: "400",
    color: colors.primaryBlack,
  },
  code: {
    fontSize: Height(10),
    fontWeight: "400",
    color: colors.gray,
  },
  phone: {
    fontSize: Height(10),
    fontWeight: "400",
    color: colors.primary,
  },
});
