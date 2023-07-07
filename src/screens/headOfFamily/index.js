import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Header } from "../../components";
import HeadCard from "../../components/headoffamily/HeadCard";
import { headData } from "../../helper/dummyData";
import { Height } from "../../utils/responsive";

const HeadOfFamilyScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const headlineData = useSelector((state) => state.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);
  const renderItem = ({ item }) => {
    return (
      <HeadCard
        isRowText={true}
        image={item.image}
        text={item.text}
        name={item.name}
        date={item.date}
        mainContainer={style.mainContainer}
        onPress={() => navigation.navigate("HeadFamilyDetail", { data: item })}
      />
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={"વડીલો ના શબ્દો"}
        isBack={true}
        headline={headlineData?.headlineData?.msg}
      />
      <FlatList
        data={headData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HeadOfFamilyScreen;
const style = StyleSheet.create({
  mainContainer: {
    marginTop: Height(30),
    paddingTop: Height(23),
    paddingBottom: Height(5),
  },
});
