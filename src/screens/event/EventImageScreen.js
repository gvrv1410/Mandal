import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Header } from "../../components";
import { eventImage } from "../../helper/dummyData";
import { Height, Width } from "../../utils/responsive";
import { useNavigation } from "@react-navigation/native";

const EventImageScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EventImageView", { data: item }),
            console.log("Hello");
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
