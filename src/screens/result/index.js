import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Header } from "../../components";
import { colors } from "../../utils";

const ResultScreen = () => {
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={"પરિણામ"}
        isBack={true}
        headline={headlineData && headlineData[0] && headlineData[0]?.headline}
      />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={{
            color: colors.primaryBlack,
            textAlign: "center",
          }}>
          NO DATA FOUND
        </Text>
      </View>
    </View>
  );
};

export default ResultScreen;
