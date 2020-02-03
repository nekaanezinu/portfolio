<template>
  <div id="app">
    <sidebar />
    <projects />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'app',
  components: {
    Sidebar,
    Projects
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}
</style>
