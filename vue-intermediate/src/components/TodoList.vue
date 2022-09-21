<template>
  <div>
      <ul>
          <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
              <i class="checkBtn fas fa-check" v-on:click="toggleComplete(todoItem)" v-bind:class="{checkBtnCompleted: todoItem.completed}">v</i>
              <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
              <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                  <a><i class="fa-solid fa-trash"></i>-</a>
              </span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    // 인스턴스 생성될때 호출
    data: function() {
        return {
            todoItems: [],
            isChecked: false
        }
    },
    created: function() {
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                var item = localStorage.getItem(key);
                var todoItem = JSON.parse(item);
                this.todoItems.push(todoItem);
            }
        }
    },
    methods: {
        removeTodo: function(todoItem, index) {
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        },
        toggleComplete: function(todoItem) {
            todoItem.completed = !todoItem.completed;
            // 로컬스토리지 갱신
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}

</style>