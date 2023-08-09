import React, { useState } from "react";

import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Modal } from "react-native-paper";
import { filterData } from "../../helper/dummyData";
import { colors } from "../../utils";
import { Height, Width } from "../../utils/responsive";
export default function Menu({
  displayTitle,
  displayMsg,
  visibility,
  dismissAlert,
  onPress,
  onDismiss,
}) {
  return (
    <Modal
      visible={visibility}
      animationType={"fade"}
      transparent={true}
      style={{ marginLeft: Width(270), marginBottom: Height(400) }}
      onDismiss={onDismiss}>
      {/* <View style={style.modalView}> */}
      <View style={style.modalSubView}>
        {filterData.map((item, i) => {
          return (
            <TouchableOpacity
              style={style.view}
              onPress={onPress}
              key={i}>
              <Text style={style.text}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* </View> */}
    </Modal>
  );
}

const style = StyleSheet.create({
  modalView: {
    justifyContent: "center",
    alignSelf: "flex-end",
    marginHorizontal: Width(20),
    marginTop: Height(100),
  },
  modalSubView: {
    backgroundColor: colors.primaryWhite,
    height: Height(185),
    width: Width(100),
    borderRadius: Width(5),
  },
  view: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
    marginVertical: Height(10),
  },
  text: {
    fontSize: Height(15),
    fontWeight: "500",
    color: colors.primaryBlack,
  },
});
