import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Header } from "../../components";
import { Height, Width } from "../../utils/responsive";
import { colors } from "../../utils";
import { profileData } from "../../helper/dummyData";
import imageConstant from "../../helper/imageConstant";
import DropShadow from "react-native-drop-shadow";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import DetailCard from "../../components/common/DetailCard";
import { fetchMukhya } from "../../actions/mukhyaActions";

const UserProfileScreen = () => {
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);

  const mukhyaFetch = useSelector((state) => state?.mukhya?.mukhyaData?.data);
  useEffect(() => {
    dispatch(fetchHeadlines());
    dispatch(fetchMukhya());
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View style={style.mainView}>
        <Text style={style.subText}>{item.name}</Text>
        <Text style={style.subText}>{item.subName}</Text>
      </View>
    );
  };

  return (
    <View style={style.mainContainer}>
      <Header
        title={"પ્રોફાઇલ"}
        isBack={true}
        headline={headlineData && headlineData[0] && headlineData[0]?.headline}
      />
      <Image
        source={imageConstant.profile}
        style={style.imageStyle}
        resizeMode="contain"
      />
      <Text style={style.text}>ગોયાણી અવી દીલીપભાઈ</Text>
      <View style={style.subContainer}>
        <DetailCard DetailData={mukhyaFetch} />
      </View>
      <Button
        title={"ફેરફાર કરો"}
        buttonStyle={style.buttonStyle}
        buttonTextStyle={style.buttonTextStyle}
      />
    </View>
  );
};

export default UserProfileScreen;

const style = StyleSheet.create({
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "400",
    marginTop: 10,
    color: colors.primary,
  },
  mainView: {
    flexDirection: "row",
  },
  flatlist: {
    // height: Height(780),
    backgroundColor: colors.primaryWhite,
    marginHorizontal: Width(20),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  subContainer: {
    flex: 1,
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
  buttonStyle: {
    backgroundColor: colors.primary,
    height: Height(50),
    width: Width(360),
    alignSelf: "center",
    marginVertical: Height(30),
    borderRadius: Width(5),
  },
  buttonTextStyle: {
    color: colors.primaryWhite,
    fontSize: Height(16),
    fontWeight: "400",
  },
  subText: {
    color: colors.primary,
  },
});
