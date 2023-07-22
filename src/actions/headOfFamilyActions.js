import { apiConst, GET } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import { HEAD_FAMILY_FAILURE, HEAD_FAMILY_SUCCESS } from "./type";

export const fetchHeadFamily = () => {
  return (dispatch) =>
    makeAPIRequest(GET, apiConst.fetchHeadofFamilyDetail, null, null, null)
      .then((res) => {
        dispatch({
          type: HEAD_FAMILY_SUCCESS,
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: HEAD_FAMILY_FAILURE,
          payload: err,
        });
      });
};
