import React, { useState } from "react";
import { Text, View } from "react-native";
import { DonorCardView, Header, TabView } from "../../components";
import { donorTabData } from "../../helper/dummyData";
import { ScrollView } from "react-native-gesture-handler";

const DonorScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <Header title={"દાતાશ્રી"} isBack={true} isRight={true} isFiler={true} />
      <View style={{ marginHorizontal: 16 }}>
        <TabView
          tabData={donorTabData}
          activeIndex={activeIndex}
          onPress={(index) => {
            setActiveIndex(index);
          }}
          mainContainer={{ marginTop: 20 }}
        />
        <View style={{ marginTop: 15 }}>
          <DonorCardView />
        </View>
      </View>
    </View>
  );
};

export default DonorScreen;
