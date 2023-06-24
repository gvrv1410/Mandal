import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { DonorCardView, Header, TabView } from "../../components";
import DonorSubCardView from "../../components/donor/DonorSubCardView";
import { donorData, donorSubData, donorTabData } from "../../helper/dummyData";
import { Height } from "../../utils/responsive";

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
      </View>
      {activeIndex === 0 ?
        <View style={{ flex: 1, marginVertical: Height(20) }}>
          <FlatList
            data={donorData}
            renderItem={({ item }) => {
              return (
                <View style={{ marginTop: Height(30) }}>
                  <DonorCardView
                    name={item.name}
                    donorOne={item.donor1}
                    donorTwo={item.donor2}
                    donorThree={item.donor3}
                    village={item.village}
                  />
                </View>
              )
            }}
          />
        </View>
        :
        <View style={{ flex: 1, marginVertical: Height(20) }}>
          <FlatList
            data={donorSubData}
            renderItem={({ item }) => {
              return (
                <DonorSubCardView
                  name={item.name}
                  donor={item.donor}
                  donorby={item.donorby}
                  donorName={item.donorName}
                  village={item.village}
                />
              )
            }}
          />
        </View>
      }


    </View>
  );
};

export default DonorScreen;
