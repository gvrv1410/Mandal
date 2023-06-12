import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../utils";

const TabView = ({ mainContainer, activeIndex, tabData, onPress }) => {
  return (
    <View style={[style.mainContainer, mainContainer]}>
      {tabData?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index.toString()}
            onPress={() => onPress(index)}
            style={[
              style.tabStyle,
              {
                backgroundColor:
                  activeIndex === index ? colors.primary : colors.tabColor,
              },
            ]}
          >
            <Text
              style={[
                style.headingStyle,
                {
                  color:
                    activeIndex === index
                      ? colors.primaryWhite
                      : colors.primary,
                },
              ]}
            >
              {item?.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },
  tabStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
    backgroundColor: colors.primary,
  },
  headingStyle: {
    fontSize: 14,
    fontWeight: 500,
  },
});

export default TabView;
