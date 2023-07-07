import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Header } from "../../components";
import { colors } from "../../utils";
import { useRoute } from "@react-navigation/native";
import { Height, Width } from "../../utils/responsive";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";

const AdsDetailScreen = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const headlineData = useSelector((state) => state.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);
  return (
    <View style={style.mainContainer}>
      <Header
        title={"જાહેરાત"}
        isBack={true}
        headline={headlineData?.headlineData?.msg}
      />
      <Text style={style.text}>{route.params?.data.date}</Text>
      <Image
        source={route.params?.data.ads}
        style={style.img}
        resizeMode="contain"
      />
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
});
