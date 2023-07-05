import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components";
import { Height, Width } from "../../utils/responsive";

const EventImageViewScreen = () => {
  const route = useRoute();
  console.log({ route });
  return (
    <View>
      <Header
        title={"ઇવેન્ટ - ગેલેરી"}
        isBack={true}
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
