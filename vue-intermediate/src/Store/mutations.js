const addOneItem = (state, todoItem) => {
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const toggleOneItem = (state, data) => {
    const index = data.index;
    const todoItem = data.todoItem;
    state.todoItems[index].completed = !state.todoItems[index].completed;
    // 로컬스토리지 갱신
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
}

const removeOneItem = (state, data) => {
    const index = data.index;
    const todoItem = data.todoItem;
    localStorage.removeItem(todoItem.item);
    state.todoItems.splice(index, 1);
}

const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, toggleOneItem, removeOneItem, clearAllItems }