<script setup lang="ts">
import { userStore } from '../stores/user/user';
import { storeToRefs  } from 'pinia';

const props = defineProps<{ 
    msg: string 
    myNum: string
}>()

const store = userStore()
const { name } = storeToRefs(store)
store.changeName()
store.$state = { name: 'Pinia'}

</script>

<template>
    <h1>{{ msg }}</h1>
    <p>This is my number- {{props.myNum}}</p>
    <p>{{name}}</p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
