import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../utils";
import icon from "../../helper/iconConstant";
import { Headline } from "..";
import { useNavigation } from "@react-navigation/native";

const Header = ({
  title,
  onLeftPress,
  onRightPress,
  isBack,
  isFiler,
  isRight,
  headline
}) => {
  const { goBack } = useNavigation();
  return (
    <SafeAreaView>
      <Headline headline={headline} />
      <View style={style.mainContainer}>
        <TouchableOpacity
          style={style.leftViewStyle}
          onPress={() => {
            if (isBack) {
              goBack();
            } else {
              onLeftPress();
            }
          }}
        >
          <Image
            source={isBack ? icon.ic_back : icon.ic_menu}
            style={!isBack ? style.imageStyle : { height: 21, width: 9 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={style.middleViewStyle}>
          <Text style={style.titleTextStyle}>{title}</Text>
        </View>
        {isRight ? (
          <TouchableOpacity style={style.rightViewStyle} onPress={onRightPress}>
            <Image
              source={!isFiler ? icon.ic_bell : icon.ic_filter}
              style={{ height: 24, width: 20 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <View style={style.rightViewStyle} />
        )}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    height: 70,
    flexDirection: "row",
    backgroundColor: colors.primary,
  },
  leftViewStyle: {
    justifyContent: "center",
    paddingStart: 16,
  },
  rightViewStyle: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingEnd: 16,
  },
  middleViewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTextStyle: {
    color: colors.primaryWhite,
    fontSize: 22,
    fontWeight: "600",
  },
  imageStyle: {
    height: 14,
    width: 20,
  },
});

export default Header;
