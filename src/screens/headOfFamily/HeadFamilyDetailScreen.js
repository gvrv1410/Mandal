import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Header } from "../../components";
import HeadCard from "../../components/headoffamily/HeadCard";
import imageConstant from "../../helper/imageConstant";
import { Height, Width } from "../../utils/responsive";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { useRoute } from "@react-navigation/native";
import { apiConst } from "../../helper/apiConstant";

const HeadFamilyDetailScreen = () => {
  const route = useRoute();
  const headData1 = route?.params?.data;
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
    <View style={style.container}>
      <Header
        title={"વડીલો ના શબ્દો"}
        isBack={true}
        headline={headData}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeadCard
          image={apiConst.getAnyImages + headData1.photo}
          imageStyle={style.imageStyle}
          isText={true}
          text={headData1.notes}
          textStyle={style.textStyle}
          name={headData1.motivation_By}
          date={route?.params?.fData}
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
