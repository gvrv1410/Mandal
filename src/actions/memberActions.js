import { apiConst, POST } from "../helper/apiConstant";
import makeAPIRequest from "../helper/global";

export const memberAdd = (payload) => {
    return (dispatch) =>
        makeAPIRequest(POST, apiConst.addMember, payload.data, null, null)
            .then(async (res) => {
                payload.onSuccess(res?.data);
                dispatch({
                    type: USER_LOGIN,
                    paylod: res?.data
                })
            })
            .catch((err) => {
                payload.onFail(err);
            });
};
