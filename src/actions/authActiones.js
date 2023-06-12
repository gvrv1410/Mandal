import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiConstants, POST } from "../helper/apiConstants";
import makeAPIRequest from "../helper/global";


export const login = async (data) => {
    return makeAPIRequest(POST, `${apiConstants.login}`, data, null, null).then(async (res) => {
        const { data } = res.data
        await AsyncStorage.setItem("idToken", JSON.stringify(data))
        return data;
    }).catch((err) => {
        return err;
    });
}