import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils";
import MarqueeView from "react-native-marquee-view";
import { Height } from "../../utils/responsive";

const HeadLine = ({ headline }) => {
  return (
    <MarqueeView style={style.marqueeViewStyle}>
      <Text style={style.headLineTextStyle}>
        {headline?.replaceAll("\n", "")}
      </Text>
    </MarqueeView>
  );
};

const style = StyleSheet.create({
  marqueeViewStyle: {
    backgroundColor: colors.liteGray,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginTop: Height(10),
  },
  headLineTextStyle: {
    color: colors.primary,
    fontSize: 12,
    paddingHorizontal: 10,
  },
});

export default HeadLine;
