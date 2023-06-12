import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput, Header, Button, DropDownView } from "../../components";
import { colors } from "../../utils";
import images from "../../helper/imageConstant";
import iconConstant from "../../helper/iconConstant";
import ImagePicker from "react-native-image-crop-picker";

const FamilyScreen = () => {
  const openPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };

  return (
    <SafeAreaView style={style.mainContainer}>
      <Header title={"સભ્ય ઉમેરો"} isBack={true} />
      <View style={{ flex: 1, marginHorizontal: 16 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={style.imageViewStyle} onPress={openPicker}>
            <Image
              source={images.profile}
              style={style.imageStyle}
              resizeMode="contain"
            />
            <Text style={style.imageTextStyle}>પ્રોફાઇલ ફોટો બદલો</Text>
          </TouchableOpacity>
          <TextInput
            icon={iconConstant.ic_user}
            mainContainer={style.textInputStyle}
            placeholder={"તમારું નામ લખો"}
            isIconView
          />
          <TextInput
            icon={iconConstant.ic_mUser}
            mainContainer={style.textInputStyle}
            placeholder={"તમારા માતાનું નામ લખો"}
            isIconView
          />
          <TextInput
            icon={iconConstant.ic_date}
            mainContainer={style.textInputStyle}
            placeholder={"તમારી જન્મતારીખ લખો"}
            isIconView
          />
          <TextInput
            icon={iconConstant.ic_city}
            mainContainer={style.textInputStyle}
            placeholder={"તમારા શહેરનું નામ લખો"}
            isIconView
          />
          <TextInput
            icon={iconConstant.ic_village}
            mainContainer={style.textInputStyle}
            placeholder={"તમારા ગામનું નામ લખો"}
            isIconView
          />
          <TextInput
            icon={iconConstant.ic_village}
            mainContainer={style.textInputStyle}
            placeholder={"તમારા મોસાળનું ગામ લખો"}
            isIconView
          />
          <DropDownView
            placeHolder="તમારું બ્લડ ગ્રુપ પસંદ કરો"
            mainContainer={{ zIndex: 1 }}
          />
          <DropDownView
            placeHolder="તમારી જાતિ પસંદ કરો"
            mainContainer={{ zIndex: 1 }}
          />
          <DropDownView
            placeHolder="તમારી વૈવાહિક સ્તિથી પસંદ કરો"
            mainContainer={{ zIndex: -1 }}
          />
          <DropDownView
            placeHolder="તમારું શિક્ષણ પસંદ કરો"
            mainContainer={{ zIndex: 1 }}
          />
          <DropDownView
            placeHolder="તમારા વ્યવસાયનું પસંદ કરો"
            mainContainer={{ zIndex: 1 }}
          />
          <TextInput
            icon={iconConstant.ic_call}
            mainContainer={style.textInputStyle}
            placeholder={"તમારો મોબાઈલ નમ્બર લખો"}
            isIconView
          />
          <TextInput
            icon={iconConstant.ic_social}
            mainContainer={style.textInputStyle}
            placeholder={"તમારી સોશિયલ મીડિયા લિંક નાખો"}
            isIconView
          />
          <TextInput
            icon={iconConstant.ic_mail}
            mainContainer={style.textInputStyle}
            placeholder={"તમારું ઈમેલ લખો"}
            isIconView
          />
          <TextInput
            icon={iconConstant.ic_location}
            mainContainer={style.textInputStyle}
            placeholder={"તમારું સરનામું લખો"}
            isIconView
          />
          <TextInput
            icon={iconConstant.ic_bLocation}
            mainContainer={style.textInputStyle}
            placeholder={"તમારા વ્યવસાયનું સરનામું લખો"}
            isIconView
          />
        </ScrollView>
        <Button
          title={"સાચવો"}
          buttonStyle={style.buttonStyle}
          buttonTextStyle={{ color: colors.primaryWhite }}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  textInputStyle: {
    marginVertical: 16,
  },
  imageViewStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  imageTextStyle: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 10,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: "center",
  },
});

export default FamilyScreen;
