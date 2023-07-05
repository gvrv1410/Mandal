import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Height, Width } from "../../utils/responsive";
import { colors } from "../../utils";
import imageConstant from "../../helper/imageConstant";
import iconConstant from "../../helper/iconConstant";

const DonorSubCardView = ({
  name,
  donor,
  donorby,
  donorName,
  village,
  mainContainer,
  isLocation,
  isDate,
  isDoner,
  isEvent,
  onMorePress,
  isDonerOne,
  isEventOne,
}) => {
  return (
    <View style={{ marginTop: Height(30) }}>
      <View style={[style.mainContainer, { ...mainContainer }]}>
        <Image
          source={imageConstant.donor}
          style={style.image}
        />
        <View>
          {isDoner && (
            <View>
              <Text style={style.subText}>{donor}</Text>
              <Text style={style.subText}>{donorby}</Text>
              <Text style={style.subText}>{donorName}</Text>
            </View>
          )}
          {isEvent && (
            <View>
              <Text style={style.mainText}>
                જઓ ÝવÝથતાપૂવŏક પડો, જ ે થી તેઓ આનંદ મેળવવા માટ ે ેકામ કરી શકેઅને
                દુ: ખ, કેટલાક મહાન. કારણ કે, જમ આપણે સૌથી નાના વÝતુઓ સાથે આવે છ
                ે ે, જેઅમે કેટલાક લાભ મેળવવા ￹સવાય, તે હંમેશા દુઃખદાયક શારીœરક
                òવૃિİ લે છેઆમાંથી; પરંતુ કોઈ ભૂલ શોધવાનો અિધકાર છે, જેએકનો આનંદ
                માણી શકેછેઆનંદ કેનકામી પœરણામ નથી, અથવા જેતે પીડા ટાળે છેકેતે
                નથી પœરણામી આનંદ પેદા કરેછે?
              </Text>
            </View>
          )}
          {isLocation && (
            <View style={style.rowView}>
              <Image
                source={iconConstant.ic_newLocation}
                style={style.icon}
              />
              <Text style={style.rowText}>{village}</Text>
            </View>
          )}
          {isDate && (
            <View style={[style.rowView, { justifyContent: "space-between" }]}>
              <Text
                style={style.moreText}
                onPress={onMorePress}>
                વધુ કરો
              </Text>
              <Text style={style.dateText}>૦૪ એપ્રિલ,૨૦૨૩ | ૧૦ : ૩૦ AM</Text>
            </View>
          )}
        </View>
      </View>
      <View style={style.subContainer}>
        {isDonerOne && <Text style={style.text}>{name}</Text>}
        {isEventOne && <Text style={style.text}>{name}</Text>}
      </View>
    </View>
  );
};

export default DonorSubCardView;

const style = StyleSheet.create({
  mainContainer: {
    // height: Height(142),
    width: Width(360),
    alignSelf: "center",
    borderRadius: Width(10),
    borderWidth: Height(1),
    marginTop: Height(30),
    borderColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Width(15),
    // paddingTop: Height(10),
  },
  subContainer: {
    height: Height(45),
    width: Width(300),
    backgroundColor: colors.primary,
    borderRadius: Width(5),
    alignSelf: "center",
    position: "absolute",
    marginTop: Height(10),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: Height(20),
    fontWeight: "400",
    color: colors.primaryWhite,
  },
  subText: {
    fontSize: Height(10),
    color: colors.gray,
    marginTop: Height(5),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Height(5),
  },
  rowText: {
    fontSize: Height(10),
    fontWeight: "500",
    marginLeft: Width(10),
  },
  icon: {
    height: Height(10),
    width: Width(8),
  },
  image: {
    height: Height(75),
    width: Width(75),
    resizeMode: "contain",
    marginRight: Width(5),
  },
  moreText: {
    fontSize: Height(12),
    fontWeight: "600",
    color: colors.primary,
  },
  dateText: {
    fontSize: Height(10),
    fontWeight: "400",
    color: colors.gray,
  },
  mainText: {
    fontSize: Height(10),
    color: colors.gray,
    marginTop: Height(5),
    width: Width(245),
  },
});
