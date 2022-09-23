import Vue from 'vue'
import Vuex from 'vuex'

import * as mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        datas: [],
        user: {},
        detail: {}
    },
    getters: {
        fetchedDatas(state) {
            return state.datas
        }
        ,
        fetchedUser(state) {
            return state.user
        }
        ,
        fetchedAskDetail(state) {
            return state.detail
        }
    },
    mutations,
    // api 호출은 actions
    actions
})