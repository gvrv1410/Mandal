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
        headline={headData}
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
