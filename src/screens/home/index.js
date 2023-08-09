import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  StatusBar,
  Text,
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
import Loader from "../../components/common/Loader";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(0);

  const { headlineImg } = useSelector((state) => state?.fetchHeadlines);
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      dispatch(fetchHeadlines());
      dispatch(fetchHeadlineImg());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
    <View style={style.mainContainer}>
      <SafeAreaView style={{ backgroundColor: colors.primary }} />
      <SafeAreaView style={style.mainContainer}>
        <Header
          title={"HOME"}
          isBack={false}
          onLeftPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          isRight
          headline={
            headlineData && headlineData[0] && headlineData[0]?.headline
          }
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
            <View style={{ flex: 1 }}>
              <FlatList
                data={gridMenuData}
                contentContainerStyle={{ flex: 1 }}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
                numColumns={4}
                ListEmptyComponent={() => (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Text
                      style={{
                        color: colors.primary,
                        textAlign: "center",
                      }}>
                      Data Not Found
                    </Text>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      {isLoading && <Loader />}
    </View>
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
