<template>
  <div id="app">
    <symbiotic-header />
    <symbiotic-footer />
  </div>
</template>

<script>
import SymbioticHeader from './components/SymbioticHeader.vue'
import SymbioticFooter from './components/SymbioticFooter.vue'

export default {
  name: 'app',
  components: {
    SymbioticHeader,
    SymbioticFooter,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
