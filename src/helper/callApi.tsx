import axios from "axios";
import ValidationError from "../exception/validation";

const callApi = () => {
    const axiosInstance = axios.create({
        baseURL : 'https://snappfood.ir/mobile/v3/restaurant/'
    })

    axiosInstance.interceptors.request.use(
        (config) => {
            return config;
        },
        err => { throw err }
    )

    axiosInstance.interceptors.response.use(
        res => {
            return res;
        },
        err => {
            const res = err?.response
            if(res) {
                if(res.status === 422) {
                    throw new ValidationError(res.data.error)
                }
            }
            throw err;
        }
    )

    return axiosInstance;
}


export default callApi;
