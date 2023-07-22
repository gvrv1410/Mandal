import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Button, Header } from "../../components";
import { Height, Width } from "../../utils/responsive";
import { colors } from "../../utils";
import { profileData } from "../../helper/dummyData";
import imageConstant from "../../helper/imageConstant";
import DropShadow from "react-native-drop-shadow";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";

const UserProfileScreen = () => {
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const [headData, setHeadDate] = useState();
  useEffect(() => {
    dispatch(fetchHeadlines());
    if (headlineData && headlineData[0] && headlineData[0].headline) {
      const headline = headlineData[0].headline;
      setHeadDate(headline);
    } else {
      console.log(
        "headlineData is null or the headline property is not available."
      );
    }
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View style={style.mainView}>
        <Text>{item.name}</Text>
        <Text>{item.subName}</Text>
      </View>
    );
  };

  return (
    <View style={style.mainContainer}>
      <Header
        title={"પ્રોફાઇલ"}
        isBack={true}
        headline={headData}
      />
      <Image
        source={imageConstant.profile}
        style={style.imageStyle}
        resizeMode="contain"
      />
      <Text style={style.text}>ગોયાણી અવી દીલીપભાઈ</Text>
      <View style={style.subContainer}>
        <DropShadow style={style.shadow}>
          <FlatList
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{}}
            data={profileData}
            renderItem={renderItem}
            style={style.flatlist}
          />
        </DropShadow>
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
  },
  mainView: {
    flexDirection: "row",
    marginTop: Height(30),
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
    marginVertical: 16,
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
});
