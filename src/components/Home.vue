<template>
  <div class="main">
    <h1>Home</h1>
    <carasouelle />
    <mission />
    <simple-menu />
    <social-media />
  </div>
</template>

<script>
import Carasouelle from './Carasouelle.vue'
import Mission from './Mission.vue'
import SimpleMenu from './SimpleMenu.vue'
import SocialMedia from './SocialMedia.vue'

export default {
  name: 'home',
  components: {
    Carasouelle,
    Mission,
    SimpleMenu,
    SocialMedia
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
