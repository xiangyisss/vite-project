import { defineStore } from 'pinia';

interface State {
    todos: string[]
}

export const todoStore = defineStore('todos', {
    state: (): State => {
        return { todos : []}
    },
})