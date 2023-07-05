import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../../components";
import DonorSubCardView from "../../components/donor/DonorSubCardView";
import { Height } from "../../utils/responsive";

const EventScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header
        title={"ઇવેન્ટ - ગેલેરી"}
        isBack={true}
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
