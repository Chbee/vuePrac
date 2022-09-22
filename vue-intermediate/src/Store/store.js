import Vue from 'vue'
import Vuex from 'vuex'

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
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        toggleOneItem(state, data) {
            const index = data.index;
            const todoItem = data.todoItem;
            state.todoItems[index].completed = !state.todoItems[index].completed;
            // 로컬스토리지 갱신
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        removeOneItem(state, data) {
            const index = data.index;
            const todoItem = data.todoItem;
            localStorage.removeItem(todoItem.item);
            state.todoItems.splice(index, 1);
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
          }
    }
});