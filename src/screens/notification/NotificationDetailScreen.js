import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import { colors } from "../../utils";
import imageConstant from "../../helper/imageConstant";
import { Height, Width } from "../../utils/responsive";
import DropShadow from "react-native-drop-shadow";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { useRoute } from "@react-navigation/native";
import { apiConst } from "../../helper/apiConstant";

const NotificationDetailScreen = () => {
  const route = useRoute();
  const nData = route?.params?.data;
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);
  return (
    <View style={style.mainContainer}>
      <Header
        title={"સૂચનાઓ"}
        isBack={true}
        headline={headlineData && headlineData[0] && headlineData[0]?.headline}
      />
      <DropShadow style={style.shadow}>
        <View style={style.view}>
          <View style={style.subView}>
            <Image
              source={{ uri: apiConst.getAnyImages + nData.photo }}
              style={style.image}
              resizeMode="contain"
            />
            <Text style={style.text}>{nData.notes}</Text>
          </View>
          <Text style={style.subText}>{route?.params?.cDate}</Text>
        </View>
      </DropShadow>
    </View>
  );
};

export default NotificationDetailScreen;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  image: {
    height: Height(180),
    width: Width(340),
    borderRadius: Width(5),
    alignSelf: "center",
  },
  subView: {},
  view: {
    backgroundColor: colors.primaryWhite,
    marginHorizontal: Width(16),
    paddingHorizontal: Width(15),
    paddingVertical: Height(15),
    marginTop: Height(30),
  },
  shadow: {
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    fontSize: Height(15),
    textAlign: "left",
    color: colors.gray,
    marginTop: Height(20),
  },
  subText: {
    fontSize: Height(10),
    textAlign: "right",
    color: colors.gray,
    marginTop: Height(35),
  },
});
