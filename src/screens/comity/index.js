import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommity } from "../../actions/commityActions";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { ComityCardView, Divider, Header } from "../../components";
import Loader from "../../components/common/Loader";
import Menu from "../../components/common/Menu";
import { colors } from "../../utils";

const ComityScreen = () => {
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const cData = useSelector((state) => state?.commitee?.commity);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      dispatch(fetchHeadlines());
      dispatch(fetchCommity());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View style={style.cardViewStyle}>
        <ComityCardView
          data={item}
          onImagePress={() => navigation.navigate("ComityProfile", { item })}
        />
      </View>
    );
  };
  return (
    <>
      <View style={style.mainContainer}>
        <Header
          title={"કમિટી મેમ્બર"}
          isBack={true}
          isRight={true}
          isFiler={true}
          onRightPress={() => setShowDonationSuccessPopup(true)}
          headline={
            headlineData && headlineData[0] && headlineData[0]?.headline
          }
        />

        <FlatList
          data={cData}
          nestedScrollEnabled={false}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          renderItem={renderItem}
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
