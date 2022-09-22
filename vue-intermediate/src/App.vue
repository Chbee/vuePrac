<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <todo-list 
        v-bind:propsdata="todoItems" 
        v-on:removeTodoItem="removeOneItem" 
        v-on:toggleTodoItem="toggleOneItem"/>
    <todo-footer v-on:deleteAllTodoItems="clearAllItems" />
  </div>
</template>

<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  // 인스턴스 생성될때 호출
  created: function() {
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                var item = localStorage.getItem(key);
                var todoItem = JSON.parse(item);
                this.todoItems.push(todoItem);
                console.log(todoItem);
            }
        }
    },
    methods: {
      addOneItem: function(todoItem) {
        var obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
      },
      removeOneItem: function(todoItem, index) {
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index, 1);
      },
      toggleOneItem: function(todoItem, index) {
        this.todoItems[index].completed = !this.todoItems[index].completed;
        // 로컬스토리지 갱신
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      },
      clearAllItems: function() {
        localStorage.clear();
        this.todoItems = [];
      }
    },
  components: {
    TodoHeader,
    TodoFooter,
    TodoInput,
    TodoList
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
