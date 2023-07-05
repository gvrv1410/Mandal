import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Height, Width } from "../../utils/responsive";
import { colors } from "../../utils";
import imageConstant from "../../helper/imageConstant";
import iconConstant from "../../helper/iconConstant";

const FamilyCard = ({ name, code, phone, onPress }) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.view}>
        <Image
          source={imageConstant.profile}
          style={style.image}
        />
        <Text
          style={style.edit}
          onPress={onPress}>
          Edit
        </Text>
      </View>
      <View style={style.subView}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.code}>{code}</Text>
        <Text style={style.phone}>{phone}</Text>
      </View>
      <TouchableOpacity style={style.lastView}>
        <Image
          source={iconConstant.ic_delete}
          style={style.deleteImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FamilyCard;

const style = StyleSheet.create({
  mainContainer: {
    height: Height(100),
    width: Width(360),
    backgroundColor: colors.primaryWhite,
    alignSelf: "center",
    borderRadius: Width(5),
    flexDirection: "row",
    marginTop: Height(30),
    alignItems: "center",
  },
  image: {
    height: Height(40),
    width: Height(40),
    borderRadius: Height(40) / 2,
  },
  view: {
    alignItems: "center",
    marginLeft: Width(25),
  },
  deleteImage: {
    height: Height(15),
    width: Width(15),
  },
  subView: {
    marginLeft: Width(30),
  },
  lastView: {
    marginLeft: Width(100),
  },
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
