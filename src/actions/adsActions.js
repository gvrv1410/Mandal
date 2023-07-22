import { apiConst, GET } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import { ADS_FETCH_FAILURE, ADS_FETCH_SUCCESS } from "./type";

export const fetchAds = () => {
  return (dispatch) =>
    makeAPIRequest(GET, apiConst.fetchAdsDetails, null, null, null)
      .then((res) => {
        dispatch({
          type: ADS_FETCH_SUCCESS,
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ADS_FETCH_FAILURE,
          payload: err,
        });
      });
};
