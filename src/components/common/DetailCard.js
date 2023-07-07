import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Height, Width } from "../../utils/responsive";
import DropShadow from "react-native-drop-shadow";
import { colors } from "../../utils";

const DetailCard = ({ DetailData }) => {
  return (
    <DropShadow style={styles.shadow}>
      <View style={styles.view}>
        <View style={styles.rowView}>
          <Text style={[styles.text, { width: Width(150) }]}>
            માતાનું નામ :
          </Text>
          <Text style={[styles.text, { width: Width(200) }]}>
            {DetailData?.member_name}
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>જન્મતારીખ :</Text>
          <Text style={[styles.text, { width: Width(200) }]}>
            {DetailData?.birth_date}
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>શહેર :</Text>
          <Text style={[styles.text, { width: Width(200) }]}>
            {DetailData?.city_name}
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>ગામ :</Text>
          <Text style={[styles.text, { width: Width(200) }]}>
            {DetailData?.village_name}
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>
            મોસાળનું ગામ :
          </Text>
          <Text style={[styles.text, { width: Width(200) }]}>
            {DetailData?.maternal_village_name}
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>બ્લડ ગ્રુપ :</Text>
          <Text style={[styles.text, { width: Width(200) }]}>
            {DetailData?.blood_group}
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>જાતિ :</Text>
          <Text style={[styles.text, { width: Width(200) }]}>
            {DetailData?.cast}
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>
            વૈવાહિક સ્તિથી :
          </Text>
          <Text style={[styles.text, { width: Width(200) }]}>
            {DetailData?.marriage_status}
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>વ્યવસાય :</Text>
          <Text style={[styles.text, { width: Width(200) }]}>
            {DetailData?.bussiness}
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>
            મોબાઈલ નમ્બર :
          </Text>
          <Text style={[styles.text, { width: Width(200) }]}>
            {DetailData?.member_mobile_no}
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>
            સોશિયલ મીડિયા લિંક :
          </Text>
          <Text style={[styles.text, { width: Width(200) }]}>
            {DetailData?.social_media_link}
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>ઈમેલ :</Text>
          <Text style={[styles.text, { width: Width(200) }]}>
            {DetailData?.email}
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>સરનામું :</Text>
          <Text style={[styles.text, { width: Width(200) }]}>
            {DetailData?.adress}
          </Text>
        </View>
        <View style={[styles.rowView, { marginTop: Height(30) }]}>
          <Text style={[styles.text, { width: Width(150) }]}>
            વ્યવસાય સરનામું :
          </Text>
          <Text style={[styles.text, { width: Width(200) }]}>
            {DetailData?.business_adress}
          </Text>
        </View>
      </View>
    </DropShadow>
  );
};

export default DetailCard;

const styles = StyleSheet.create({
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: Height(15),
    fontWeight: "400",
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
    marginHorizontal: Width(5),
    borderRadius: Width(5),
    paddingHorizontal: Width(5),
    paddingVertical: Height(25),
  },
});
