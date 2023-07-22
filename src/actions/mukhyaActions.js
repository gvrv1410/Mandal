import { apiConst, GET } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import { MUKHYA_FETCH_FAILURE, MUKHYA_FETCH_SUCCESS } from "./type";

export const fetchMukhya = () => {
  return (dispatch) =>
    makeAPIRequest(GET, apiConst.fetchMukhiya, null, null, null)
      .then((res) => {
        dispatch({
          type: MUKHYA_FETCH_SUCCESS,
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: MUKHYA_FETCH_FAILURE,
          payload: err,
        });
      });
};
