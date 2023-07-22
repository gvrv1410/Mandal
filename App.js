import React, { useEffect } from "react";
import { LogBox, PermissionsAndroid, Platform } from "react-native";
import MainNavigator from "./src/navigation/navigation";
import { persistor, store } from "./src/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import SplashScreen from "react-native-splash-screen";

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
    if (Platform.OS === "android") {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
