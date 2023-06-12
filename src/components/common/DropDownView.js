import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { colors } from "../../utils";

const DropDownView = ({ placeHolder }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <View style={style.mainContainer}>
      <DropDownPicker
        placeholder={placeHolder}
        placeholderStyle={{ color: "#848484" }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={style.dropDownStyle}
      />
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    zIndex: 1,
    marginVertical: 12,
  },
  dropDownStyle: {
    borderWidth: 0.8,
    borderColor: colors.tabColor,
    borderRadius: 5,
    shadowColor: colors.shadowColor,
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: colors.primaryWhite,
  },
});

export default DropDownView;
