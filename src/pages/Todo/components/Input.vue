<script setup lang="ts">

import { ref, Ref } from 'vue'
import { todoStore } from '../../../stores/Todo/todo';

const store = todoStore()
const todo: Ref<string> = ref('')
const addTodo = ():void => {
    store.$state.todos.push(todo.value)
    todo.value = ''
}
</script>

<template>
    <div id="input-container">
        <input type="text" name="todo" id="name" v-model="todo" @keyup.enter="addTodo">
        <label for="name" ></label>
    </div>
</template>

<style scoped>
#input-container {
    width: 70%;
    height: 40px;
    margin: 0 auto;
}
input {
    width: 100%;
    height: 100%;
    padding-left: 8px;
    outline: none;
    border: none;
    border-radius: 4px;
    font-family: 'Kaushan Script', cursive;
    letter-spacing: 2px;
}
</style>