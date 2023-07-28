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
import {
  addBusinessDetails,
  fetchBusinessDetails,
} from "../../actions/businessActions";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Button, Header, TabView, TextInput } from "../../components";
import BusinessCard from "../../components/business/BusinessCard";
import { apiConst, GET, PATCH } from "../../helper/apiConstant";
import { businessTabData, marketData } from "../../helper/dummyData";
import makeAPIRequest from "../../helper/global";
import iconConstant from "../../helper/iconConstant";
import imageConstant from "../../helper/imageConstant";
import { colors } from "../../utils";
import { Height, Width } from "../../utils/responsive";

const BusinessScreen = () => {
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const [headData, setHeadDate] = useState();
  const buData = useSelector(
    (state) => state?.business?.businessDetails?.businessData
  );
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
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [socialLink, setSocialLink] = useState("");
  const [cityName, setCityName] = useState("");
  const [villageName, setVillageName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [imageError, setImageError] = useState("");
  const [nameError, setNameError] = useState("");
  const [businessNameError, setBusinessNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [socialLinkError, setSocialLinkError] = useState("");
  const [cityNameError, setCityNameError] = useState("");
  const [villageNameError, setVillageNameError] = useState("");
  const [businessAddressError, setBusinessAddressError] = useState("");
  var reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const dispatch = useDispatch();

  const formValidation = () => {
    let imageValid = false;
    if (image.length === 0) {
      setImageError("Image is required");
    } else {
      setImageError("");
      imageValid = true;
    }

    let nameValid = false;
    if (name.length === 0) {
      setNameError("Name is required");
    } else {
      setNameError("");
      nameValid = true;
    }

    let businessNameValid = false;
    if (businessName.length === 0) {
      setBusinessNameError("Business Name is required");
    } else {
      setBusinessNameError("");
      businessNameValid = true;
    }

    let emailValid = false;
    if (email.length === 0) {
      setEmailError("Email is required");
    } else if (!reg.test(email)) {
      setEmailError("Please enter valid email address");
    } else {
      setEmailError("");
      emailValid = true;
    }

    let mobileNumberValid = false;
    if (mobileNumber.length === 0) {
      setMobileNumberError("Mobile Number is required");
    } else {
      setMobileNumberError("");
      mobileNumberValid = true;
    }

    let socialLinkValid = false;
    if (socialLink.length === 0) {
      setSocialLinkError("Social Link is required");
    } else {
      setSocialLinkError("");
      socialLinkValid = true;
    }

    let cityNameValid = false;
    if (cityName.length === 0) {
      setCityNameError("City Name is required");
    } else {
      setCityNameError("");
      cityNameValid = true;
    }

    // let villageNameValid = false;
    // if (villageName.length === 0) {
    //   setVillageNameError("Social Link is required");
    // } else {
    //   setVillageNameError("");
    //   villageNameValid = true;
    // }

    let businessAddressValid = false;
    if (businessAddress.length === 0) {
      setBusinessAddressError("Business Address is required");
    } else {
      setBusinessAddressError("");
      businessAddressValid = true;
    }

    if (
      imageValid &&
      nameValid &&
      businessNameValid &&
      emailValid &&
      mobileNumberValid &&
      socialLinkValid &&
      cityNameValid &&
      businessAddressValid
    ) {
      onButtonPress();
    }
  };

  const onButtonPress = () => {
    const profileImage = {
      uri: Platform.OS === "ios" ? image.replace("file://", "") : image,
      type: "image/*",
      name: image.split("/").pop(),
    };

    const formData = new FormData();
    formData.append("photo", profileImage);
    formData.append("business_name", businessName);
    formData.append("owner_name", name);
    formData.append("city", cityName);
    formData.append("mobile_no", mobileNumber);
    formData.append("email", email);
    formData.append("website", socialLink);
    formData.append("business_address", businessAddress);

    const obj = {
      formData,
      onSuccess: (res) => {
        console.log({ res });
      },
      onFail: (err) => {
        console.log({ err });
      },
    };
    dispatch(addBusinessDetails(obj));
  };

  useEffect(() => {
    dispatch(fetchHeadlines());
    dispatch(fetchBusinessDetails());
    if (headlineData && headlineData[0] && headlineData[0].headline) {
      const headline = headlineData[0].headline;
      setHeadDate(headline);
    } else {
      console.log(
        "headlineData is null or the headline property is not available."
      );
    }
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View>
        <BusinessCard
          businessName={item?.business_name}
          email={item?.email}
          phone={item?.mobile_no}
          link={item?.website}
          location={item?.business_address}
        />
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={"બિઝનેસ"}
        isBack={true}
        headline={headData}
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
            {imageError && <Text style={style.imageError}>{imageError}</Text>}
            <TextInput
              icon={iconConstant.ic_user}
              mainContainer={style.textInputStyle}
              placeholder={"તમારું નામ લખો"}
              isIconView
              value={name}
              onChangeText={(val) => setName(val)}
            />
            {nameError && <Text style={style.error}>{nameError}</Text>}
            <TextInput
              icon={iconConstant.ic_newBusiness}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા વ્યવસાયનું નામ લખો"}
              isIconView
              value={businessName}
              onChangeText={(val) => setBusinessName(val)}
            />
            {businessNameError && (
              <Text style={style.error}>{businessNameError}</Text>
            )}
            <TextInput
              icon={iconConstant.ic_mail}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા વ્યવસાયનું ઇમેલ લખો"}
              isIconView
              value={email}
              onChangeText={(val) => setEmail(val)}
            />
            {emailError && <Text style={style.error}>{emailError}</Text>}
            <TextInput
              icon={iconConstant.ic_call}
              mainContainer={style.textInputStyle}
              placeholder={"તમારો મોબાઈલ નમ્બર લખો"}
              isIconView
              value={mobileNumber}
              onChangeText={(val) => setMobileNumber(val)}
              keyboardType={"numeric"}
            />
            {mobileNumberError && (
              <Text style={style.error}>{mobileNumberError}</Text>
            )}
            <TextInput
              icon={iconConstant.ic_social}
              mainContainer={style.textInputStyle}
              placeholder={"તમારી સોશિયલ મીડિયા લિંક નાખો"}
              isIconView
              value={socialLink}
              onChangeText={(val) => setSocialLink(val)}
            />
            {socialLinkError && (
              <Text style={style.error}>{socialLinkError}</Text>
            )}
            <TextInput
              icon={iconConstant.ic_city}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા શહેરનું નામ લખો"}
              isIconView
              value={cityName}
              onChangeText={(val) => setCityName(val)}
            />
            {cityNameError && <Text style={style.error}>{cityNameError}</Text>}
            {/* <TextInput
              icon={iconConstant.ic_village}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા ગામનું નામ લખો"}
              isIconView
              value={villageName}
              onChangeText={(val) => setVillageName(val)}
            /> */}
            <TextInput
              icon={iconConstant.ic_village}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા વ્યવસાયનું સરનામું લખો"}
              isIconView
              value={businessAddress}
              onChangeText={(val) => setBusinessAddress(val)}
            />
            {businessAddressError && (
              <Text style={style.error}>{businessAddressError}</Text>
            )}
            <Button
              title={"સાચવો"}
              buttonStyle={style.buttonStyle}
              buttonTextStyle={{ color: colors.primaryWhite }}
              onPress={formValidation}
            />
          </ScrollView>
        </View>
      ) : (
        <View style={style.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <View style={style.view}>
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
            </View> */}
            <FlatList
              data={buData}
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
    marginTop: 16,
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
  error: {
    fontSize: Height(10),
    color: colors.redColor,
    marginTop: Height(5),
    marginLeft: Width(50),
  },
  imageError: {
    fontSize: Height(10),
    color: colors.redColor,
    marginTop: Height(5),
    textAlign: "center",
  },
});
