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

const state = {
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems
    }
};

const mutations = {
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
};


export default {
    state,
    getters,
    mutations
}