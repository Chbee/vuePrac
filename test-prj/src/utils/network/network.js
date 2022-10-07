import { axiosInstace } from './axiosInstance'
import methods from '../../constants/methods.json'

class Network {

    send({ method, meta, data, params, url }) {
        return axiosInstace(setConfig({ method, meta, data, params, url }))
    }
}

export default new Network()

function setParam(url, params) {

    if (!params && url && typeof (url) === 'string' && url.indexOf('{') === -1) return { url, params }

    const objectList = Object.keys(params).map((key) => [key, params[key]])

    for (const info of objectList) {
        const key = info[0]
        const value = info[1]

        if (url.indexOf(key) !== -1) {
            url = url.replace(`{${key}}`, `${value}`)
            delete params[key]
        }
    }

    return { url, params }
}

function setData(method, data) {
    return method === methods.GET ? undefined : data
}

function setHeaders(data) {
    return data ? { 'Content-Type': 'application/json' } : undefined
}

function setConfig({ method, meta, data, params, url }) {
    return {
        baseURL: process.env.VUE_APP_API_BASE_URL,
        method,
        ...setParam(url, params),
        data: setData(method, data),
        headers: setHeaders(data),
        meta
    }
}