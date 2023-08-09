import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Header } from "../../components";
import Menu from "../../components/common/Menu";
import SubCardView from "../../components/common/SubCardView";
import { marriageData } from "../../helper/dummyData";
import { colors } from "../../utils";
import { Height } from "../../utils/responsive";

const MarriageScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const headlineData = useSelector(
    (state) => state?.fetchHeadlines?.headlineData
  );
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={"લગ્ન વિષયક"}
        isBack={true}
        isRight={true}
        isFiler={true}
        headline={headlineData && headlineData[0] && headlineData[0]?.headline}
        onRightPress={() => setShowDonationSuccessPopup(true)}
      />

      <ScrollView
        style={{ flex: 1, marginVertical: 16 }}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={marriageData}
          contentContainerStyle={{ flex: 1 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("MarriageBio", { data: item })
                }>
                <SubCardView
                  name={item.name}
                  village={item.village}
                  city={item.city}
                  dob={item.dob}
                  address={item.address}
                  isDob={true}
                  height={Height(200)}
                  image={item.image}
                />
              </TouchableOpacity>
            );
          }}
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
      </ScrollView>
      <Menu
        displayTitle={"Custom Alert"}
        visibility={showDonationSuccessPopup}
        dismissAlert={setShowDonationSuccessPopup}
        onPress={() => setShowDonationSuccessPopup(false)}
        onDismiss={() => setShowDonationSuccessPopup(false)}
      />
    </View>
  );
};

export default MarriageScreen;
