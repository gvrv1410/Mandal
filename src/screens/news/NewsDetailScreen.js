import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import NewsCard from "../../components/news/NewsCard";
import { Height, Width } from "../../utils/responsive";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { useRoute } from "@react-navigation/native";
import { apiConst } from "../../helper/apiConstant";

const NewsDetailScreen = () => {
  const route = useRoute();
  const nData = route?.params?.data;
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={"ન્યૂઝ"}
        isBack={true}
        headline={headlineData && headlineData[0] && headlineData[0]?.headline}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <NewsCard
          image={apiConst.getAnyImages + nData?.photo}
          text={nData?.title}
          date={route?.params?.nDate}
          subText={nData?.news}
          mainContainer={style.mainContainer}
        />
      </ScrollView>
    </View>
  );
};

export default NewsDetailScreen;

const style = StyleSheet.create({
  mainContainer: {
    paddingVertical: Height(10),
    paddingBottom: Height(40),
    borderRadius: Width(5),
    marginVertical: Height(20),
  },
});
