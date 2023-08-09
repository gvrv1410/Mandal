import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import { eventImage } from "../../helper/dummyData";
import { Height, Width } from "../../utils/responsive";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";

const EventImageScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EventImageView", { data: item });
        }}>
        <Image
          source={item.image}
          style={style.image}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Header
        title={"છવ્વીસમું વાર્ષિક સ્નેહ મિલન સંમેલન"}
        isBack={true}
        headline={headlineData && headlineData[0] && headlineData[0]?.headline}
      />
      <FlatList
        data={eventImage}
        renderItem={renderItem}
      />
    </View>
  );
};

export default EventImageScreen;

const style = StyleSheet.create({
  image: {
    height: Height(200),
    width: Width(360),
    alignSelf: "center",
    borderRadius: Width(5),
    marginTop: Height(30),
  },
});
