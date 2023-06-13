import { apiConst, GET, POST } from "../helper/apiConstant"
import makeAPIRequest from "../helper/global"
import { FETCH_HEADLINE_DATA_FAILURE, FETCH_HEADLINE_DATA_SUCCESS, FETCH_HEADLINE_IMAGE_FAILURE, FETCH_HEADLINE_IMAGE_SUCCESS } from "./type";

export const fetchHeadlines = () => {
    return (dispatch) =>
        makeAPIRequest(GET, apiConst.fetchHeadline, null, null, null).then((res) => {
            dispatch({
                type: FETCH_HEADLINE_DATA_SUCCESS,
                payload: res?.data.data,
            })
        }).catch((err) => {
            dispatch({
                type: FETCH_HEADLINE_DATA_FAILURE,
                payload: err,
            })
        })
}

export const fetchHeadlineImg = () => {
    return (dispatch) =>
        makeAPIRequest(POST, apiConst.headlineImg, null, null, null).then((res) => {
            dispatch({
                type: FETCH_HEADLINE_IMAGE_SUCCESS,
                payload: res?.data.data,
            })
        }).catch((err) => {
            dispatch({
                type: FETCH_HEADLINE_IMAGE_FAILURE,
                payload: err,
            })
        })
}
