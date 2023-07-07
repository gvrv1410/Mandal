import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Header } from "../../components";
import { useRoute } from "@react-navigation/native";
import imageConstant from "../../helper/imageConstant";
import { Height, Width } from "../../utils/responsive";
import { colors } from "../../utils";
import DetailCard from "../../components/common/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";

const DirectorDetailScreen = () => {
  const route = useRoute();
  const data = route?.params?.data;

  const dispatch = useDispatch();
  const headlineData = useSelector((state) => state.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);

  const renderItem = ({ item }) => {
    return <DetailCard DetailData={item} />;
  };
  return (
    <View style={style.mainContainer}>
      <Header
        title={data?.member_id}
        isBack={true}
        headline={headlineData?.headlineData?.msg}
      />
      <Image
        source={imageConstant.profile}
        style={style.imageStyle}
        resizeMode="contain"
      />
      <Text style={style.text}>
        {data?.member_name + " " + data?.middle_name + " " + data?.last_name}
      </Text>

      <FlatList
        data={[data]}
        renderItem={renderItem}
        style={style.flatlist}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
};

export default DirectorDetailScreen;

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
