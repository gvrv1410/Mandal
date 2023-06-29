import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DropShadow from "react-native-drop-shadow";
import { Header } from "../../components";
import { ads } from "../../helper/dummyData";
import iconConstant from "../../helper/iconConstant";
import { colors } from "../../utils";
import { Height, Width } from "../../utils/responsive";

const AdsScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={style.mainContainer}>
      <Header title={"જાહેરાત"} isBack={true} isRight={true} isFiler={true} />
      <View style={style.mainContainer}>
        <FlatList
          data={ads}
          renderItem={({ item }) => {
            return (
              <View style={style.flatView}>
                <Text style={style.dateText}>{item.date}</Text>
                <DropShadow style={style.shadow}>
                  <View style={style.view}>
                    <Image source={item.ads} style={style.image} resizeMode='contain' />
                    <View style={style.rowView}>
                      <Text style={style.text}>વધુ</Text>
                      <TouchableOpacity onPress={() => navigation.navigate('AdsDetails', { data: item, img: iconConstant.ic_forward })}>
                        <Image source={iconConstant.ic_forward} style={style.icon} resizeMode='contain' />
                      </TouchableOpacity>
                    </View>
                  </View>
                </DropShadow>
              </View>
            )
          }}
        />
      </View>
    </View>
  );
};

export default AdsScreen;


const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryWhite
  }, shadow: {
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  }, view: {
    height: Height(250),
    width: Width(360),
    backgroundColor: colors.primaryWhite,
    alignSelf: 'center',
    borderRadius: Width(5),
    marginTop: Height(10)
  }, flatView: {
    marginHorizontal: Width(20)
  }, dateText: {
    fontSize: Height(10),
    color: colors.gray,
    textAlign: 'right',
    marginTop: Height(30)
  }, image: {
    width: Width(360),
    height: Height(200),
    borderRadius: Width(5)
  },
  icon: {
    height: Height(13),
    width: Width(10)
  }, rowView: {
    flexDirection: 'row', alignItems: 'center',
    marginTop: Height(10),
    justifyContent: 'space-between',
    marginHorizontal: Width(20)
  }, text: {
    fontSize: Height(15),
    color: colors.primary,
    fontWeight: '500'
  }
})
