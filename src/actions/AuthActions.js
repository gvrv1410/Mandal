import { POST, apiConst } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import { ADD_TODO } from "./type";

export const loginUser = (payload) => {
  return (dispatch) =>
    makeAPIRequest(POST, apiConst.login, payload.data, null, null)
      .then((res) => {
        payload.onSuccess(res?.data);
      })
      .catch((err) => {
        payload.onFail(err);
      });
};
