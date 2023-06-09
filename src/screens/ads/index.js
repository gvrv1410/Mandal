import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DropShadow from "react-native-drop-shadow";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Header } from "../../components";
import Menu from "../../components/common/Menu";
import { ads } from "../../helper/dummyData";
import iconConstant from "../../helper/iconConstant";
import { colors } from "../../utils";
import { Height, Width } from "../../utils/responsive";

const AdsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const headlineData = useSelector((state) => state.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);

  return (
    <View style={style.mainContainer}>
      <Header
        title={"જાહેરાત"}
        isBack={true}
        isRight={true}
        isFiler={true}
        onRightPress={() => setShowDonationSuccessPopup(true)}
        headline={headlineData?.headlineData?.msg}
      />
      <View style={style.mainContainer}>
        <FlatList
          data={ads}
          renderItem={({ item }) => {
            return (
              <View style={style.flatView}>
                <Text style={style.dateText}>{item.date}</Text>
                <DropShadow style={style.shadow}>
                  <View style={style.view}>
                    <Image
                      source={item.ads}
                      style={style.image}
                      resizeMode="contain"
                    />
                    <View style={style.rowView}>
                      <Text style={style.text}>વધુ</Text>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("AdsDetails", {
                            data: item,
                            img: iconConstant.ic_forward,
                          })
                        }>
                        <Image
                          source={iconConstant.ic_forward}
                          style={style.icon}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </DropShadow>
              </View>
            );
          }}
        />
      </View>
      <Menu
        displayTitle={"Custom Alert"}
        visibility={showDonationSuccessPopup}
        dismissAlert={setShowDonationSuccessPopup}
        onPress={() => setShowDonationSuccessPopup(false)}
      />
    </View>
  );
};

export default AdsScreen;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  shadow: {
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  view: {
    height: Height(250),
    width: Width(360),
    backgroundColor: colors.primaryWhite,
    alignSelf: "center",
    borderRadius: Width(5),
    marginTop: Height(10),
  },
  flatView: {
    marginHorizontal: Width(20),
  },
  dateText: {
    fontSize: Height(10),
    color: colors.gray,
    textAlign: "right",
    marginTop: Height(30),
  },
  image: {
    width: Width(360),
    height: Height(200),
    borderRadius: Width(5),
  },
  icon: {
    height: Height(13),
    width: Width(10),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Height(10),
    justifyContent: "space-between",
    marginHorizontal: Width(20),
  },
  text: {
    fontSize: Height(15),
    color: colors.primary,
    fontWeight: "500",
  },
});
