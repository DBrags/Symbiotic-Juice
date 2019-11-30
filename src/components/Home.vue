<template>
  <div class="main">
    <carousel />
    <simple-menu />
    <social-media />
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
import SimpleMenu from './SimpleMenu.vue'
import SocialMedia from './SocialMedia.vue'

export default {
  name: 'home',
  components: {
    Carousel,
    SimpleMenu,
    SocialMedia
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
