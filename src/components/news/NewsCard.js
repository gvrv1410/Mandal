import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import imageConstant from "../../helper/imageConstant";
import { Height, Width } from "../../utils/responsive";
import { colors } from "../../utils";

const NewsCard = ({ mainContainer, text, date, subText, onPress, image }) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, { ...mainContainer }]}
      onPress={onPress}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.dateText}>{date}</Text>
      <Text style={styles.subText}>{subText}</Text>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  image: {
    height: Height(178),
    width: Width(343),
    alignSelf: "center",
  },
  mainContainer: {
    width: Width(360),
    backgroundColor: colors.primaryWhite,
    alignSelf: "center",
  },
  text: {
    fontSize: Height(20),
    paddingHorizontal: Width(10),
    fontWeight: "400",
    color: colors.primary,
    marginTop: Height(10),
  },
  dateText: {
    fontSize: Height(10),
    paddingHorizontal: Width(10),
    fontWeight: "400",
    color: colors.gray,
  },
  subText: {
    fontSize: Height(15),
    paddingHorizontal: Width(10),
    fontWeight: "400",
    color: colors.gray,
    marginTop: Height(10),
  },
});
