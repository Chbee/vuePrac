import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'

// use(global 사용할 플러그인명)
Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
              const key = localStorage.key(i);
              const item = localStorage.getItem(key);
              const todoItem = JSON.parse(item);
              arr.push(todoItem);
            }
            return arr;
          }
    }
}

export const store = new Vuex.Store({
    // state: {
    //     todoItems: storage.fetch()
    // },
    // getters,
    // mutations
    modules: {
        todoApp
    }
});