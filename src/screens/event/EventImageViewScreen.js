import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components";
import { Height, Width } from "../../utils/responsive";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";

const EventImageViewScreen = () => {
  const route = useRoute();
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
    <View>
      <Header
        title={"ઇવેન્ટ - ગેલેરી"}
        isBack={true}
        headline={headData}
      />

      <Image
        source={route.params?.data.image}
        style={style.image}
      />
    </View>
  );
};

export default EventImageViewScreen;

const style = StyleSheet.create({
  image: {
    height: Height(250),
    width: Width(360),
    borderRadius: Width(5),
    alignSelf: "center",
    marginTop: Height(180),
  },
});
