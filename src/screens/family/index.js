import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Header } from "../../components";
import FamilyCard from "../../components/family/FamilyCard";
import { myFamily } from "../../helper/dummyData";
import { colors } from "../../utils";
import { Height, Width } from "../../utils/responsive";
import { useNavigation } from "@react-navigation/native";
import Menu from "../../components/common/Menu";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";

const FamilyScreen = () => {
  const navigation = useNavigation();
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const dispatch = useDispatch();
  const headlineData = useSelector((state) => state.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View>
        <FamilyCard
          code={item.member}
          name={item.name}
          phone={item.mobile}
          onPress={() => navigation.navigate("EditMember")}
        />
      </View>
    );
  };
  return (
    <View style={style.container}>
      <Header
        title={"મારુ પરિવાર "}
        isBack={true}
        isRight={true}
        isFiler={true}
        onRightPress={() => setShowDonationSuccessPopup(true)}
        headline={headlineData?.headlineData?.msg}
      />
      <View>
        <FlatList
          data={myFamily}
          renderItem={renderItem}
        />
      </View>
      <Button
        title={"સાચવો"}
        buttonStyle={style.buttonStyle}
        buttonTextStyle={{ color: colors.primaryWhite }}
        onPress={() => navigation.navigate("AddMember")}
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

export default FamilyScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: "center",
    width: Width(360),
    marginTop: Height(100),
  },
});
