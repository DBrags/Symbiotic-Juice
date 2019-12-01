<template>
  <div class="header">
    <b-navbar toggleable="lg">
    <b-navbar-brand href="">Symbiotic Juice</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"/>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-link v-for="(route, index) in routes" :key="index" :to="route.path">{{ route.name }}</b-link>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'symbiotic-header',
  data() {
    return {
      routes :[
        { path: "/", name: "Home" },
        { path: "/juices", name: "Juices" },
        { path: "/health", name: "Health" },
        { path: "/locations", name: "Locations" },
        { path: "/about", name: "About" }
      ]
    }
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
  padding: 0em 1em;
}
</style>
