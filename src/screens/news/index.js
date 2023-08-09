import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { fetchNews } from "../../actions/newsActions";
import { Header } from "../../components";
import Loader from "../../components/common/Loader";
import Menu from "../../components/common/Menu";
import NewsCard from "../../components/news/NewsCard";
import { apiConst } from "../../helper/apiConstant";
import { colors } from "../../utils";
import { Height, Width } from "../../utils/responsive";

const NewsScreen = () => {
  const navigation = useNavigation();
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const [isLoading, setIsLoading] = useState(false);

  const newsData = useSelector((state) => state?.news?.news?.newsData);
  useEffect(() => {
    setIsLoading(true);
    try {
      dispatch(fetchHeadlines());
      dispatch(fetchNews());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, []);
  const renderItem = ({ item }) => {
    const isoDate = item?.created_date;
    const getMonthName = (monthNum) => {
      const months = [
        "જાન્યુઆરી",
        "ફેબ્રુઆરી",
        "માર્ચ",
        "એપ્રિલ",
        "મે",
        "જૂન",
        "જુલાઈ",
        "ઑગસ્ટ",
        "સપ્ટેમ્બર",
        "ઑક્ટોબર",
        "નવેમ્બર",
        "ડિસેમ્બર",
      ];
      return months[monthNum];
    };

    const formatTime = (date) => {
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
    };

    const dateObj = new Date(isoDate);

    const day = dateObj.getDate();
    const month = getMonthName(dateObj.getMonth());
    const year = dateObj.getFullYear();

    const formattedTime = formatTime(dateObj);

    const formattedDateTime = `${day} ${month}, ${year} | ${formattedTime}`;
    return (
      <View>
        <NewsCard
          image={apiConst.getAnyImages + item.photo}
          text={item.title}
          date={formattedDateTime}
          subText={item.news}
          mainContainer={style.mainContainer}
          onPress={() =>
            navigation.navigate("NewsDetails", {
              data: item,
              nDate: formattedDateTime,
            })
          }
        />
      </View>
    );
  };
  return (
    <>
      <View style={{ flex: 1 }}>
        <Header
          title={"ન્યૂઝ"}
          isBack={true}
          isRight={true}
          isFiler={true}
          onRightPress={() => setShowDonationSuccessPopup(true)}
          headline={
            headlineData && headlineData[0] && headlineData[0]?.headline
          }
        />

        <FlatList
          data={newsData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
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

export default NewsScreen;
const style = StyleSheet.create({
  mainContainer: {
    paddingTop: Height(10),
    paddingBottom: Height(40),
    borderRadius: Width(5),
    marginVertical: Height(20),
  },
});
