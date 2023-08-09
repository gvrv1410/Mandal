import { apiConst, GET, PATCH, POST } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import {
  ADD_BUSINESS_DETAILS_FAILURE,
  ADD_BUSINESS_DETAILS_SUCCESS,
  BUSINESS_FETCH_FAILURE,
  BUSINESS_FETCH_SUCCESS,
} from "./type";

export const fetchBusinessDetails = () => {
  return (dispatch) =>
    makeAPIRequest(GET, apiConst.businessDetail, null, null, null)
      .then((res) => {
        dispatch({
          type: BUSINESS_FETCH_SUCCESS,
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: BUSINESS_FETCH_FAILURE,
          payload: err,
        });
      });
};

export const addBusinessDetails = (payload) => {
  return (dispatch) =>
    makeAPIRequest(
      POST,
      apiConst.addBusinessDetail,
      payload?.formData,
      null,
      null
    )
      .then((res) => {
        payload?.onSuccess(res?.data);
        dispatch({
          type: ADD_BUSINESS_DETAILS_SUCCESS,
          payload: res?.data,
        });
      })
      .catch((err) => {
        payload?.onFail(err);
        dispatch({
          type: ADD_BUSINESS_DETAILS_FAILURE,
          payload: err,
        });
      });
};
