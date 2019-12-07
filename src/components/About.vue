<template>
  <div class="about">
    <h1>The Team</h1>
    <intro />
    <team />
  </div>
</template>

<script>
import Intro from './Intro.vue'
import Team from './Team.vue'

export default {
  name: 'about',
  components: {
    Intro,
    Team
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
