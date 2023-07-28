import { apiConst, GET } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import { BLOOD_DETAILS_FAILURE, BLOOD_DETAILS_SUCCESS } from "./type";

export const fetchBlood = (payload) => {
  return (dispatch) =>
    makeAPIRequest(
      GET,
      `${apiConst.bloodDetails}?blood=${payload}`,
      null,
      null,
      null
    )
      .then((res) => {
        dispatch({
          type: BLOOD_DETAILS_SUCCESS,
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: BLOOD_DETAILS_FAILURE,
          payload: err,
        });
      });
};
