import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import NewsCard from "../../components/news/NewsCard";
import { Height, Width } from "../../utils/responsive";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { useRoute } from "@react-navigation/native";
import { apiConst } from "../../helper/apiConstant";

const NewsDetailScreen = () => {
  const route = useRoute();
  const nData = route?.params?.data;
  const dispatch = useDispatch();
  const headlineData = useSelector((state) => state?.fetchHeadlines);
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
        title={"ન્યૂઝ"}
        isBack={true}
        headline={headData}
      />
      <NewsCard
        image={apiConst.getAnyImages + nData?.photo}
        text={nData?.news}
        date={route?.params?.nDate}
        subText={
          "જઓ ÝવÝથતાપૂવŏક પડો, જ ે થી તેઓ આનંદ મેળવવા માટ ે ેકામ કરી શકેઅને દુ: ખ, કેટલાક મહાન. કારણ કે, જમ આપણે સૌથી નાના વÝતુઓ સાથે આવે છ ે ે, જેઅમે કેટલાક લાભ મેળવવા ￹સવાય, તે હંમેશા દુઃખદાયક શારીœરક òવૃિİ લે છેઆમાંથી; પરંતુ કોઈ ભૂલ શોધવાનો અિધકાર છે, જેએકનો આનંદ માણી શકેછેઆનંદ કેનકામી પœરણામ નથી, અથવા જેતે પીડા ટાળે છેકેતે નથી પœરણામી આનંદ પેદા કરેછે? જઓ ÝવÝથતાપૂવŏક પડો, જ ે થી તેઓ આનંદ મેળવવા માટ ે ેકામ કરી શકેઅને દુ: ખ, કેટલાક મહાન. કારણ કે, જમ આપણે સૌથી નાના વÝતુઓ સાથે આવે છ  જઓ ÝવÝથતાપૂવŏક પડો, જ ે થી તેઓ આનંદ મેળવવા માટ ે ેકામ કરી શકેઅને દુ: ખ, કેટલાક મહાન. કારણ કે, જમ આપણે સૌથી નાના વÝતુઓ સાથે આવે છ ે ે, જેઅમે કેટલાક લાભ મેળવવા ￹સવાય, તે હંમેશા દુઃખદાયક શારીœરક òવૃિİ લે છેઆમાંથી; પરંતુ કોઈ ભૂલ શોધવાનો અિધકાર છે, જેએકનો આનંદ માણી શકેછેઆનંદ કેનકામી પœરણામ નથી, અથવા જેતે પીડા ટાળે છેકેતે નથી પœરણામી આનંદ પેદા કરેછે?"
        }
        mainContainer={style.mainContainer}
      />
    </View>
  );
};

export default NewsDetailScreen;

const style = StyleSheet.create({
  mainContainer: {
    paddingTop: Height(10),
    paddingBottom: Height(40),
    borderRadius: Width(5),
    marginTop: Height(20),
  },
});
