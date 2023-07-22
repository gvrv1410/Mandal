import React from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";
import { colors } from "../../utils";

const InputText = ({
  value,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  maxLength,
  inputStyle,
  onChangeText,
  onFocus,
  onBlur,
  mainContainer,
  multiline,
  keyboardType,
  numberOfLines,
  icon,
  iconStyle,
  isIconView,
  editable,
}) => {
  return (
    <View style={[styles.mainContainer, { ...mainContainer }]}>
      {isIconView && (
        <View style={styles.iconViewStyle}>
          <Image
            source={icon}
            style={[styles.iconStyel, { ...iconStyle }]}
            resizeMode="contain"
          />
        </View>
      )}
      <View style={styles.inputViewStyle}>
        <TextInput
          style={[styles.input, { ...inputStyle }]}
          value={value}
          placeholder={placeholder}
          autoCapitalize="none"
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          onFocus={onFocus}
          onBlur={onBlur}
          keyboardType={keyboardType}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={editable}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    shadowColor: colors.shadowColor,
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: colors.primaryWhite,
    borderWidth: 0.5,
    borderColor: colors.tabColor,
  },
  input: {
    marginStart: 20,
    lineHeight: 18,
    color: colors.primaryBlack,
  },
  buttonTextStyle: {},
  visibleViewStyle: {
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "gray",
    margin: 10,
    padding: 10,
  },
  visibleTextStyle: {
    width: "85%",
    alignSelf: "center",
  },
  iconStyel: {
    height: 24,
    width: 18,
  },
  iconViewStyle: {
    backgroundColor: colors.primary,
    padding: 15,
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
  },
  inputViewStyle: {
    flex: 1,
  },
});

export default InputText;
