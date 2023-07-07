import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Header } from "../../components";

const ResultScreen = () => {
  const dispatch = useDispatch();
  const headlineData = useSelector((state) => state.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);
  return (
    <View>
      <Header
        title={"પરિણામ"}
        isBack={true}
        headline={headlineData?.headlineData?.msg}
      />
    </View>
  );
};

export default ResultScreen;
