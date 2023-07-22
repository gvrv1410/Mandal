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

const DirectorScreen = () => {
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const memberDirector = useSelector((state) => state?.totalDirectorMember);

  const headlineData = useSelector((state) => state?.fetchHeadlines);
  const [headData, setHeadDate] = useState();
  useEffect(() => {
    dispatch(fetchTotalDirectorMember());
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
      <CardView
        title={item?.village}
        familyCount={item?.kutumb}
        memberCount={item?.member}
        onPress={() => navigation.navigate("DirectorFamily", { data: item })}
      />
    );
  };

  const renderCountedItem = ({ item }) => {
    return (
      <View style={style.view}>
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
        headline={headData}
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
  view: {
    flex: 1,
    padding: 5,
    alignItems: "center",
  },
});

export default DirectorScreen;
