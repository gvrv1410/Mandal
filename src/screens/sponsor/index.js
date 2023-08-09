import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { fetchSponsor } from "../../actions/sponsorActions";
import { Header } from "../../components";
import Loader from "../../components/common/Loader";
import Menu from "../../components/common/Menu";
import SponsorCardView from "../../components/sponsor/SponsorCardView";

const SponsorScreen = () => {
  const navigation = useNavigation();
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const sData = useSelector((state) => state?.sponsors?.sponsors?.prayojakData);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    try {
      dispatch(fetchHeadlines());
      dispatch(fetchSponsor());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, []);
  const renderItem = ({ item, index }) => {
    return (
      <View style={style.cardViewStyle}>
        <SponsorCardView
          data={item}
          onImagePress={() =>
            navigation.navigate("SponsorProfile", { data: item })
          }
        />
      </View>
    );
  };
  return (
    <>
      <View style={{ flex: 1 }}>
        <Header
          title={"પ્રયોજક"}
          isBack={true}
          isRight={true}
          isFiler={true}
          onRightPress={() => setShowDonationSuccessPopup(true)}
          headline={
            headlineData && headlineData[0] && headlineData[0]?.headline
          }
        />
        <FlatList
          data={sData}
          nestedScrollEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          renderItem={({ item }) => {
            return (
              <>
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
          onDismiss={() => setShowDonationSuccessPopup(false)}
        />
      </View>
      {isLoading && <Loader />}
    </>
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
