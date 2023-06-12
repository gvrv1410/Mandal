import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { DrawerActions } from "@react-navigation/native";

import { Header } from "../../components";
import { colors } from "../../utils";
import { carouselData, gridMenuData } from "../../helper/dummyData";
import { Menu, Headline } from "../../components";

const HomeScreen = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderCarouselItem = ({ item, index }) => (
    <Image
      key={index}
      source={item.image}
      style={style.carouselImageStyle}
      resizeMode="contain"
    />
  );

  const renderItem = ({ item }) => {
    return (
      <View key={item.toString()} style={style.gridViewStyle}>
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
      />
      <View style={style.subContainer}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 25 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={style.carouselView}>
            <Carousel
              data={carouselData}
              renderItem={renderCarouselItem}
              sliderWidth={361}
              itemWidth={361}
              onSnapToItem={(index) => setActiveIndex(index)}
              autoplay
            />
            <Pagination
              dotsLength={carouselData?.length}
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
            keyExtractor={(item) => item.toString()}
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
  },
  gridViewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeScreen;
