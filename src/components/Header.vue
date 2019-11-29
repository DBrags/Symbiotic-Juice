<template>
  <div class="header">
    <b-navbar toggleable="lg">
    <b-navbar-brand href="">Symbiotic Juice</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"/>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-link to="home">Home</b-link>
        <b-link to="juices">Juices</b-link>
        <b-link to="health">Health</b-link>
        <b-link to="locations">Locations</b-link>
        <b-link to="about">About</b-link>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
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
nav {
  background: #42b983;
}
a {
  color: #000000;
  padding: 1%;
}
</style>
