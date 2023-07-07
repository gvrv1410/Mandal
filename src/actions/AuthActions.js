import AsyncStorage from "@react-native-community/async-storage";
import { POST, apiConst } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import { USER_LOGIN } from "./type";

export const loginUser = (payload) => {
  console.log(payload.data);
  return (dispatch) =>
    makeAPIRequest(POST, apiConst.login, payload.data, null, null)
      .then(async (res) => {
        await AsyncStorage.setItem("idToken", res?.data.data.auth_token);
        payload.onSuccess(res?.data);
        dispatch({
          type: USER_LOGIN,
          paylod: res?.data,
        });
      })
      .catch((err) => {
        payload.onFail(err);
      });
};
