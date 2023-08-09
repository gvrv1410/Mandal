import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Header } from "../../components";
import { colors } from "../../utils";
import iconConstant from "../../helper/iconConstant";
import { Height, Width } from "../../utils/responsive";
import DropShadow from "react-native-drop-shadow";
import DirectorCardView from "../../components/director/DirectorCardView";
import { useDispatch, useSelector } from "react-redux";
import { fetchDirectorFamily } from "../../actions/directoryActions";
import { BASE_URL } from "../../helper/apiConstant";
import { fetchHeadlines } from "../../actions/headlinesActions";
import Loader from "../../components/common/Loader";

const DirectorFamilyScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const { fetchVillageMeber } = useSelector(
    (state) => state?.totalDirectorMember
  );
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    try {
      const village = route?.params?.data?.village;
      dispatch(fetchHeadlines());
      if (village) {
        dispatch(fetchDirectorFamily(village));
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, [dispatch, route?.params?.data?.village]);

  return (
    <>
      <View style={style.mainContainer}>
        <Header
          title={route?.params?.data?.village}
          isBack={true}
          headline={
            headlineData && headlineData[0] && headlineData[0]?.headline
          }
        />
        <DropShadow style={style.shadow}>
          <View style={style.rowContaier}>
            <TextInput
              placeholder="શોધો"
              style={style.textInput}
              placeholderTextColor={colors.gray}
            />
            <Image
              source={iconConstant.ic_search}
              style={style.icon}
            />
          </View>
        </DropShadow>
        <View style={{ flex: 1 }}>
          <FlatList
            data={fetchVillageMeber?.data}
            renderItem={({ item }) => {
              return (
                <DirectorCardView
                  profile={iconConstant.ic_profile}
                  name={item?.member_name}
                  familyCode={item?.mukhiya_member_id}
                  wpNumber={item?.member_mobile_no}
                  onImagePress={() =>
                    navigation.navigate("DirectorProfile", { data: item })
                  }
                  onPress={() =>
                    navigation.navigate("DirectorMember", { data: item })
                  }
                />
              );
            }}
          />
        </View>
      </View>
      {isLoading && <Loader />}
    </>
  );
};

export default DirectorFamilyScreen;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  icon: {
    width: Width(20),
    height: Height(20),
    resizeMode: "contain",
  },
  rowContaier: {
    height: Height(50),
    width: Width(360),
    backgroundColor: colors.primaryWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Width(20),
    alignSelf: "center",
    borderRadius: Width(5),
    marginTop: Height(20),
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
  textInput: {
    width: Width(280),
    color: colors.primary,
  },
});
