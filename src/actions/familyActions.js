import { apiConst, GET } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import {
  BLOOD_DETAILS_FAILURE,
  BLOOD_DETAILS_SUCCESS,
  FMAILY_FETCH_FAILURE,
  FMAILY_FETCH_SUCCESS,
} from "./type";

export const fetchFamily = (payload) => {
  console.log({ payload });
  return (dispatch) =>
    makeAPIRequest(
      GET,
      `${apiConst.mukhiyaFamilyGet}?mukhiyaId=${payload}`,
      null,
      null,
      null
    )
      .then((res) => {
        dispatch({
          type: FMAILY_FETCH_SUCCESS,
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FMAILY_FETCH_FAILURE,
          payload: err,
        });
      });
};
