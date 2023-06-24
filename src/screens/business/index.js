import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import ImageCropPicker from "react-native-image-crop-picker";
import { Button, Header, TabView, TextInput } from "../../components";
import { businessTabData } from "../../helper/dummyData";
import iconConstant from "../../helper/iconConstant";
import imageConstant from "../../helper/imageConstant";
import { colors } from "../../utils";
import { Height } from "../../utils/responsive";

const BusinessScreen = () => {
  const openPicker = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setImage(image.path)
    });
  };
  const [image, setImage] = useState('')
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View style={{ flex: 1, backgroundColor: colors.primaryWhite }}>
      <Header title={"બિઝનેસ"} isBack={true} />
      <View style={{ marginHorizontal: 16 }}>
        <TabView
          tabData={businessTabData}
          activeIndex={activeIndex}
          onPress={(index) => {
            setActiveIndex(index);
          }}
          mainContainer={{ marginTop: 20 }}
        />
      </View>
      {activeIndex === 0 ?
        <View style={{ flex: 1, marginHorizontal: 16, }}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }} >
            <TouchableOpacity style={style.imageViewStyle} onPress={openPicker}>
              {image ?
                <Image
                  source={{ uri: image }}
                  style={style.imageStyle}
                  resizeMode="contain"
                />
                :
                <Image
                  source={imageConstant.profile}
                  style={style.imageStyle}
                  resizeMode="contain"
                />}
              <Text style={style.imageTextStyle}>પ્રોફાઇલ ફોટો બદલો</Text>
            </TouchableOpacity>
            <TextInput
              icon={iconConstant.ic_user}
              mainContainer={style.textInputStyle}
              placeholder={"તમારું નામ લખો"}
              isIconView
            // value={name}
            // onChangeText={(val) => setName(val)}
            />
            <TextInput
              icon={iconConstant.ic_newBusiness}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા વ્યવસાયનું નામ લખો"}
              isIconView
            // value={name}
            // onChangeText={(val) => setName(val)}
            />
            <TextInput
              icon={iconConstant.ic_mail}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા વ્યવસાયનું ઇમેલ લખો"}
              isIconView
            // value={email}
            // onChangeText={(val) => setEmail(val)}
            />
            <TextInput
              icon={iconConstant.ic_call}
              mainContainer={style.textInputStyle}
              placeholder={"તમારો મોબાઈલ નમ્બર લખો"}
              isIconView
            // value={mobileNumber}
            // onChangeText={(val) => setMobileNumber(val)}
            />
            <TextInput
              icon={iconConstant.ic_social}
              mainContainer={style.textInputStyle}
              placeholder={"તમારી સોશિયલ મીડિયા લિંક નાખો"}
              isIconView
            // value={socialLink}
            // onChangeText={(val) => setSocialLink(val)}
            />
            <TextInput
              icon={iconConstant.ic_city}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા શહેરનું નામ લખો"}
              isIconView
            // value={cityName}
            // onChangeText={(val) => setCityName(val)}
            />
            <TextInput
              icon={iconConstant.ic_village}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા ગામનું નામ લખો"}
              isIconView
            // value={villageName}
            // onChangeText={(val) => setVillageName(val)}
            />
            <TextInput
              icon={iconConstant.ic_village}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા વ્યવસાયનું સરનામું લખો"}
              isIconView
            // value={villageName}
            // onChangeText={(val) => setVillageName(val)}
            />
            <Button
              title={"સાચવો"}
              buttonStyle={style.buttonStyle}
              buttonTextStyle={{ color: colors.primaryWhite }}
            // onPress={onAddMember}
            />
          </ScrollView>
        </View>
        :
        <View>
          <Text>khsdkhdk</Text>
        </View>}
    </View>
  );
};

export default BusinessScreen;

const style = StyleSheet.create({
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
  textInputStyle: {
    marginVertical: 16,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: "center",
  },
})