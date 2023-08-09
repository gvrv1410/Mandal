import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Header } from "../../components";
import { useRoute } from "@react-navigation/native";
import imageConstant from "../../helper/imageConstant";
import { Height, Width } from "../../utils/responsive";
import { colors } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { detailsData } from "../../helper/dummyData";
import MemberCard from "../../components/common/MemberCard";
const MemberProfiles = () => {
  const route = useRoute();
  const data = route?.params?.data;

  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);

  return (
    <View style={style.mainContainer}>
      <Header
        title={"123435"}
        isBack={true}
        headline={headlineData && headlineData[0] && headlineData[0]?.headline}
      />
      <Image
        source={imageConstant.profile}
        style={style.imageStyle}
        resizeMode="contain"
      />
      <Text style={style.text}>ગોયાણી અવી દીલીપભાઈ</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MemberCard DetailData={detailsData} />
      </ScrollView>
    </View>
  );
};

export default MemberProfiles;

const style = StyleSheet.create({
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "400",
    marginTop: 10,
  },
  mainView: {
    flexDirection: "row",
    marginTop: Height(30),
  },
  flatlist: {
    height: Height(780),
    backgroundColor: colors.primaryWhite,
    marginHorizontal: Width(20),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
});
