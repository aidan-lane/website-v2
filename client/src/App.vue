<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
}

</style>
