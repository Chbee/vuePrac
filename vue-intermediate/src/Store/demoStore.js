import Vue from 'vue'
import Vuex from 'vuex'

// use(global 사용할 플러그인명)
Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        price: 100
    },
    getters: {
        originalPrice(state) {
            return state.price
        },
        doublePrice(state) {
            return state.price * 2
        },
        triplePrice(state) {
            return state.price * 3
        }
    }
})