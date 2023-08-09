import React, { useEffect } from "react";
import { LogBox, PermissionsAndroid, Platform, StatusBar } from "react-native";
import { persistor, store } from "./src/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import SplashScreen from "react-native-splash-screen";
import AppNavigation from "./src/navigation/AppNavigation";
import { colors } from "./src/utils";

LogBox.ignoreAllLogs();
const App = () => {
  const requestCameraPermission = async () => {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
      title: "Cool Photo App Camera Permission",
      message:
        "Cool Photo App needs access to your camera " +
        "so you can take awesome pictures.",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK",
    });
  };

  const requestStoragePermission = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );
  };
  useEffect(() => {
    if (Platform.OS === "android") {
      requestCameraPermission();
      requestStoragePermission();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        {/* <MainNavigator /> */}
        <AppNavigation />
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={colors.primaryWhite}
        />
      </PersistGate>
    </Provider>
  );
};

export default App;
