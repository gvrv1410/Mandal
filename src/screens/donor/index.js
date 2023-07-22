import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fethDonor } from "../../actions/donerActions";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { DonorCardView, Header, TabView } from "../../components";
import Menu from "../../components/common/Menu";
import DonorSubCardView from "../../components/donor/DonorSubCardView";
import { donorData, donorSubData, donorTabData } from "../../helper/dummyData";
import { Height } from "../../utils/responsive";

const DonorScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const [headData, setHeadDate] = useState();
  const donorData1 = useSelector(
    (state) => state?.donor?.donors?.dataShreedetail
  );
  console.log(donorData1);
  const filteredData = donorData1?.filter((item) => item.type.startsWith("k"));
  const kData = filteredData;
  const filteredData1 = donorData1?.filter((item) => item.type.startsWith("d"));
  const dData = filteredData1;
  useEffect(() => {
    dispatch(fetchHeadlines());
    dispatch(fethDonor());
    if (headlineData && headlineData[0] && headlineData[0].headline) {
      const headline = headlineData[0].headline;
      setHeadDate(headline);
    } else {
      console.log(
        "headlineData is null or the headline property is not available."
      );
    }
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={"દાતાશ્રી"}
        isBack={true}
        isRight={true}
        isFiler={true}
        onRightPress={() => setShowDonationSuccessPopup(true)}
        headline={headData}
      />

      <Menu
        displayTitle={"Custom Alert"}
        visibility={showDonationSuccessPopup}
        dismissAlert={setShowDonationSuccessPopup}
        onPress={() => setShowDonationSuccessPopup(false)}
      />
      <View style={{ marginHorizontal: 16 }}>
        <TabView
          tabData={donorTabData}
          activeIndex={activeIndex}
          onPress={(index) => {
            console.log({ activeIndex });
            setActiveIndex(index);
            fethDonor(activeIndex);
          }}
          mainContainer={{ marginTop: 20 }}
        />
      </View>
      {activeIndex === 0 ? (
        <View style={{ flex: 1, marginVertical: Height(20) }}>
          <FlatList
            data={kData}
            renderItem={({ item }) => {
              return (
                <DonorCardView
                  name={item.name}
                  donorOne={item.donor1}
                  donorTwo={item.donor2}
                  donorThree={item.donor3}
                  village={item.village}
                  dataShreeType={item.dataShreeType}
                  data={item.member}
                />
              );
            }}
          />
        </View>
      ) : (
        <View style={{ flex: 1, marginVertical: Height(20) }}>
          <FlatList
            data={dData}
            renderItem={({ item }) => {
              return (
                // <DonorSubCardView
                //   name={item.name}
                //   donor={item.donor}
                //   donorby={item.donorby}
                //   donorName={item.donorName}
                //   village={item.village}
                //   mainContainer={style.mainContainer}
                //   isLocation={true}
                //   isDate={true}
                //   isDoner={true}
                //   isDonerOne={true}
                // />
                <DonorCardView
                  name={item.name}
                  village={item.village}
                  dataShreeType={item.dataShreeType}
                  data={item.member}
                />
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default DonorScreen;

const style = StyleSheet.create({
  mainContainer: {
    paddingBottom: Height(20),
    paddingTop: Height(40),
  },
});
