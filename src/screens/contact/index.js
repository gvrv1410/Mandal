import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import DropShadow from "react-native-drop-shadow";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Button, Header } from "../../components";
import { mandalContact, mandalSubContact } from "../../helper/dummyData";
import { colors } from "../../utils";
import { Height, Width } from "../../utils/responsive";

const ContactScreen = () => {
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);
  return (
    <View style={style.mainContainer}>
      <Header
        title={"મંડળ નો સંપર્ક"}
        isBack={true}
        headline={headlineData && headlineData[0] && headlineData[0]?.headline}
      />
      <Text style={style.text}>પૂછપરછ ફોર્મ</Text>
      <ScrollView>
        <Text style={style.textOne}>નામ</Text>
        <DropShadow style={style.shadow}>
          <TextInput
            placeholder="તમારું નામ લખો"
            style={style.textInput}
            placeholderTextColor={colors.gray}
          />
        </DropShadow>
        <Text style={style.textOne}>કુટુંબ ID</Text>
        <DropShadow style={style.shadow}>
          <TextInput
            placeholder="તમારું નામ લખો"
            style={style.textInput}
            placeholderTextColor={colors.gray}
          />
        </DropShadow>
        <Text style={style.textOne}>મોબાઈલ નમ્બર</Text>
        <DropShadow style={style.shadow}>
          <TextInput
            placeholder="તમારું નામ લખો"
            style={style.textInput}
            placeholderTextColor={colors.gray}
          />
        </DropShadow>
        <Text style={style.textOne}>મેસેજ</Text>
        <DropShadow style={style.shadow}>
          <TextInput
            placeholder="તમારું નામ લખો"
            style={style.textInput}
            placeholderTextColor={colors.gray}
          />
        </DropShadow>
        <Button
          title={"સાચવો"}
          buttonStyle={style.buttonStyle}
          buttonTextStyle={style.buttonTextStyle}
        />
        <FlatList
          data={mandalContact}
          scrollEnabled={false}
          renderItem={({ item }) => {
            return (
              <DropShadow style={style.shadow}>
                <View>
                  <View style={style.flatView}>
                    <Text style={[style.flatText, { color: colors.primary }]}>
                      {item.title}
                    </Text>
                    <Text style={style.flatText}>{item.subTitle}</Text>
                  </View>
                  <View style={[style.roundView, { position: "absolute" }]}>
                    <Image
                      source={item.icon}
                      style={style.image}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </DropShadow>
            );
          }}
        />

        <View style={style.rowView}>
          {mandalSubContact.map((item, i) => {
            return (
              <View style={style.roundSubView}>
                <Image
                  source={item.icon}
                  style={style.subImg}
                  resizeMode="contain"
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactScreen;
const style = StyleSheet.create({
  text: {
    fontSize: Height(20),
    color: colors.primary,
    textAlign: "center",
    paddingVertical: Height(10),
    marginTop: Height(20),
    backgroundColor: "#E7EEF2",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  textInput: {
    width: Width(360),
    paddingHorizontal: 16,
    backgroundColor: colors.primaryWhite,
    height: Height(50),
    alignSelf: "center",
    borderRadius: Width(5),
    marginTop: Height(5),
    color: colors.primary,
  },
  shadow: {
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  textOne: {
    fontSize: Height(15),
    color: colors.primaryBlack,
    marginLeft: Width(15),
    marginTop: Height(30),
  },
  buttonStyle: {
    height: Height(50),
    width: Width(360),
    backgroundColor: colors.primary,
    borderRadius: Width(5),
    alignSelf: "center",
    marginTop: Height(30),
    marginBottom: Height(15),
  },
  buttonTextStyle: {
    fontSize: Height(16),
    color: colors.primaryWhite,
    fontWeight: "400",
  },
  flatView: {
    height: Height(140),
    width: Width(360),
    backgroundColor: colors.primaryWhite,
    alignSelf: "center",
    marginVertical: Height(30),
    paddingTop: Height(60),
    alignItems: "center",
  },
  roundView: {
    height: Height(80),
    width: Height(80),
    borderRadius: Height(80) / 2,
    backgroundColor: colors.primary,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: Height(30),
    width: Width(30),
  },
  flatText: {
    fontSize: Height(15),
    color: colors.primaryBlack,
    textAlign: "center",
    marginHorizontal: Width(20),
  },
  roundSubView: {
    height: Height(50),
    width: Height(50),
    borderRadius: Height(50) / 2,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  subImg: {
    height: Height(25),
    width: Width(25),
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Width(65),
    paddingBottom: Height(50),
  },
});
