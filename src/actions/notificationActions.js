import { apiConst, GET } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import {
  DONER_FETCH_FAILURE,
  DONER_FETCH_SUCCESS,
  NOTIFICATION_FETCH_FAILURE,
  NOTIFICATION_FETCH_SUCCESS,
} from "./type";

export const fetchNotification = () => {
  return (dispatch) =>
    makeAPIRequest(GET, apiConst.fetchNotification, null, null, null)
      .then((res) => {
        dispatch({
          type: NOTIFICATION_FETCH_SUCCESS,
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: NOTIFICATION_FETCH_FAILURE,
          payload: err,
        });
      });
};
