import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Header, CardView } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { countOfAll, directorData } from "../../helper/dummyData";
import { colors } from "../../utils";
import Menu from "../../components/common/Menu";

const DirectorScreen = () => {
  const { goBack } = useNavigation();
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <CardView
        title={item?.title}
        onPress={() => navigation.navigate("DirectorFamily", { data: item })}
      />
    );
  };

  const renderCountedItem = ({ item }) => {
    return (
      <View style={{ flex: 1, padding: 5, alignItems: "center" }}>
        <Text style={style.countText}>{item?.count}</Text>
        <Text style={[style.countText, { color: "black" }]}>{item?.title}</Text>
      </View>
    );
  };

  return (
    <View style={style.mainContainer}>
      <Header
        title={"સભ્ય ડિરેક્ટર"}
        isBack={true}
        isRight={true}
        isFiler={true}
        onRightPress={() => setShowDonationSuccessPopup(true)}
      />

      <View style={style.subContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          data={countOfAll}
          renderItem={renderCountedItem}
          numColumns={4}
        />
      </View>

      <View style={style.bodyContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={directorData}
          renderItem={renderItem}
          numColumns={2}
          bounces={false}
          showsVerticalScrollIndicator={false}
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

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    backgroundColor: "rgba(33, 68, 90, 0.1)",
    paddingVertical: 15,
  },
  bodyContainer: {
    flex: 3,
    bottom: 60,
  },
  countText: {
    fontSize: 15,
    color: colors.primary,
  },
});

export default DirectorScreen;
