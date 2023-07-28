import { apiConst, GET } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import { DONER_FETCH_FAILURE, DONER_FETCH_SUCCESS } from "./type";

export const fethDonor = (payload) => {
  return (dispatch) =>
    makeAPIRequest(GET, apiConst.donerDetail, null, null, null)
      .then((res) => {
        dispatch({
          type: DONER_FETCH_SUCCESS,
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: DONER_FETCH_FAILURE,
          payload: err,
        });
      });
};
