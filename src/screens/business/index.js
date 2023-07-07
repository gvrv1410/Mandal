import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import ImageCropPicker from "react-native-image-crop-picker";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Button, Header, TabView, TextInput } from "../../components";
import BusinessCard from "../../components/business/BusinessCard";
import { businessTabData, marketData } from "../../helper/dummyData";
import iconConstant from "../../helper/iconConstant";
import imageConstant from "../../helper/imageConstant";
import { colors } from "../../utils";
import { Height, Width } from "../../utils/responsive";

const BusinessScreen = () => {
  const openPicker = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setImage(image.path);
    });
  };
  const [image, setImage] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const headlineData = useSelector((state) => state.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View>
        <BusinessCard
          email={item.email}
          phone={item.phone}
          link={item.link}
          location={item.location}
        />
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={"બિઝનેસ"}
        isBack={true}
        headline={headlineData?.headlineData?.msg}
      />
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
      {activeIndex === 0 ? (
        <View style={{ flex: 1, marginHorizontal: 16 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}>
            <TouchableOpacity
              style={style.imageViewStyle}
              onPress={openPicker}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={style.imageStyle}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={imageConstant.profile}
                  style={style.imageStyle}
                  resizeMode="contain"
                />
              )}
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
      ) : (
        <View style={style.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.view}>
              <Text style={style.mainText}>માર્કેટિંગ એજન્સી</Text>
              <View style={style.rowView}>
                <Image
                  source={iconConstant.ic_bemail}
                  style={style.bemail}
                  resizeMode="contain"
                />
                <Text style={style.subText}>avi19@gmail.com</Text>
              </View>
              <View style={style.rowView}>
                <Image
                  source={iconConstant.ic_bphone}
                  style={style.bphone}
                  resizeMode="contain"
                />
                <Text style={style.subText}>૯૫૧૨૩૪૫૬૭૮</Text>
              </View>
              <View style={style.rowView}>
                <Image
                  source={iconConstant.ic_blink}
                  style={style.blink}
                  resizeMode="contain"
                />
                <Text style={style.subText}>http://</Text>
              </View>
              <View style={style.rowView}>
                <Image
                  source={iconConstant.ic_bsLocation}
                  style={style.blocation}
                  resizeMode="contain"
                />
                <Text style={style.subText}>
                  {" "}
                  એ, ૬૦૧, રાજ રેસીડેન્સી , એ બી સી સર્કલ મોટા વરાછા, સુરત -
                  ૩૯૪૧૦૧{" "}
                </Text>
              </View>
            </View>
            <FlatList
              data={marketData}
              scrollEnabled={false}
              renderItem={renderItem}
            />
          </ScrollView>
        </View>
      )}
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
  container: {
    flex: 1,
  },
  bemail: {
    height: Height(10),
    width: Width(15),
  },
  bphone: {
    height: Height(16),
    width: Width(15),
  },
  blink: {
    height: Height(14),
    width: Width(15),
  },
  blocation: {
    height: Height(17),
    width: Width(15),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Width(32),
    marginTop: Height(15),
  },
  subText: {
    fontSize: Height(15),
    fontWeight: "400",
    marginLeft: Width(20),
  },
  view: {
    height: Height(250),
    width: Width(360),
    backgroundColor: colors.primaryWhite,
    alignSelf: "center",
    borderRadius: Width(5),
    marginTop: Height(20),
  },
  mainText: {
    fontSize: Height(22),
    fontWeight: "500",
    marginLeft: Width(30),
    color: colors.primary,
    marginTop: Height(25),
  },
});
