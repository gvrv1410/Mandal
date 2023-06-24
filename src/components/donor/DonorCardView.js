import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils";
import { Height, Width } from "../../utils/responsive";

const DonorCardView = ({ name, donorOne, donorTwo, donorThree, village }) => {
  return (
    <View>
      <View style={style.subContainer}>
        <Text style={[style.subText, { color: colors.primary, marginTop: Height(40) }]}>દાતાશ્રી</Text>
        <View style={style.rowView}>
          <Text style={style.rText}>{donorOne}</Text>
          <Text style={style.rText}>{donorTwo}</Text>
        </View>
        <Text style={[style.bText, { marginTop: Height(10) }]}>{donorThree}</Text>
        <Text style={[style.bText, { fontSize: Height(12) }]}>{village}</Text>
      </View>
      <View style={style.mainContainer}>
        <Text style={style.text}>{name}</Text>
        <Text style={style.subText}>કોમ્યુનિટી સેન્ટર</Text>
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
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute'
  }, subContainer: {
    height: Height(160),
    width: Width(360),
    backgroundColor: colors.primaryWhite,
    // position: 'absolute',
    marginTop: Height(30),
    // zIndex: -1,
    borderRadius: Width(10),
    alignSelf: 'center'
  }, text: {
    fontSize: Height(15),
    fontWeight: '400',
    color: colors.primaryWhite,
    textAlign: 'center'
  }, subText: {
    fontSize: Height(20),
    fontWeight: '400',
    color: colors.primaryWhite,
    textAlign: 'center'
  }, rowView: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: Width(90),
    marginTop: Height(10)
  }, bText: {
    textAlign: 'center',
    fontSize: Height(15),
    fontWeight: '400',
    color: colors.primaryBlack,

  }, rText: {
    fontSize: Height(15),
    fontWeight: '400',
    color: colors.primaryBlack
  }
});

export default DonorCardView;
