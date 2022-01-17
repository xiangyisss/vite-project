<script setup lang="ts">
</script>

<template>
    <div id="nav">
        <router-link :to="{ name : 'Home' }">Home</router-link>  |  
        <router-link :to="{ name : 'About' }">About</router-link>
    </div>
    <router-view />
</template>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#app {
  font-family: 'Kaushan Script', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#b46684;
  background-color: #ffdfd1;
  width: 100vw;
  min-height: 100vh;
  letter-spacing: 2px;
}
#nav {
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    text-decoration: none;
    color: #b46684; 
}
</style>
