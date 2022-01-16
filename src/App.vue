<script setup lang="ts">
import Home from './components/Home.vue'
import About from './components/About.vue'
import { ref } from 'vue'

const myNumber = ref('')

const dataFromChild = (data : string) => {
    myNumber.value = data
}
</script>

<template>
    <div id="nav">
        <router-link to="/">Home</router-link> | 
        <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <Home msg="Hello Vue 3 + TypeScript + Vite"  :myNum ="myNumber"/>
    <About msg="Message from App.vue" @personalNumber="dataFromChild" />

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
