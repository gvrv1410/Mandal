import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header } from "../../components";
import NewsCard from "../../components/news/NewsCard";
import { Height, Width } from "../../utils/responsive";

const NewsDetailScreen = () => {
  return (
    <View>
      <Header
        title={"ન્યૂઝ"}
        isBack={true}
      />
      <NewsCard
        text={"હું થોડોક કાચ અને થોડોક અરીસા જેવો છું ! ..."}
        date={"૦૪ એપ્રિલ,૨૦૨૩ | ૧૦ : ૩૦ AM"}
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
