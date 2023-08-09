import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Height, Width } from "../../utils/responsive";
import { colors } from "../../utils";
import iconConstant from "../../helper/iconConstant";

const BusinessCard = ({ email, phone, link, location, businessName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.rowView}>
          <Image
            source={iconConstant.ic_bemail}
            style={styles.bemail}
            resizeMode="contain"
          />
          <Text style={styles.subText}>{email}</Text>
        </View>
        <View style={styles.rowView}>
          <Image
            source={iconConstant.ic_bphone}
            style={styles.bphone}
            resizeMode="contain"
          />
          <Text style={styles.subText}>{phone}</Text>
        </View>
        <View style={styles.rowView}>
          <Image
            source={iconConstant.ic_blink}
            style={styles.blink}
            resizeMode="contain"
          />
          <Text style={styles.subText}>{link}</Text>
        </View>
        <View style={styles.rowView}>
          <Image
            source={iconConstant.ic_bsLocation}
            style={styles.blocation}
            resizeMode="contain"
          />
          <Text style={styles.subText}>{location}</Text>
        </View>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>{businessName}</Text>
      </View>
    </View>
  );
};

export default BusinessCard;

const styles = StyleSheet.create({
  mainContainer: {
    height: Height(210),
    width: Width(360),
    borderWidth: Height(1),
    borderRadius: Width(10),
    borderColor: colors.primary,
    alignSelf: "center",
    marginTop: Height(20),
    paddingTop: Height(30),
  },
  view: {
    height: Height(45),
    width: Width(298),
    backgroundColor: colors.primary,
    borderRadius: Width(5),
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: Height(30),
  },
  text: {
    fontSize: Height(20),
    fontWeight: "400",
    color: colors.primaryWhite,
  },
  bemail: {
    height: Height(10),
    width: Width(15),
  },
  bphone: {
    height: Height(16),
    width: Width(15),
  },
  blink: {
    height: Height(14),
    width: Width(15),
  },
  blocation: {
    height: Height(17),
    width: Width(15),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Width(32),
    marginTop: Height(15),
  },
  subText: {
    fontSize: Height(15),
    fontWeight: "400",
    marginLeft: Width(20),
    color: colors.primaryBlack,
  },
});
