import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Height, Width } from "../../utils/responsive";
import DropShadow from "react-native-drop-shadow";
import { colors } from "../../utils";
import { detailsData } from "../../helper/dummyData";
const MemberCard = ({ DetailData }) => {
  const isoDate = DetailData?.birth_date;
  const getMonthName = (monthNum) => {
    const months = [
      "જાન્યુઆરી",
      "ફેબ્રુઆરી",
      "માર્ચ",
      "એપ્રિલ",
      "મે",
      "જૂન",
      "જુલાઈ",
      "ઑગસ્ટ",
      "સપ્ટેમ્બર",
      "ઑક્ટોબર",
      "નવેમ્બર",
      "ડિસેમ્બર",
    ];
    return months[monthNum];
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  };

  const dateObj = new Date(isoDate);

  const day = dateObj.getDate();
  const month = getMonthName(dateObj.getMonth());
  const year = dateObj.getFullYear();

  const formattedTime = formatTime(dateObj);

  const formattedDateTime = `${day} ${month}, ${year} | ${formattedTime}`;

  return (
    <DropShadow style={styles.shadow}>
      <ScrollView
        style={styles.view}
        showsVerticalScrollIndicator={false}>
        <View style={styles.rowView}>
          <Text style={[styles.text, { width: Width(150) }]}>જન્મતારીખ :</Text>
          <Text style={[styles.text, { width: Width(170) }]}>૨૮-૦૮-૧૯૮૬</Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>રાષ્ટ્ર :</Text>
          <Text style={[styles.text, { width: Width(170) }]}>ભારત</Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>શહેર :</Text>
          <Text style={[styles.text, { width: Width(170) }]}>અમરેલી</Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>ગામ :</Text>
          <Text style={[styles.text, { width: Width(170) }]}>મોણપૂરગામ</Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>મોસાળ :</Text>
          <Text style={[styles.text, { width: Width(170) }]}>મોણપૂરગામ</Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>બ્લડ ગ્રુપ :</Text>
          <Text style={[styles.text, { width: Width(170) }]}>o+</Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>જાતિ :</Text>
          <Text style={[styles.text, { width: Width(170) }]}>પુરુષ</Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>
            વૈવાહિક સ્તિથી :
          </Text>
          <Text style={[styles.text, { width: Width(170) }]}>પરિણીત</Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>શિક્ષણ :</Text>
          <Text style={[styles.text, { width: Width(170) }]}>10 પાસ</Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>વ્યવસાય :</Text>
          <Text style={[styles.text, { width: Width(170) }]}>નિવૃત</Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>
            મોબાઈલ નમ્બર :
          </Text>
          <Text style={[styles.text, { width: Width(170) }]}>૯૫૧૨૩૪૫૬૭૮</Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>
            સોશિયલ મીડિયા લિંક :
          </Text>
          <Text style={[styles.text, { width: Width(170) }]}>http://</Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>ઈમેલ :</Text>
          <Text style={[styles.text, { width: Width(170) }]}>
            avi19@gmail.com
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>સરનામું :</Text>
          <Text style={[styles.text, { width: Width(170) }]}>
            એ, ૬૦૧, રાજ રેસીડેન્સી , એ બી સી સર્કલ
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>
            વ્યવસાય સરનામું :
          </Text>
          <Text style={[styles.text, { width: Width(170) }]}>
            {DetailData?.business_adress}
          </Text>
        </View>
      </ScrollView>
    </DropShadow>
  );
};

export default MemberCard;

const styles = StyleSheet.create({
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: Height(15),
    fontWeight: "400",
    color: colors.primaryBlack,
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
  view: {
    marginTop: Height(25),
    backgroundColor: colors.primaryWhite,
    marginHorizontal: Width(20),
    borderRadius: Width(5),
    paddingHorizontal: Width(10),
    paddingVertical: Height(25),
  },
});
