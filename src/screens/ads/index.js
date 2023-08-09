import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DropShadow from "react-native-drop-shadow";
import { useDispatch, useSelector } from "react-redux";
import { fetchAds } from "../../actions/adsActions";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Header } from "../../components";
import Loader from "../../components/common/Loader";
import Menu from "../../components/common/Menu";
import { apiConst } from "../../helper/apiConstant";
import { ads } from "../../helper/dummyData";
import iconConstant from "../../helper/iconConstant";
import { colors } from "../../utils";
import { Height, Width } from "../../utils/responsive";

const AdsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);

  const ads = useSelector((state) => state.ads?.adsData?.advertisementData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      dispatch(fetchHeadlines());
      dispatch(fetchAds());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
    }
  }, []);

  return (
    <>
      <View style={style.mainContainer}>
        <Header
          title={"જાહેરાત"}
          isBack={true}
          isRight={true}
          isFiler={true}
          onRightPress={() => setShowDonationSuccessPopup(true)}
          headline={
            headlineData && headlineData[0] && headlineData[0]?.headline
          }
        />
        <ScrollView
          style={style.mainContainer}
          showsVerticalScrollIndicator={false}>
          <FlatList
            data={ads}
            contentContainerStyle={{ flex: 1 }}
            renderItem={({ item }) => {
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
                return `${hours}:${minutes
                  .toString()
                  .padStart(2, "0")} ${ampm}`;
              };

              const dateObj = new Date(isoDate);

              const day = dateObj.getDate();
              const month = getMonthName(dateObj.getMonth());
              const year = dateObj.getFullYear();

              const formattedTime = formatTime(dateObj);

              const formattedDateTime = `${day} ${month}, ${year} | ${formattedTime}`;
              return (
                <View style={style.flatView}>
                  <Text style={style.dateText}>{formattedDateTime}</Text>
                  <DropShadow style={style.shadow}>
                    <View style={style.view}>
                      <Image
                        source={{ uri: apiConst.getAnyImages + item.photo }}
                        style={style.image}
                        resizeMode="contain"
                      />
                      <View style={style.rowView}>
                        <Text style={style.text}>વધુ</Text>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("AdsDetails", {
                              data: item,
                              JDate: formattedDateTime,
                            })
                          }>
                          <Image
                            source={iconConstant.ic_forward}
                            style={style.icon}
                            resizeMode="contain"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </DropShadow>
                </View>
              );
            }}
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
        </ScrollView>
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

export default AdsScreen;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  shadow: {
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  view: {
    height: Height(250),
    width: Width(360),
    backgroundColor: colors.primaryWhite,
    alignSelf: "center",
    borderRadius: Width(5),
    marginTop: Height(10),
  },
  flatView: {
    marginHorizontal: Width(20),
  },
  dateText: {
    fontSize: Height(10),
    color: colors.gray,
    textAlign: "right",
    marginTop: Height(30),
  },
  image: {
    width: Width(360),
    height: Height(200),
    borderRadius: Width(5),
  },
  icon: {
    height: Height(13),
    width: Width(10),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Height(10),
    justifyContent: "space-between",
    marginHorizontal: Width(20),
  },
  text: {
    fontSize: Height(15),
    color: colors.primary,
    fontWeight: "500",
  },
});
