import React, { useEffect } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import MainNavigator from "./src/navigation/navigation";

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
  return <MainNavigator />;
};

export default App;
