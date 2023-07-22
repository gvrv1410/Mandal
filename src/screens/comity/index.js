import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { ComityCardView, Divider, Header } from "../../components";
import Menu from "../../components/common/Menu";
import { comityMemberData } from "../../helper/dummyData";

const ComityScreen = () => {
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const navigation = useNavigation();
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
  const renderItem = ({ item }) => {
    return (
      <View style={style.cardViewStyle}>
        <ComityCardView
          data={item}
          onImagePress={() => navigation.navigate("ComityProfile")}
        />
      </View>
    );
  };
  return (
    <View style={style.mainContainer}>
      <Header
        title={"કમિટી મેમ્બર"}
        isBack={true}
        isRight={true}
        isFiler={true}
        onRightPress={() => setShowDonationSuccessPopup(true)}
        headline={headData}
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

export default ComityScreen;
