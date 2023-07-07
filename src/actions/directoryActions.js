import { apiConst, GET } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";
import {
  FETCH_VILLAGE_MEMBER_FAILURE,
  FETCH_VILLAGE_MEMBER_SUCCESS,
  GET_MEMBER_FAILURE,
  GET_MEMBER_SUCCESS,
  TOTAL_MEMBER_DIRECTOR_FAILURE,
  TOTAL_MEMBER_DIRECTOR_SUCCESS,
} from "./type";

export const fetchTotalDirectorMember = () => {
  return (dispatch) =>
    makeAPIRequest(GET, apiConst.totalMemberDirector, null, null, null)
      .then((res) => {
        dispatch({
          type: TOTAL_MEMBER_DIRECTOR_SUCCESS,
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: TOTAL_MEMBER_DIRECTOR_FAILURE,
          payload: err,
        });
      });
};

export const fetchDirectorFamily = (payload) => {
  return (dispatch) =>
    makeAPIRequest(
      GET,
      `${apiConst.villageMember}?village=${payload}`,
      null,
      null,
      null
    )
      .then((res) => {
        dispatch({
          type: FETCH_VILLAGE_MEMBER_SUCCESS,
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_VILLAGE_MEMBER_FAILURE,
          payload: err,
        });
      });
};

export const fetchGetMember = (payload) => {
  return (dispatch) =>
    makeAPIRequest(
      GET,
      `${apiConst.getMember}?member_id=${payload}`,
      null,
      null,
      null
    )
      .then((res) => {
        dispatch({
          type: GET_MEMBER_SUCCESS,
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_MEMBER_FAILURE,
          payload: err,
        });
      });
};
