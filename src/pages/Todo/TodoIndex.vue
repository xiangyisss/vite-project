<script setup lang="ts">
    import Input from './components/Input.vue'
    import DisplayTodo from './components/DisplayTodo.vue';
    import { todoStore } from '../../stores/Todo/todo';
    import { storeToRefs } from 'pinia'
    
    const store = todoStore()
    const { todos } = storeToRefs(store)
    const deleteAllTodos = ():void => {
        store.$state.todos.splice(0, todos.value.length)
    }
</script>

<template>
    <div id="todo-container">
        <h1>Write it down your todays task</h1>
        <Input />
        <button v-if="todos.length > 1" @click="deleteAllTodos">Delete All</button>
        <DisplayTodo :todo="todo" v-for="todo in todos" :key="todo.indexOf"/>
    </div>
</template>

<style scoped>
#todo-container {
    width: 50%;
    margin: 0 auto;
}
h1 {
    margin: 3rem 0 3rem 0;
}

button {
    background-color: #d7b3c9;
    font-family: 'Kaushan Script', cursive;
    letter-spacing: 2px;
    border: none;
    width: 5rem;
    padding: 2px;
    margin-top: 1rem;
    cursor: pointer;
}
</style>