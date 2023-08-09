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
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  useEffect(() => {
    const id = route?.params?.data?.member_id;
    dispatch(fetchGetMember(id));
    dispatch(fetchHeadlines());
  }, [dispatch, route?.params?.data?.member_id]);

  return (
    <View style={style.mainContainer}>
      <Header
        title={route?.params?.data?.member_name}
        isBack={true}
        headline={headlineData && headlineData[0] && headlineData[0]?.headline}
      />
      <View style={style.mainContainer}>
        <FlatList
          data={getMember.data}
          contentContainerStyle={{ flex: 1 }}
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
