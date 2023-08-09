import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Header, CardView } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { countOfAll, directorData } from "../../helper/dummyData";
import { colors } from "../../utils";
import Menu from "../../components/common/Menu";
import { fetchTotalDirectorMember } from "../../actions/directoryActions";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Width } from "../../utils/responsive";
import Loader from "../../components/common/Loader";

const DirectorScreen = () => {
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const memberDirector = useSelector((state) => state?.totalDirectorMember);

  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    try {
      dispatch(fetchHeadlines());
      dispatch(fetchTotalDirectorMember());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, []);
  const renderItem = ({ item }) => {
    return (
      <CardView
        title={item?.village}
        familyCount={item?.kutumb}
        memberCount={item?.member}
        onPress={() => navigation.navigate("DirectorFamily", { data: item })}
        isLoading={isLoading}
      />
    );
  };

  const renderCountedItem = ({ item }) => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: Width(393),
          }}>
          <View style={style.view}>
            <Text style={style.countText}>{item?.kutumb}</Text>
            <Text style={[style.countText, { color: "black" }]}>કુટુંબ</Text>
          </View>
          <View style={style.view}>
            <Text style={style.countText}>{item?.member}</Text>
            <Text style={[style.countText, { color: "black" }]}>સભ્ય</Text>
          </View>
          <View style={style.view}>
            <Text style={style.countText}>{item?.male}</Text>
            <Text style={[style.countText, { color: "black" }]}>પુરુષ</Text>
          </View>
          <View style={style.view}>
            <Text style={style.countText}>{item?.FeMale}</Text>
            <Text style={[style.countText, { color: "black" }]}>સ્ત્રી </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: Width(393),
          }}>
          <View style={style.view}>
            <Text style={style.countText}>{item?.unMarrage}</Text>
            <Text style={[style.countText, { color: "black" }]}>અપરણિત </Text>
          </View>
          <View style={style.view}>
            <Text style={style.countText}>{item?.UnMarrageMale}</Text>
            <Text style={[style.countText, { color: "black" }]}>
              પુરુષ અપરણિત
            </Text>
          </View>
          <View style={style.view}>
            <Text style={style.countText}>{item?.Marrage}</Text>
            <Text style={[style.countText, { color: "black" }]}>પરણિત</Text>
          </View>
          <View style={style.view}>
            <Text style={style.countText}>{item?.unMarrageMale}</Text>
            <Text style={[style.countText, { color: "black" }]}>
              સ્ત્રી અપરણિત
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={style.mainContainer}>
        <Header
          title={"સભ્ય ડિરેક્ટર"}
          isBack={true}
          isRight={true}
          isFiler={true}
          onRightPress={() => setShowDonationSuccessPopup(true)}
          headline={
            headlineData && headlineData[0] && headlineData[0]?.headline
          }
        />

        <View style={style.subContainer}>
          <FlatList
            scrollEnabled={false}
            data={[memberDirector?.totalMemberDirector?.data]}
            renderItem={renderCountedItem}
            numColumns={4}
          />
        </View>

        <View style={style.bodyContainer}>
          <FlatList
            data={memberDirector?.totalMemberDirector?.data?.villageCount}
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
  view: {
    flex: 1,
    padding: 5,
    alignItems: "center",
  },
});

export default DirectorScreen;
