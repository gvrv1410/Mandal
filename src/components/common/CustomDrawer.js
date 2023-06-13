import React, { useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

import { DrawerContentScrollView } from "@react-navigation/drawer";
import { colors } from "../../utils";
import icons from "../../helper/iconConstant";
import { gridMenuData } from "../../helper/dummyData";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const CustomDrawer = ({ navigation }) => {
  const { navigate } = useNavigation();


  const appendOptions = [{
    id: 17,
    title: "નોટિફિકેશન",
    navigation: "Director",
    icon: icons.ic_notify,
  },
  {
    id: 18,
    title: "લોગ આઉટ",
    navigation: "Comity",
    icon: icons.ic_logout,
  },]

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerView}>
        <Image
          source={icons.ic_avatar}
          style={styles.iconStyle}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.usernameStyle}>Admin</Text>
          <Text style={styles.memIdStyle}>MG123</Text>
        </View>
      </View>
      <DrawerContentScrollView showsVerticalScrollIndicator={false}>
        {[...gridMenuData, ...appendOptions].map((item, index) => {
          return (
            <TouchableOpacity
              key={index.toString()}
              style={styles.menuViewStyle}
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
                navigate(item.navigation);
              }}
            >
              <Image
                source={item.icon}
                style={styles.menuIconStyle}
                resizeMode="contain"
              />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerView: {
    flexDirection: "row",
    height: 120,
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingTop: 30,
  },
  headerIconView: {
    flexDirection: "column-reverse",
    padding: 16,
  },
  iconStyle: {
    height: 60,
    width: 60,
    margin: 16,
  },
  usernameStyle: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.primaryWhite,
  },
  memIdStyle: {
    fontSize: 12,
    fontWeight: "400",
    color: colors.primaryWhite,
    marginTop: 2,
  },
  menuIconStyle: {
    height: 30,
    width: 30,
    marginEnd: 20,
  },
  menuViewStyle: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    padding: 15,
    marginBottom: 20,
  },
});

export default CustomDrawer;
