import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Header } from "../../components";
import SubCardView from "../../components/common/SubCardView";
import { marriageData } from "../../helper/dummyData";
import { Height } from "../../utils/responsive";

const MarriageScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const headlineData = useSelector(
    (state) => state?.fetchHeadlines?.headlineData
  );
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={"લગ્ન વિષયક"}
        isBack={true}
        isRight={true}
        isFiler={true}
        headline={headlineData && headlineData[0] && headlineData[0]?.headline}
      />

      <View style={{ flex: 1, marginVertical: 16 }}>
        <FlatList
          data={marriageData}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("MarriageBio", { data: item })
                }>
                <SubCardView
                  name={item.name}
                  village={item.village}
                  city={item.city}
                  dob={item.dob}
                  address={item.address}
                  isDob={true}
                  height={Height(200)}
                  image={item.image}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MarriageScreen;
