import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Header } from "../../components";
import { useRoute } from "@react-navigation/native";
import SubCardView from "../../components/common/SubCardView";
import { marriageData } from "../../helper/dummyData";
import { colors } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlood } from "../../actions/bloodActions";
import { fetchHeadlines } from "../../actions/headlinesActions";

const BloodDetailScreen = () => {
  const route = useRoute();

  const dispatch = useDispatch();

  const bloodDetails = useSelector((state) => state.blood);
  console.log(bloodDetails);
  const headlineData = useSelector((state) => state.fetchHeadlines);
  useEffect(() => {
    const group = route?.params?.data?.group;
    dispatch(fetchBlood(group));
    dispatch(fetchHeadlines());
  }, [dispatch, route?.params?.data?.group]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.primaryWhite }}>
      <Header
        title={route.params?.data.group}
        isBack={true}
        headline={headlineData?.headlineData?.msg}
      />
      <View style={{ flex: 1, marginVertical: 16 }}>
        <FlatList
          data={marriageData}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <SubCardView
                  name={item.name}
                  village={item.village}
                  city={item.city}
                  dob={item.dob}
                  address={item.address}
                  isGroup={true}
                  isMob={true}
                  mob={"૯૫૧૨૩૪૫૬૭૮"}
                  group={"o-"}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default BloodDetailScreen;
