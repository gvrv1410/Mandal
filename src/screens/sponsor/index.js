import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { fetchSponsor } from "../../actions/sponsorActions";
import { ComityCardView, Divider, Header } from "../../components";
import Menu from "../../components/common/Menu";

const SponsorScreen = () => {
  const navigation = useNavigation();
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const [headData, setHeadDate] = useState();
  const sData = useSelector((state) => state?.sponsors?.sponsors?.prayojakData);
  useEffect(() => {
    dispatch(fetchHeadlines());
    dispatch(fetchSponsor());
    if (headlineData && headlineData[0] && headlineData[0].headline) {
      const headline = headlineData[0].headline;
      setHeadDate(headline);
    } else {
      console.log(
        "headlineData is null or the headline property is not available."
      );
    }
  }, []);
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
        headline={headData}
      />
      <FlatList
        data={sData}
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
                data={sData}
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
