import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Header, TextInput } from "../../components";
import { colors } from "../../utils";
import { useRoute } from "@react-navigation/native";
import { Height, Width } from "../../utils/responsive";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { apiConst } from "../../helper/apiConstant";

const AdsDetailScreen = () => {
  const route = useRoute();
  const data = route?.params?.data;
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
  return (
    <View style={style.mainContainer}>
      <Header
        title={"જાહેરાત"}
        isBack={true}
        headline={headData}
      />
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: Height(16),
          marginBottom: Height(20),
        }}>
        <Text style={style.text}>{route.params?.data.date}</Text>
        <Image
          source={{ uri: apiConst.getAnyImages + data.photo }}
          style={style.img}
          resizeMode="contain"
        />
        <Text style={style.text}>વ્યવસાયનું નામ</Text>
        <TextInput
          placeholder={data.business_name}
          inputStyle={style.inputStyle}
          mainContainer={style.iMainContainer}
          placeholderTextColor={colors.primaryBlack}
        />
        <Text style={style.text}>માલીકનું નામ</Text>
        <TextInput
          placeholder={data.owner_name}
          inputStyle={style.inputStyle}
          mainContainer={style.iMainContainer}
          placeholderTextColor={colors.primaryBlack}
        />
        <Text style={style.text}>શહેર</Text>
        <TextInput
          placeholder={data.city}
          inputStyle={style.inputStyle}
          mainContainer={style.iMainContainer}
          placeholderTextColor={colors.primaryBlack}
        />
        <Text style={style.text}>મોબાઈલ નમ્બર</Text>
        <TextInput
          placeholder={data.mobile_no}
          inputStyle={style.inputStyle}
          mainContainer={style.iMainContainer}
          placeholderTextColor={colors.primaryBlack}
        />
        <Text style={style.text}>ઈમેલ</Text>
        <TextInput
          placeholder={data.email}
          inputStyle={style.inputStyle}
          mainContainer={style.iMainContainer}
          placeholderTextColor={colors.primaryBlack}
        />
        <Text style={style.text}>વેબસાઈટ</Text>
        <TextInput
          placeholder={data.website}
          inputStyle={style.inputStyle}
          mainContainer={style.iMainContainer}
          placeholderTextColor={colors.primaryBlack}
        />
        <Text style={style.text}>વ્યવસાયનું સરનામું</Text>
        <TextInput
          placeholder={data.business_address}
          inputStyle={style.inputStyle}
          mainContainer={style.iMainContainer}
          placeholderTextColor={colors.primaryBlack}
          multiline={true}
        />
      </ScrollView>
    </View>
  );
};

export default AdsDetailScreen;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  img: {
    height: Height(200),
    width: Width(360),
    borderRadius: Width(5),
    alignSelf: "center",
  },
  text: {
    fontSize: Height(15),
    marginLeft: Width(15),
    marginTop: Height(20),
  },
  inputStyle: {
    marginVertical: Height(15),
    color: colors.primaryBlack,
    fontSize: Height(15),
  },
  iMainContainer: {
    marginTop: Height(10),
  },
});
