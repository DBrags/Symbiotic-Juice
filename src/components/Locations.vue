<template>
  <div class="locations">
    <h1>Locations</h1>
    <location-section msg="Location Section 1"/>
    <location-section msg="Location Section 2"/>
    <location-section msg="Location Section 3"/>
  </div>
</template>

<script>
import LocationSection from './LocationSection.vue'

export default {
  name: 'locations',
  props: {
    msg: String
  },
  components: {
    LocationSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
