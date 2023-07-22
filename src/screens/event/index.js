import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Header } from "../../components";
import DonorSubCardView from "../../components/donor/DonorSubCardView";
import { Height } from "../../utils/responsive";

const EventScreen = () => {
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
  return (
    <View>
      <Header
        title={"ઇવેન્ટ - ગેલેરી"}
        isBack={true}
        headline={headData}
      />
      <DonorSubCardView
        isEvent={true}
        isDate={true}
        mainContainer={style.mainContainer}
        isEventOne={true}
        name="છવ્વીસમું વાર્ષિક સ્નેહ મિલન સંમેલન "
        onMorePress={() => navigation.navigate("EventImage")}
      />
    </View>
  );
};

export default EventScreen;

const style = StyleSheet.create({
  mainContainer: {
    paddingBottom: Height(20),
    paddingTop: Height(40),
  },
});
