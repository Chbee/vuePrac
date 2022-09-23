import { fetchData, fetchUserData, fetchAskDetail } from '../api/index'

export default {
    // context가 기본 인자
    FETCH_NEWS(context) {
        fetchData('news')
            .then(response => context.commit('SET_NEWS', response.data))
            .catch(error => console.log(error))
    }
    ,
    FETCH_DATAS({ commit }, name) {
        fetchData(name)
            .then(({ data }) => commit('SET_DATAS', data))
            .catch(error => console.log(error))
    }
    ,
    FETCH_USER({ commit }, id) {
        fetchUserData(id)
            .then(({ data }) => commit('SET_USER', data))
            .catch(error => console.log(error))
    }
    ,
    FETCH_ASK_DETAIL({ commit }, id) {
        fetchAskDetail(id)
            .then(({ data }) => commit('SET_ASK_DETAIL', data))
            .catch(error => console.log(error))
    }
}
