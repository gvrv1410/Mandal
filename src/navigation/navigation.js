import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/home";
import { navigationRef } from "./navigationRef";
import LoginScreen from "../screens/login";
import { CustomDrawer } from "../components";
import DirectorScreen from "../screens/director";
import ComityScreen from "../screens/comity";
import DonorScreen from "../screens/donor";
import MarriageScreen from "../screens/marriage";
import EventScreen from "../screens/event";
import BusinessScreen from "../screens/business";
import JobsScreen from "../screens/jobs";
import BloodScreen from "../screens/blood";
import FamilyScreen from "../screens/family";
import NewsScreen from "../screens/news";
import StudentScreen from "../screens/student";
import ContactScreen from "../screens/contact";
import AdsScreen from "../screens/ads";
import HeadOfFamilyScreen from "../screens/headOfFamily";
import ResultScreen from "../screens/result";
import SponsorScreen from "../screens/sponsor";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Director" component={DirectorScreen} />
    <Stack.Screen name="Comity" component={ComityScreen} />
    <Stack.Screen name="Donor" component={DonorScreen} />
    <Stack.Screen name="Marriage" component={MarriageScreen} />
    <Stack.Screen name="Event" component={EventScreen} />
    <Stack.Screen name="Business" component={BusinessScreen} />
    <Stack.Screen name="Jobs" component={JobsScreen} />
    <Stack.Screen name="Blood" component={BloodScreen} />
    <Stack.Screen name="Family" component={FamilyScreen} />
    <Stack.Screen name="News" component={NewsScreen} />
    <Stack.Screen name="Student" component={StudentScreen} />
    <Stack.Screen name="Contact" component={ContactScreen} />
    <Stack.Screen name="Ads" component={AdsScreen} />
    <Stack.Screen name="HeadOfFamily" component={HeadOfFamilyScreen} />
    <Stack.Screen name="Result" component={ResultScreen} />
    <Stack.Screen name="Sponsor" component={SponsorScreen} />
  </Drawer.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Login"
  >
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Main"
      >
        <Stack.Screen name="Main" component={AuthStack} />
        <Stack.Screen name="Onboarding" component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
