import { apiConst, GET } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import { COMMITY_FETCH_FAILURE, COMMITY_FETCH_SUCCESS } from "./type";

export const fetchCommity = () => {
  return (dispatch) =>
    makeAPIRequest(GET, apiConst.fetchCommity, null, null, null)
      .then((res) => {
        dispatch({
          type: COMMITY_FETCH_SUCCESS,
          payload: res?.data?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: COMMITY_FETCH_FAILURE,
          payload: err,
        });
      });
};
