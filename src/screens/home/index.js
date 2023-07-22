import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  StatusBar,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { DrawerActions } from "@react-navigation/native";
import { Header } from "../../components";
import { colors } from "../../utils";
import { gridMenuData } from "../../helper/dummyData";
import { Menu } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHeadlineImg,
  fetchHeadlines,
} from "../../actions/headlinesActions";
import { apiConst, BASE_URL, IMG_DIRECTORY } from "../../helper/apiConstant";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(0);

  const { headlineData, headlineImg } = useSelector(
    (state) => state?.fetchHeadlines
  );
  const [headData, setHeadDate] = useState();

  useEffect(() => {
    dispatch(fetchHeadlines());
    dispatch(fetchHeadlineImg());
    if (headlineData && headlineData[0] && headlineData[0].headline) {
      const headline = headlineData[0].headline;
      setHeadDate(headline);
    } else {
      console.log(
        "headlineData is null or the headline property is not available."
      );
    }
  }, []);

  const renderCarouselItem = ({ item, index }) => {
    return (
      <Image
        key={index}
        source={{ uri: apiConst.getAnyImages + item.slider_photo }}
        style={style.carouselImageStyle}
        resizeMode="contain"
      />
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View
        key={item.toString()}
        style={style.gridViewStyle}>
        <Menu
          title={item?.title}
          icon={item?.icon}
          onPress={() => navigation.navigate(item.navigation)}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={style.mainContainer}>
      <Header
        title={"HOME"}
        isBack={false}
        onLeftPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        isRight
        headline={headData}
        onRightPress={() => navigation.navigate("Notification")}
      />
      <View style={style.subContainer}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 25 }}
          showsVerticalScrollIndicator={false}>
          <View style={style.carouselView}>
            <Carousel
              data={headlineImg}
              renderItem={renderCarouselItem}
              sliderWidth={361}
              itemWidth={361}
              onSnapToItem={(index) => setActiveIndex(index)}
              autoplay
            />
            <Pagination
              dotsLength={headlineImg?.length}
              activeDotIndex={activeIndex}
              dotStyle={style.carouselDotStyle}
              inactiveDotStyle={{
                backgroundColor: colors.liteGray,
              }}
              inactiveDotOpacity={0.5}
              inactiveDotScale={0.8}
            />
          </View>
          <FlatList
            data={gridMenuData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
            numColumns={4}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  subContainer: {
    flex: 1,
  },
  carouselView: {
    marginHorizontal: 16,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  carouselDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: colors.primary,
  },
  carouselImageStyle: {
    height: 200,
    width: 361,
    resizeMode: "contain",
  },
  gridViewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeScreen;
