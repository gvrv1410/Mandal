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
import imageConstant from "../../helper/imageConstant";
import { apiConst } from "../../helper/apiConstant";
import { colors } from "../../utils";

const DirectorProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: colors.primary }} />
      <SafeAreaView style={style.mainContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.btn}>
          <Image
            source={iconConstant.ic_backP}
            style={style.backImage}
          />
        </TouchableOpacity>
        <Image
          // source={{ uri: apiConst.getAnyImages + route?.params?.data?.photo }}
          source={imageConstant.avtar}
          style={style.image}
        />
      </SafeAreaView>
    </View>
  );
};

export default DirectorProfileScreen;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backImage: {
    height: Height(20),
    width: Width(10),
    marginLeft: Width(20),
    marginTop: Height(10),
  },
  image: {
    height: Height(400),
    width: Width(360),
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: Height(105),
  },
});
