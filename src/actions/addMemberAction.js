import AsyncStorage from "@react-native-community/async-storage";
import { POST, apiConst } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import { USER_FAILURE, USER_LOGIN } from "./type";

export const addMember = (payload) => {
  return (dispatch) =>
    makeAPIRequest(POST, apiConst.login, payload?.data, null, null)
      .then(async (res) => {
        payload.onSuccess(res?.data);
        dispatch({
          type: USER_LOGIN,
          paylod: res?.data,
        });
      })
      .catch((err) => {
        payload.onFail(err);
        dispatch({
          type: USER_FAILURE,
          paylod: err,
        });
      });
};
