import { apiConst, GET } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import { SPONSOR_FETCH_FAILURE, SPONSOR_FETCH_SUCCESS } from "./type";

export const fetchSponsor = () => {
  return (dispatch) =>
    makeAPIRequest(GET, apiConst.fetchSponsorsDetails, null, null, null)
      .then((res) => {
        dispatch({
          type: SPONSOR_FETCH_SUCCESS,
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SPONSOR_FETCH_FAILURE,
          payload: err,
        });
      });
};
