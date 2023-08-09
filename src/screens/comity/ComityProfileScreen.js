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
import { colors } from "../../utils";

const ComityProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <SafeAreaView style={style.mainContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={iconConstant.ic_backP}
          style={style.backImage}
        />
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {route?.params?.item?.mukhiya_profile_photo === null ? (
          <Text
            style={{
              color: colors.primaryBlack,
              textAlign: "center",
              justifyContent: "center",
            }}>
            profile Not Found
          </Text>
        ) : (
          <Image
            source={{
              uri:
                apiConst.getAnyImages +
                route?.params?.item?.mukhiya_profile_photo,
            }}
            style={style.image}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ComityProfileScreen;

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
  },
});
