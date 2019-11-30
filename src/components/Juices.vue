<template>
  <div class="juices">
    <h1>Juices</h1>
    <animation msg="Jar Animation"/>
    <animation msg="Menu Animation"/>
    <symbiotic-video />
  </div>
</template>

<script>
import Animation from './Animation.vue'
import SymbioticVideo from './SymbioticVideo.vue'

export default {
  name: 'juices',
  components: {
    Animation,
    SymbioticVideo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
