import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils";

const CardView = ({ title, memberCount = 0, familyCount = 0 }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.titleTextStyle}>{title}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.familyContainerStyle}>
          <Text>{familyCount}</Text>
          <Text>{"કુટુંબ"}</Text>
        </View>
        <View style={styles.familyContainerStyle}>
          <Text>{memberCount}</Text>
          <Text>{"સભ્ય"}</Text>
        </View>
      </View>
    </View>
  );
};
export default CardView;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: colors.shadowColor,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 5,
    elevation: 2,
    overflow: "hidden",
  },
  subContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
  },
  bodyContainer: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: colors.primaryWhite,
    padding: 16,
  },
  familyContainerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTextStyle: {
    color: colors.primaryWhite,
  },
});
