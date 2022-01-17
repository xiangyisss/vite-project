<script setup lang="ts">
import { todoStore } from '../../../stores/Todo/todo'
import { Ref, ref } from 'vue'

interface Todo {
    todo: string
}

const { todo } = defineProps<Todo>()
const store = todoStore()
const deleteTodo = ( todo : string):void => {
    const todoIndex : Ref<number> = ref(todo.indexOf(todo))
    store.$state.todos.splice(todoIndex.value, 1)
}
const deleteAllTodos = ():void => {
    store.$state.todos.splice(0, todo.length)
}
</script>

<template>
    <p>{{ todo }} <button @click="deleteTodo(todo)">Completed</button> </p>
</template>

<style scoped>
button {
    background-color: #d7b3c9;
    font-family: 'Kaushan Script', cursive;
    letter-spacing: 2px;
    border: none;
    width: 5rem;
    padding: 2px;
    margin-left: 1rem;
    cursor: pointer;
}

p {
    margin-top: 3rem;
    font-size: 1.25rem;
}
</style>