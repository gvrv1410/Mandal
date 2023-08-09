import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { colors } from "../../utils";
import SelectDropdown from "react-native-select-dropdown";
import iconConstant from "../../helper/iconConstant";
const DropDownView = ({ placeHolder, onSelect, items }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  // const [items, setItems] = useState([

  //   "Banana", "banana"
  // ]);

  const renderDropdownIcon = () => {
    return (
      <View style={style.dropdownIconContainer}>
        <Image
          source={iconConstant.ic_dropdown}
          style={style.dropDownIcon}
        />
      </View>
    );
  };

  return (
    <View style={style.mainContainer}>
      {/* <DropDownPicker
        placeholder={placeHolder}
        placeholderStyle={{ color: "#848484" }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={style.dropDownStyle}
      /> */}
      <SelectDropdown
        defaultButtonText={placeHolder}
        buttonStyle={[style.dropDownStyle, { width: "100%" }]}
        buttonTextStyle={style.dropDownBtnText}
        data={items}
        dropdownStyle={style.dropDownStyle}
        rowTextStyle={style.dropDownBtnText}
        dropdownOverlayColor="transparent"
        onSelect={onSelect}
        dropdownIconPosition="right"
        renderDropdownIcon={renderDropdownIcon}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    // zIndex: -1,
    marginVertical: 12,
  },
  dropDownStyle: {
    borderWidth: 1,
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
  dropDownBtnText: {
    fontSize: 12,
    textAlign: "left",
  },
  dropDownIcon: {
    height: 10,
    width: 10,
    resizeMode: "contain",
    marginRight: 5,
  },
});

export default DropDownView;
