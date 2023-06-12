import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const makeAPIRequest = async (
    method,
    url,
    data,
    headers = {
        'Content-Type': 'application/json'
    },
    params,
) =>
    new Promise(async (resolve, reject) => {
        const token = await AsyncStorage.getItem('idToken');
        const options = {
            method,
            url,
            data,
            params,
            headers
        };

        if (token) {
            options.headers = { "auth-token": token }
        }

        if (headers && token) {
            options.headers = { ...headers, ...{ "auth-token": token } }
        }


        console.log('headers : ---', token);

        axios(options)
            .then(async (response) => {
                if (response?.status === 200 || response?.status === 201) {
                    resolve(response);
                }
                else {
                    reject(response);
                }
            })
            .catch(async (error) => {
                reject(error);
            });
        return null;
    });

export default makeAPIRequest;
