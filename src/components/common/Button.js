import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colors } from "../../utils";

const Button = ({
  title,
  loading,
  buttonStyle,
  buttonTextStyle,
  onPress,
  icon,
  iconStyle,
  isLoading,
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.buttonStyle, { ...buttonStyle }]}>
      {loading ? (
        <ActivityIndicator
          size={hp(2)}
          color={colors.primaryBlack}
        />
      ) : (
        <View style={styles.buttonViewStyle}>
          {icon && (
            <Image
              style={[styles.iconStyle, { ...iconStyle }]}
              source={icon}
              resizeMode="contain"
            />
          )}
          {isLoading ? (
            <ActivityIndicator
              size={"small"}
              color={colors.primaryWhite}
            />
          ) : (
            <Text style={[styles.buttonTextStyle, { ...buttonTextStyle }]}>
              {title}
            </Text>
          )}
        </View>
      )}
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primaryWhite,
    width: "100%",
  },
  buttonTextStyle: {
    alignSelf: "center",
    textAlign: "center",
  },
  iconStyle: { height: 30, width: 30 },
  buttonViewStyle: {
    flexDirection: "row",
  },
});

export default Button;
