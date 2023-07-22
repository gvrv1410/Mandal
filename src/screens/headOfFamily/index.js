import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { fetchHeadFamily } from "../../actions/headOfFamilyActions";
import { Header } from "../../components";
import HeadCard from "../../components/headoffamily/HeadCard";
import { apiConst } from "../../helper/apiConstant";
import { headData } from "../../helper/dummyData";
import { Height } from "../../utils/responsive";

const HeadOfFamilyScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const [headData, setHeadDate] = useState();
  const data = useSelector(
    (state) => state?.headOfFamilys?.headFamily?.motivationData
  );
  console.log({ data });
  useEffect(() => {
    dispatch(fetchHeadlines());
    dispatch(fetchHeadFamily());
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
      <HeadCard
        isRowText={true}
        image={apiConst.getAnyImages + item.photo}
        text={item.notes}
        name={item.motivation_By}
        date={formattedDateTime}
        mainContainer={style.mainContainer}
        onPress={() =>
          navigation.navigate("HeadFamilyDetail", {
            data: item,
            fData: formattedDateTime,
          })
        }
      />
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={"વડીલો ના શબ્દો"}
        isBack={true}
        headline={headData}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HeadOfFamilyScreen;
const style = StyleSheet.create({
  mainContainer: {
    marginTop: Height(30),
    paddingTop: Height(23),
    paddingBottom: Height(5),
  },
});
