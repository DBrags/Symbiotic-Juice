<template>
  <div class="header">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/juices">Juices</router-link>
      <router-link to="/health">Health</router-link>
      <router-link to="/locations">Locations</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
  padding: 1em;
}
</style>
