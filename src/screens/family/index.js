import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Header } from "../../components";
import FamilyCard from "../../components/family/FamilyCard";
import { myFamily } from "../../helper/dummyData";
import { colors } from "../../utils";
import { Height, Width } from "../../utils/responsive";
import { useNavigation } from "@react-navigation/native";
import Menu from "../../components/common/Menu";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { fetchMukhya } from "../../actions/mukhyaActions";
import { Modal } from "react-native-paper";

const FamilyScreen = () => {
  const navigation = useNavigation();
  const [showDonationSuccessPopup, setShowDonationSuccessPopup] =
    useState(false);
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const mukhyaFetch = useSelector((state) => state?.mukhya);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 20,
  };
  useEffect(() => {
    dispatch(fetchHeadlines());
    dispatch(fetchMukhya());
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View>
        <FamilyCard
          code={item.member}
          name={item.name}
          phone={item.mobile}
          onPress={() => navigation.navigate("EditMember")}
          onImagePress={() => navigation.navigate("MembersProfiles")}
          onBtnPress={() =>
            navigation.navigate("MemberProfiles", { data: item })
          }
          onDeletePress={() => showModal()}
        />
      </View>
    );
  };
  return (
    <View style={style.container}>
      <Header
        title={"મારુ પરિવાર"}
        isBack={true}
        isRight={true}
        isFiler={true}
        onRightPress={() => setShowDonationSuccessPopup(true)}
        headline={headlineData && headlineData[0] && headlineData[0]?.headline}
      />
      <View>
        <FlatList
          data={myFamily}
          renderItem={renderItem}
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
      <Button
        title={"સભ્ય ઉમેરો"}
        buttonStyle={style.buttonStyle}
        buttonTextStyle={{ color: colors.primaryWhite }}
        onPress={() => navigation.navigate("AddMember")}
      />
      <Menu
        displayTitle={"Custom Alert"}
        visibility={showDonationSuccessPopup}
        dismissAlert={setShowDonationSuccessPopup}
        onPress={() => setShowDonationSuccessPopup(false)}
        onDismiss={() => setShowDonationSuccessPopup(false)}
      />
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <Text style={style.text}>
          શું તમે ખરેખર પસંદ કરેલ સૂચના કાઢી નાખવા માંગો છો?
        </Text>
        <View style={style.rowView}>
          <TouchableOpacity onPress={hideModal}>
            <Text style={style.text}>રદ કરો</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={hideModal}>
            <Text style={style.text}>કાઢી નાખો</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default FamilyScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: "center",
    width: Width(360),
    marginTop: Height(100),
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Height(30),
  },
  text: {
    fontSize: Height(15),
    color: colors.primaryBlack,
  },
});
