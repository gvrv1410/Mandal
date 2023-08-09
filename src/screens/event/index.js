import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Header } from "../../components";
import Loader from "../../components/common/Loader";
import DonorSubCardView from "../../components/donor/DonorSubCardView";
import { Height } from "../../utils/responsive";

const EventScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    try {
      dispatch(fetchHeadlines());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, []);
  return (
    <>
      <View>
        <Header
          title={"ઇવેન્ટ - ગેલેરી"}
          isBack={true}
          headline={
            headlineData && headlineData[0] && headlineData[0]?.headline
          }
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
      {isLoading && <Loader />}
    </>
  );
};

export default EventScreen;

const style = StyleSheet.create({
  mainContainer: {
    paddingBottom: Height(20),
    paddingTop: Height(40),
  },
});
