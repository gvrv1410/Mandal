import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Header } from "../../components";
import HeadCard from "../../components/headoffamily/HeadCard";
import imageConstant from "../../helper/imageConstant";
import { Height, Width } from "../../utils/responsive";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";

const HeadFamilyDetailScreen = () => {
  const dispatch = useDispatch();
  const headlineData = useSelector((state) => state.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);
  return (
    <View style={style.container}>
      <Header
        title={"વડીલો ના શબ્દો"}
        isBack={true}
        headline={headlineData?.headlineData?.msg}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeadCard
          image={imageConstant.headImage}
          imageStyle={style.imageStyle}
          isText={true}
          text={
            "જઓ ÝવÝથતાપૂવŏક પડો, જ ે થી તેઓ આનંદ મેળવવા માટ ે ેકામ કરી શકેઅને દુ: ખ, કેટલાક મહાન. કારણ કે, જમ આપણે સૌથી નાના વÝતુઓ સાથે આવે છ ે ે, જેઅમે કેટલાક લાભ મેળવવા ￹સવાય, તે હંમેશા દુઃખદાયક શારીœરક òવૃિİ લે છેઆમાંથી; પરંતુ કોઈ ભૂલ શોધવાનો અિધકાર છે, જેએકનો આનંદ માણી શકેછેઆનંદ કેનકામી પœરણામ નથી, અથવા જેતે પીડા ટાળે છેકેતે નથી પœરણામી આનંદ પેદા કરેછે?જઓ ÝવÝથતાપૂવŏક પડો, જ ે થી તેઓ આનંદ મેળવવા માટ ે ેકામ કરી શકેઅને દુ: ખ, કેટલાક મહાન. કારણ કે, જમ આપણે સૌથી નાના વÝતુઓ સાથે આવે છ જઓ ÝવÝથતાપૂવŏક પડો, જ ે થી તેઓ આનંદ મેળવવા માટ ે ેકામ કરી શકેઅને દુ: ખ, કેટલાક મહાન. કારણ કે, જમ આપણે સૌથી નાના વÝતુઓ સાથે આવે છ ે ે, જેઅમે કેટલાક લાભ મેળવવા ￹સવાય, તે હંમેશા દુઃખદાયક શારીœરક òવૃિİ લે છેઆમાંથી; પરંતુ કોઈ ભૂલ શોધવાનો અિધકાર છે, જેએકનો આનંદ માણી શકેછેઆનંદ કેનકામી પœરણામ નથી, અથવા જેતે પીડા ટાળે છેકેતે નથી પœરણામી આનંદ પેદા કરેછે?"
          }
          textStyle={style.textStyle}
          name={"ગોયાણી અવી દીલીપભાઈ"}
          date={"૦૪ એપ્રિલ,૨૦૨૩ | ૧૦ : ૩૦ AM"}
          nameStyle={style.nameStyle}
          mainContainer={style.mainContainer}
        />
      </ScrollView>
    </View>
  );
};

export default HeadFamilyDetailScreen;

const style = StyleSheet.create({
  imageStyle: {
    height: Height(180),
    width: Width(340),
    borderRadius: Width(5),
  },
  textStyle: {
    width: Width(340),
    marginTop: Height(20),
  },
  nameStyle: {
    marginTop: Height(40),
  },
  mainContainer: {
    paddingVertical: Height(10),
    marginVertical: Height(20),
    borderRadius: Width(5),
  },
  container: {
    flex: 1,
  },
});
