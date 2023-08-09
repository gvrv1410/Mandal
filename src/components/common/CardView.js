import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../utils";

const CardView = ({
  title,
  memberCount = 0,
  familyCount = 0,
  onPress,
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        <Text>Data Not Found</Text>
      ) : (
        <TouchableOpacity
          style={styles.mainContainer}
          onPress={onPress}>
          <View style={styles.subContainer}>
            <Text style={styles.titleTextStyle}>{title}</Text>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.familyContainerStyle}>
              <Text style={styles.text}>{familyCount}</Text>
              <Text style={styles.subText}>{"કુટુંબ"}</Text>
            </View>
            <View style={styles.familyContainerStyle}>
              <Text style={styles.text}>{memberCount}</Text>
              <Text style={styles.subText}>{"સભ્ય"}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
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
    fontSize: 20,
    fontWeight: "500",
  },
  text: {
    fontSize: 14,
    color: "black",
  },
  subText: {
    fontSize: 15,
    color: "black",
    fontWeight: "400",
  },
});
