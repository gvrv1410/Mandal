import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
// import { memberAdd } from "../../actions/memberActions";
import { fetchHeadlines } from "../../actions/headlinesActions";

const EditMemberScreen = () => {
  const openPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setImage(image.path);
    });
  };
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  useEffect(() => {
    dispatch(fetchHeadlines());
  }, []);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cityName, setCityName] = useState("");
  const [villageName, setVillageName] = useState("");
  const [maternalVillageName, setMaternalVillageName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [socialLink, setSocialLink] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [marriage, setMarriage] = useState("");
  const [education, setEducation] = useState("");
  const [business, setBusiness] = useState("");

  const bloodGroups = ["o+", "A+", "B+", "AB+", "O-", "A-", "B-", "AB-"];
  const edu = [
    "10 પાસ ",
    "12 પાસ ",
    "ગ્રેજ્યુએટ (સાઈન્સ)",
    "ગ્રેજ્યુએટ (કોમર્સ)",
    "ગ્રેજ્યુએટ (આર્ટસ)",
    " પોસ્ટ ગ્રેજ્યુએટ (કોમર્સ)",
    " પોસ્ટ ગ્રેજ્યુએટ (સાઈન્સ)",
    " પોસ્ટ ગ્રેજ્યુએટ (આર્ટસ)",
    "એન્જીનીયરીંગ ",
    "ફાર્મસી ",
    "મેડિકલ ",
    "ડિપ્લોમા એન્જીનીયરીંગ ",
    "અન્ય ",
    "પ્રાથમિક ",
    "માધ્યમિક ",
    "ઉચ્ચતર માધ્યમિક ",
    "NA",
  ];

  const gen = ["પુરુષ", "સ્ત્રી"];
  const mar = [
    "પરિણીત",
    "અપરિણીત",
    "સગાઇ થઇ ગયેલ ",
    "વિધવા/ વિધુર",
    "છૂટાછેડા",
  ];

  const bui = [
    "વ્યવસાય ",
    "નિવૃત ",
    "આંગડિયા કુરિયર ",
    "નોકરી ",
    "શિક્ષક / પ્રોફેસર ",
    "Doctor",
    "Immigration Business",
    "ફાર્મસી ",
    "CA",
    "ચોક્સી  & જવેલર્સ ",
    "ખેતી ",
  ];

  // const onAddMember = () => {
  //   const obj = {
  //     data: {},
  //   };

  //   dispatch(memberAdd(obj));
  // };

  return (
    <View style={style.mainContainer}>
      <SafeAreaView style={{ backgroundColor: colors.primary }} />
      <SafeAreaView style={style.mainContainer}>
        <Header
          title={"મારુ પરિવાર "}
          isBack={true}
          headline={
            headlineData && headlineData[0] && headlineData[0]?.headline
          }
        />
        <View style={{ flex: 1, marginHorizontal: 16 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
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
                  source={images.profile}
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
              value={name}
              onChangeText={(val) => setName(val)}
              placeholderTextColor={colors.gray}
            />
            <TextInput
              icon={iconConstant.ic_mUser}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા માતાનું નામ લખો"}
              isIconView
              value={motherName}
              onChangeText={(val) => setMotherName(val)}
              placeholderTextColor={colors.gray}
            />
            <TextInput
              icon={iconConstant.ic_date}
              mainContainer={style.textInputStyle}
              placeholder={"તમારી જન્મતારીખ લખો"}
              isIconView
              value={birthDate}
              onChangeText={(val) => setBirthDate(val)}
              placeholderTextColor={colors.gray}
            />
            <TextInput
              icon={iconConstant.ic_city}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા શહેરનું નામ લખો"}
              isIconView
              value={cityName}
              onChangeText={(val) => setCityName(val)}
              placeholderTextColor={colors.gray}
            />
            <TextInput
              icon={iconConstant.ic_village}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા ગામનું નામ લખો"}
              isIconView
              value={villageName}
              onChangeText={(val) => setVillageName(val)}
              placeholderTextColor={colors.gray}
            />
            <TextInput
              icon={iconConstant.ic_village}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા મોસાળનું ગામ લખો"}
              isIconView
              value={maternalVillageName}
              onChangeText={(val) => setMaternalVillageName(val)}
              placeholderTextColor={colors.gray}
            />
            <DropDownView
              placeHolder="તમારું બ્લડ ગ્રુપ પસંદ કરો"
              mainContainer={{ zIndex: 1 }}
              onSelect={(val) => setBloodGroup(val)}
              items={bloodGroups}
            />
            <DropDownView
              placeHolder="તમારી જાતિ પસંદ કરો"
              mainContainer={{ zIndex: 1 }}
              onSelect={(val) => setGender(val)}
              items={gen}
            />
            <DropDownView
              placeHolder="તમારી વૈવાહિક સ્તિથી પસંદ કરો"
              mainContainer={{ zIndex: -1 }}
              onSelect={(val) => setMarriage(val)}
              items={mar}
            />
            <DropDownView
              placeHolder="તમારું શિક્ષણ પસંદ કરો"
              mainContainer={{ zIndex: 1 }}
              onSelect={(val) => setEducation(val)}
              items={edu}
            />
            <DropDownView
              placeHolder="તમારા વ્યવસાયનું પસંદ કરો"
              mainContainer={{ zIndex: 1 }}
              onSelect={(val) => setBusiness(val)}
              items={bui}
            />
            <TextInput
              icon={iconConstant.ic_call}
              mainContainer={style.textInputStyle}
              placeholder={"તમારો મોબાઈલ નમ્બર લખો"}
              isIconView
              value={mobileNumber}
              onChangeText={(val) => setMobileNumber(val)}
              placeholderTextColor={colors.gray}
              keyboardType="numeric"
            />
            <TextInput
              icon={iconConstant.ic_social}
              mainContainer={style.textInputStyle}
              placeholder={"તમારી સોશિયલ મીડિયા લિંક નાખો"}
              isIconView
              value={socialLink}
              onChangeText={(val) => setSocialLink(val)}
              placeholderTextColor={colors.gray}
            />
            <TextInput
              icon={iconConstant.ic_mail}
              mainContainer={style.textInputStyle}
              placeholder={"તમારું ઈમેલ લખો"}
              isIconView
              value={email}
              onChangeText={(val) => setEmail(val)}
              placeholderTextColor={colors.gray}
            />
            <TextInput
              icon={iconConstant.ic_location}
              mainContainer={style.textInputStyle}
              placeholder={"તમારું સરનામું લખો"}
              isIconView
              value={address}
              onChangeText={(val) => setAddress(val)}
              placeholderTextColor={colors.gray}
            />
            <TextInput
              icon={iconConstant.ic_bLocation}
              mainContainer={style.textInputStyle}
              placeholder={"તમારા વ્યવસાયનું સરનામું લખો"}
              isIconView
              value={businessAddress}
              onChangeText={(val) => setBusinessAddress(val)}
              placeholderTextColor={colors.gray}
            />
          </ScrollView>
          <Button
            title={"સાચવો"}
            buttonStyle={style.buttonStyle}
            buttonTextStyle={{ color: colors.primaryWhite }}
            // onPress={onAddMember}
          />
        </View>
      </SafeAreaView>
    </View>
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

export default EditMemberScreen;
