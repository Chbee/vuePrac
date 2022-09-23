import { fetchData, fetchUserData, fetchAskDetail } from '../api/index'

export default {
    // context가 기본 인자
    FETCH_DATAS({ commit }, name) {
        return fetchData(name)
            .then((response) => {
                commit('SET_DATAS', response.data) 
                return response
            })
            .catch(error => console.log(error))
    }
    ,
    FETCH_USER({ commit }, id) {
        return  fetchUserData(id)
            .then((response) => {
                commit('SET_USER', response.data)
                return response
            })
            .catch(error => console.log(error))
    }
    ,
    FETCH_ASK_DETAIL({ commit }, id) {
        fetchAskDetail(id)
            .then((response) => {
                commit('SET_ASK_DETAIL', data)
                return response
            })
            .catch(error => console.log(error))
    }
}
