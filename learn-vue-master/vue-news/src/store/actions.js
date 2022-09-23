import { fetchData, fetchUserData, fetchAskDetail } from '../api/index'

export default {
    // context가 기본 인자
    // promis
    // FETCH_DATAS({ commit }, name) {
    //     return fetchData(name)
    //         .then((response) => {
    //             commit('SET_DATAS', response.data) 
    //             return response
    //         })
    //         .catch(error => console.log(error))
    // }
    // ,
    // async
    async FETCH_DATAS({ commit }, name) {
        try {
            const response = await fetchData(name);
            commit('SET_DATAS', response.data)
            return response
        } catch (error) {
            console.log(error)
        }
    }
    ,
    // FETCH_USER({ commit }, id) {
    //     return  fetchUserData(id)
    //         .then((response) => {
    //             commit('SET_USER', response.data)
    //             return response
    //         })
    //         .catch(error => console.log(error))
    // }
    async FETCH_USER(context, id) {
        const response = await  fetchUserData(id)
        context.commit('SET_USER', response.data)
        return response
    }
    ,
    // FETCH_ASK_DETAIL({ commit }, id) {
    //     fetchAskDetail(id)
    //         .then((response) => {
    //             commit('SET_ASK_DETAIL', data)
    //             return response
    //         })
    //         .catch(error => console.log(error))
    // }
    async FETCH_ASK_DETAIL(context, id) {
        const response = await fetchAskDetail(id)
        context.commit('SET_ASK_DETAIL', data)
        return response
    }
}
