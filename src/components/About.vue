<template>
  <div class="about">
    <h1>About</h1>
    <intro />
    <mission />
    <team />
    <farms />
  </div>
</template>

<script>
import Intro from './Intro.vue'
import Farms from './Farms.vue'
import Team from './Team.vue'
import Mission from './Mission.vue'

export default {
  name: 'about',
  components: {
    Intro,
    Farms,
    Mission,
    Team
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
