import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import iconConstant from "../../helper/iconConstant";
import { Height, Width } from "../../utils/responsive";
import { apiConst } from "../../helper/apiConstant";

const SponsorProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log({ route });
  return (
    <SafeAreaView style={style.mainContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={iconConstant.ic_backP}
          style={style.backImage}
        />
      </TouchableOpacity>
      <Image
        source={{ uri: apiConst.getAnyImages + route?.params?.data?.photo }}
        style={style.image}
      />
    </SafeAreaView>
  );
};

export default SponsorProfileScreen;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backImage: {
    height: Height(20),
    width: Width(10),
    marginLeft: Width(20),
  },
  image: {
    height: Height(400),
    width: Width(360),
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: Height(105),
  },
});
