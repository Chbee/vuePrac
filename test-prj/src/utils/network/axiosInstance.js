import axios from 'axios'
import { getAuthFromCookie } from '../cookies/cookies'

const axiosInstace = axios.create( {timeout: 4000} )

axiosInstace.interceptors.request.use(
    function(config) {
        /*
        login check
        */

        const auth = getAuthFromCookie()
        if (auth) 
        {
            config.headers.Authorization = `Bearer ${auth}`
            return config
        }

        delete config.headers.Authorization
        
        return config
    },

    function(error) {
        return Promise.reject(error)
    }
)

axiosInstace.interceptors.response.use(
    function(response) {
        return response
    },
    function(error) {
        return Promise.reject(error)
    }
)

export { axiosInstace }