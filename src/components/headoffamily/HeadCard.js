import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Height, Width } from "../../utils/responsive";
import { colors } from "../../utils";

const HeadCard = ({
  image,
  text,
  name,
  date,
  mainContainer,
  onPress,
  imageStyle,
  nameStyle,
  dateStyle,
  isRowText,
  isText,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, { ...mainContainer }]}
      onPress={onPress}>
      <View style={styles.rowView}>
        <Image
          source={{ uri: image }}
          style={[styles.image, { ...imageStyle }]}
        />
        {isRowText && <Text style={styles.text}>{text}</Text>}
      </View>
      {isText && <Text style={[styles.text, { ...textStyle }]}>{text}</Text>}
      <Text style={[styles.name, { ...nameStyle }]}>{name}</Text>
      <Text style={[styles.date, { ...dateStyle }]}>{date}</Text>
    </TouchableOpacity>
  );
};

export default HeadCard;

const styles = StyleSheet.create({
  rowView: {
    flexDirection: "row",
  },
  mainContainer: {
    width: Width(360),
    backgroundColor: colors.primaryWhite,
    alignSelf: "center",
    paddingHorizontal: Width(10),
  },
  text: {
    fontSize: Height(15),
    width: Width(250),
    color: colors.gray,
    marginLeft: Width(10),
  },
  name: {
    fontSize: Height(10),
    textAlign: "right",
    paddingTop: Height(10),
    color: colors.primaryBlack,
  },
  date: {
    fontSize: Height(10),
    textAlign: "right",
    paddingTop: Height(2),
    color: colors.gray,
  },
  image: {
    height: Height(72),
    width: Width(72),
    borderRadius: Width(5),
  },
});
