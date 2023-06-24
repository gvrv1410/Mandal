import React from "react";
import { Text, View } from "react-native";
import { Header } from "../../components";

const NewsScreen = () => {
  return (
    <View>
      <Header title={"ન્યૂઝ"} isBack={true} isRight={true} isFiler={true} />
    </View>
  );
};

export default NewsScreen;
