<template>
  <div class="about">
    <h1>About</h1>
    <intro />
    <team />
    <farms />
  </div>
</template>

<script>
import Intro from './Intro.vue'
import Team from './Team.vue'
import Farms from './Farms.vue'

export default {
  name: 'about',
  components: {
    Intro,
    Farms,
    Team
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
