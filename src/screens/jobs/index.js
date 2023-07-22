import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageCropPicker from "react-native-image-crop-picker";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../../actions/headlinesActions";
import { Button, Header, TextInput } from "../../components";
import iconConstant from "../../helper/iconConstant";
import imageConstant from "../../helper/imageConstant";
import { colors } from "../../utils";
import { Height } from "../../utils/responsive";

const JobsScreen = () => {
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
  const dispatch = useDispatch();
  const { headlineData } = useSelector((state) => state?.fetchHeadlines);
  const [headData, setHeadDate] = useState();
  useEffect(() => {
    dispatch(fetchHeadlines());
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
    <View style={{ flex: 1, backgroundColor: colors.primaryWhite }}>
      <Header
        title={"નોકરીઓ"}
        isBack={true}
        headline={headData}
      />
      <View style={{ flex: 1, marginHorizontal: 16 }}>
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
          icon={iconConstant.ic_jobHeader}
          mainContainer={style.textInputStyle}
          placeholder={"તમારા નોકરીનું શીર્ષક લખો"}
          isIconView
          // value={name}
          // onChangeText={(val) => setName(val)}
        />
        <TextInput
          icon={iconConstant.ic_location}
          mainContainer={style.textInputStyle}
          placeholder={"તમારું હાલનું સરનામુંં લખો"}
          isIconView
          // value={name}
          // onChangeText={(val) => setName(val)}
        />
        <TextInput
          icon={iconConstant.ic_resume}
          mainContainer={style.textInputStyle}
          placeholder={"તમારી રેસુમે ફાઈલ નાખો"}
          isIconView
          // value={name}
          // onChangeText={(val) => setName(val)}
        />
        <Button
          title={"વિનંતી મોકલો"}
          buttonStyle={style.buttonStyle}
          buttonTextStyle={style.buttonTextStyle}
        />
      </View>
    </View>
  );
};
export default JobsScreen;

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
  buttonTextStyle: {
    color: colors.primaryWhite,
    fontSize: Height(16),
  },
});
