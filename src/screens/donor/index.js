import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fethDonor } from "../../actions/donerActions";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { DonorCardView, Header, TabView } from "../../components";
import Loader from "../../components/common/Loader";
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
  const [isLoading, setIsLoading] = useState(false);
  const donorData1 = useSelector(
    (state) => state?.donor?.donors?.dataShreedetail
  );
  const filteredData = donorData1?.filter((item) => item.type.startsWith("k"));
  const kData = filteredData;
  const filteredData1 = donorData1?.filter((item) => item.type.startsWith("d"));
  const dData = filteredData1;
  useEffect(() => {
    setIsLoading(true);
    try {
      dispatch(fetchHeadlines());
      dispatch(fethDonor());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, []);
  return (
    <>
      <View style={{ flex: 1 }}>
        <Header
          title={"દાતાશ્રી"}
          isBack={true}
          isRight={true}
          isFiler={true}
          onRightPress={() => setShowDonationSuccessPopup(true)}
          headline={
            headlineData && headlineData[0] && headlineData[0]?.headline
          }
        />

        <Menu
          displayTitle={"Custom Alert"}
          visibility={showDonationSuccessPopup}
          dismissAlert={setShowDonationSuccessPopup}
          onPress={() => setShowDonationSuccessPopup(false)}
          onDismiss={() => setShowDonationSuccessPopup(false)}
        />
        <View style={{ marginHorizontal: 16 }}>
          <TabView
            tabData={donorTabData}
            activeIndex={activeIndex}
            onPress={(index) => {
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
      {isLoading && <Loader />}
    </>
  );
};

export default DonorScreen;

const style = StyleSheet.create({
  mainContainer: {
    paddingBottom: Height(20),
    paddingTop: Height(40),
  },
});
