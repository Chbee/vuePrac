import Vue from 'vue'
import Vuex from 'vuex'

import * as mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        news: [],
        datas: []
    },
    getters: {
        fetchedAsk(state) {
            return state.datas
        },
        fetchedJobs(state) {
            return state.datas
        }
    },
    mutations,
    // api 호출은 actions
    actions
})