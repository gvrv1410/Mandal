import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import { colors } from "../../utils";
import { noti } from "../../helper/dummyData";
import DropShadow from "react-native-drop-shadow";
import imageConstant from "../../helper/imageConstant";
import { Height, Width } from "../../utils/responsive";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { fetchNotification } from "../../actions/notificationActions";
import { apiConst, BASE_URL } from "../../helper/apiConstant";
import Loader from "../../components/common/Loader";

const NotificationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const notificationData = useSelector(
    (state) => state?.notification?.notification?.suchnadetail
  );
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    try {
      dispatch(fetchHeadlines());
      dispatch(fetchNotification());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, []);
  return (
    <>
      <View style={style.mainContainer}>
        <Header
          title={"સૂચનાઓ"}
          isBack={true}
          headline={
            headlineData && headlineData[0] && headlineData[0]?.headline
          }
        />
        <FlatList
          data={notificationData}
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
              return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
            };

            const dateObj = new Date(isoDate);

            const day = dateObj.getDate();
            const month = getMonthName(dateObj.getMonth());
            const year = dateObj.getFullYear();

            const formattedTime = formatTime(dateObj);

            const formattedDateTime = `${day} ${month}, ${year} | ${formattedTime}`;

            return (
              <DropShadow style={style.shadow}>
                <TouchableOpacity
                  style={style.btn}
                  onPress={() =>
                    navigation.navigate("NotificationDetail", {
                      data: item,
                      cDate: formattedDateTime,
                    })
                  }>
                  <View style={style.rowView}>
                    <View>
                      <Image
                        source={{ uri: apiConst.getAnyImages + item.photo }}
                        resizeMode="contain"
                        style={{
                          height: Height(72),
                          width: Width(72),
                          borderRadius: Width(5),
                        }}
                      />
                    </View>
                    <View>
                      <Text style={style.text}>{item.notes}</Text>
                    </View>
                  </View>
                  <Text style={style.bottomText}>{formattedDateTime}</Text>
                </TouchableOpacity>
              </DropShadow>
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
      </View>
      {isLoading && <Loader />}
    </>
  );
};

export default NotificationScreen;

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
  btn: {
    height: Height(150),
    // width: Width(360),
    backgroundColor: colors.primaryWhite,
    alignSelf: "center",
    borderRadius: Width(5),
    marginVertical: Height(15),
    justifyContent: "space-between",
    paddingHorizontal: Width(10),
    paddingBottom: Height(5),
  },
  text: {
    width: Width(255),
    fontSize: Height(15),
    color: colors.gray,
    marginLeft: Width(10),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Height(20),
  },
  bottomText: {
    textAlign: "right",
    fontSize: Height(10),
    color: colors.gray,
  },
});
