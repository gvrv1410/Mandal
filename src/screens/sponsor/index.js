import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ComityCardView, Divider, Header } from "../../components";
import Menu from "../../components/common/Menu";
import { comityMemberData } from "../../helper/dummyData";

const SponsorScreen = () => {
  const navigation = useNavigation();
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const renderItem = ({ item, index }) => {
    return (
      <View style={style.cardViewStyle}>
        <ComityCardView
          data={item}
          onImagePress={() =>
            navigation.navigate("SponsorProfile", { data: item })
          }
        />
      </View>
    );
  };
  return (
    <View>
      <Header
        title={"પ્રયોજક"}
        isBack={true}
        isRight={true}
        isFiler={true}
        onRightPress={() => setShowDonationSuccessPopup(true)}
      />
      <FlatList
        data={comityMemberData}
        nestedScrollEnabled={false}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item, index }) => {
          return (
            <>
              <Divider
                title={item.title}
                mainContainer={{ marginTop: 20 }}
              />
              <FlatList
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
                data={item.members}
                renderItem={renderItem}
                contentContainerStyle={{ justifyContent: "space-between" }}
                numColumns={2}
              />
            </>
          );
        }}
      />
      <Menu
        displayTitle={"Custom Alert"}
        visibility={showDonationSuccessPopup}
        dismissAlert={setShowDonationSuccessPopup}
        onPress={() => setShowDonationSuccessPopup(false)}
      />
    </View>
  );
};

export default SponsorScreen;
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  cardViewStyle: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});
