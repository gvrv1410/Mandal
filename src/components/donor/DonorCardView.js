import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../../utils";
import { Height, Width } from "../../utils/responsive";

const DonorCardView = ({ name, village, dataShreeType, data }) => {
  return (
    <View>
      <View style={style.subContainer}>
        <Text
          style={[
            style.subText,
            { color: colors.primary, marginTop: Height(10) },
          ]}>
          દાતાશ્રી
        </Text>
        <FlatList
          data={data}
          renderItem={() => {
            return (
              <Text style={[style.rText, { marginTop: Height(10) }]}>
                {data}
              </Text>
            );
          }}
        />
        <Text
          style={[
            style.bText,
            { fontSize: Height(12), marginTop: Height(10) },
          ]}>
          {village}
        </Text>
      </View>
      <View style={style.mainContainer}>
        <Text style={style.text}>{name}</Text>
        <Text style={style.subText}>{dataShreeType}</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  mainContainer: {
    height: Height(60),
    width: Width(310),
    backgroundColor: colors.primary,
    borderRadius: Width(5),
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
  },
  subContainer: {
    width: Width(360),
    backgroundColor: colors.primaryWhite,
    marginVertical: Height(30),
    borderRadius: Width(10),
    alignSelf: "center",
    flex: 1,
    paddingVertical: Height(30),
  },
  text: {
    fontSize: Height(15),
    fontWeight: "400",
    color: colors.primaryWhite,
    textAlign: "center",
  },
  subText: {
    fontSize: Height(20),
    fontWeight: "400",
    color: colors.primaryWhite,
    textAlign: "center",
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Width(90),
  },
  bText: {
    textAlign: "center",
    fontSize: Height(15),
    fontWeight: "400",
    color: colors.primaryBlack,
  },
  rText: {
    fontSize: Height(15),
    fontWeight: "400",
    color: colors.primaryBlack,
    alignSelf: "center",
  },
});

export default DonorCardView;
