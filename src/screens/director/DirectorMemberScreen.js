import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import DirectorCardView from "../../components/director/DirectorCardView";
import { directorFamilyData } from "../../helper/dummyData";
import iconConstant from "../../helper/iconConstant";
import { colors } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetMember } from "../../actions/directoryActions";
import { fetchHeadlines } from "../../actions/headlinesActions";

const DirectorMemberScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { getMember } = useSelector((state) => state?.totalDirectorMember);
  const [headData, setHeadDate] = useState();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  useEffect(() => {
    const id = route?.params?.data?.member_id;
    dispatch(fetchGetMember(id));
    dispatch(fetchHeadlines());
    if (headlineData && headlineData[0] && headlineData[0].headline) {
      const headline = headlineData[0].headline;
      setHeadDate(headline);
    } else {
      console.log(
        "headlineData is null or the headline property is not available."
      );
    }
  }, [dispatch, route?.params?.data?.member_id]);

  return (
    <View style={style.mainContainer}>
      <Header
        title={route?.params?.data?.member_name}
        isBack={true}
        headline={headData}
      />
      <View style={style.mainContainer}>
        <FlatList
          data={getMember.data}
          renderItem={({ item }) => {
            return (
              <DirectorCardView
                profile={iconConstant.ic_profile}
                name={item?.member_name}
                familyCode={item?.mukhiya_member_id}
                wpNumber={item?.member_mobile_no}
                onImagePress={() =>
                  navigation.navigate("MemberProfile", { data: item })
                }
                onPress={() =>
                  navigation.navigate("DirectorDetail", { data: item })
                }
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default DirectorMemberScreen;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
});
