import { fetchData } from '../api/index'

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
            .then(({ data }) => commit('SET_DATAS', { data, name }))
            .catch(error => console.log(error))
    }
}
