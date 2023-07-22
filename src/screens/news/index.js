import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { fetchNews } from "../../actions/newsActions";
import { Header } from "../../components";
import Menu from "../../components/common/Menu";
import NewsCard from "../../components/news/NewsCard";
import { apiConst } from "../../helper/apiConstant";
import { Height, Width } from "../../utils/responsive";

const NewsScreen = () => {
  const navigation = useNavigation();
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const dispatch = useDispatch();
  const headlineData = useSelector((state) => state?.fetchHeadlines);
  const [headData, setHeadDate] = useState();
  const newsData = useSelector((state) => state?.news?.news?.newsData);
  useEffect(() => {
    dispatch(fetchHeadlines());
    dispatch(fetchNews());
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
          text={item.news}
          date={formattedDateTime}
          subText={item.desc}
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
    <View>
      <Header
        title={"ન્યૂઝ"}
        isBack={true}
        isRight={true}
        isFiler={true}
        onRightPress={() => setShowDonationSuccessPopup(true)}
        headline={headData}
      />

      <FlatList
        data={newsData}
        renderItem={renderItem}
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

export default NewsScreen;
const style = StyleSheet.create({
  mainContainer: {
    paddingTop: Height(10),
    paddingBottom: Height(40),
    borderRadius: Width(5),
    marginTop: Height(20),
  },
});
