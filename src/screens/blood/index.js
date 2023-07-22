import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Header } from "../../components";
import { bloodData } from "../../helper/dummyData";
import { colors } from "../../utils";
import { Height, Width } from "../../utils/responsive";

const BloodScreen = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
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
  return (
    <View style={style.mainContainer}>
      <Header
        title={"સર્ચ બ્લડ"}
        isBack={true}
        headline={headData}
      />
      <Text style={style.text}>બ્લડ ટાઈપ</Text>
      <FlatList
        data={bloodData}
        numColumns={2}
        columnWrapperStyle={style.flatList}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[
                style.btn,
                {
                  backgroundColor:
                    activeIndex === item.id ? colors.redColor : "#E7EEF2",
                },
              ]}
              onPress={() => {
                setActiveIndex(item.id),
                  navigation.navigate("BloodDetail", { data: item });
              }}>
              <Text
                style={[
                  style.btnText,
                  {
                    color:
                      activeIndex === item.id
                        ? colors.primaryWhite
                        : colors.primaryBlack,
                  },
                ]}>
                {item.group}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default BloodScreen;
const style = StyleSheet.create({
  text: {
    fontSize: Height(20),
    color: colors.primary,
    textAlign: "center",
    paddingVertical: Height(10),
    marginTop: Height(20),
    backgroundColor: "#E7EEF2",
  },
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
  btn: {
    height: Height(70),
    width: Width(170),
    backgroundColor: "#F0F0F0",
    borderRadius: Width(10),
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    justifyContent: "space-between",
    paddingHorizontal: Width(20),
    paddingTop: Height(20),
  },
  btnText: {
    fontSize: Height(25),
  },
});
