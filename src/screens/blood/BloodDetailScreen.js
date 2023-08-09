import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import { useRoute } from "@react-navigation/native";
import SubCardView from "../../components/common/SubCardView";
import { marriageData } from "../../helper/dummyData";
import { colors } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlood } from "../../actions/bloodActions";
import { fetchHeadlines } from "../../actions/headlinesActions";
import Loader from "../../components/common/Loader";

const BloodDetailScreen = () => {
  const route = useRoute();

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const bloodDetails = useSelector((state) => state?.blood);
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  useEffect(() => {
    setIsLoading(true);
    try {
      const group = route?.params?.data?.group;
      dispatch(fetchBlood(group));
      dispatch(fetchHeadlines());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, [dispatch, route?.params?.data?.group]);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: colors.primaryWhite }}>
        <Header
          title={route.params?.data.group}
          isBack={true}
          headline={
            headlineData && headlineData[0] && headlineData[0]?.headline
          }
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
      {isLoading && <Loader />}
    </>
  );
};

export default BloodDetailScreen;
