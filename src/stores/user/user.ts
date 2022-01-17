import { defineStore } from 'pinia';

export const userStore = defineStore('counter', {
    state: () => {
        return { 
            name: 'Eduardo' 
        }
    },
    actions: {
        changeName() {
            this.name = 'Xiang'
        }
    }
})