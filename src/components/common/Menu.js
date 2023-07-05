import React, { useState } from "react";

import { Modal, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { filterData } from "../../helper/dummyData";
import { colors } from "../../utils";
import { Height, Width } from "../../utils/responsive";
export default function Menu({
  displayTitle,
  displayMsg,
  visibility,
  dismissAlert,
  onPress,
}) {
  return (
    <View>
      <Modal
        visible={visibility}
        animationType={"fade"}
        transparent={true}>
        <View style={style.modalView}>
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
        </View>
      </Modal>
    </View>
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
