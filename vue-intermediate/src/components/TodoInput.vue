<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
          <a><i class="fa-solid fa-square-plus addBtn"></i>+</a>
      </span>
      <modal-view v-if="showModal" @close="showModal = false">
        <h3 slot="header">
            경고!
            <a><i class="closeModalBtn fas fa-times" @click="showModal = false">X</i></a>
        </h3>
        <div slot="body">빈문자열입니다.</div>
      </modal-view> 
  </div>
</template>

<script>
import ModalView from './common/Modal.vue';

export default {
  components: { ModalView },
    data: function() {
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods: {
        addTodo: function() {
            if (this.newTodoItem !== '')
            {
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            }
            else
            {
                this.showModal = !this.showModal;
            }
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    background: white;
    vertical-align: middle;
}
.closeModalBtn {
    color: #42b983;
}
</style>