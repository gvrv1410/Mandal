import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Header } from "../../components";
import Menu from "../../components/common/Menu";
import NewsCard from "../../components/news/NewsCard";
import { newsData } from "../../helper/dummyData";
import { Height, Width } from "../../utils/responsive";

const NewsScreen = () => {
  const navigation = useNavigation();
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const renderItem = ({ item }) => {
    return (
      <View>
        <NewsCard
          text={item.title}
          date={item.date}
          subText={item.desc}
          mainContainer={style.mainContainer}
          onPress={() => navigation.navigate("NewsDetails", { data: item })}
        />
      </View>
    );
  };
  return (
    <View>
      <Header
        title={"ન્યૂઝ"}
        isBack={true}
        isRight={true}
        isFiler={true}
        onRightPress={() => setShowDonationSuccessPopup(true)}
      />

      <FlatList
        data={newsData}
        renderItem={renderItem}
      />
      <Menu
        displayTitle={"Custom Alert"}
        visibility={showDonationSuccessPopup}
        dismissAlert={setShowDonationSuccessPopup}
        onPress={() => setShowDonationSuccessPopup(false)}
      />
    </View>
  );
};

export default NewsScreen;
const style = StyleSheet.create({
  mainContainer: {
    paddingTop: Height(10),
    paddingBottom: Height(40),
    borderRadius: Width(5),
    marginTop: Height(20),
  },
});
