import { apiConst, GET } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import { NEWS_FETCH_FAILURE, NEWS_FETCH_SUCCESS } from "./type";

export const fetchNews = () => {
  return (dispatch) =>
    makeAPIRequest(GET, apiConst.fetchNewsDetails, null, null, null)
      .then((res) => {
        dispatch({
          type: NEWS_FETCH_SUCCESS,
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: NEWS_FETCH_FAILURE,
          payload: err,
        });
      });
};
