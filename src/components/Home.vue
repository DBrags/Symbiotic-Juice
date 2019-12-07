<template>
  <div class="main">
    <carousel />
    <mission /> 
    <farms />
    <b-card-group>
      <b-card>
        <b-card-text>
          <simple-menu />
        </b-card-text>
      </b-card>
      <b-card>
        <b-card-text>
          <social-media />
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
import Farms from './Farms.vue'
import Mission from './Mission.vue'
import SimpleMenu from './SimpleMenu.vue'
import SocialMedia from './SocialMedia.vue'

export default {
  name: 'home',
  components: {
    Carousel,
    Farms,
    Mission,
    SimpleMenu,
    SocialMedia
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
