<template>
  <div class="health">
    <h1>Health</h1>
    <health-section msg="Health Section 1"/>
    <health-section msg="Health Section 2"/>
    <health-section msg="Health Section 3"/>
  </div>
</template>

<script>
import HealthSection from './HealthSection.vue'

export default {
  name: 'health',
  props: {
    msg: String
  },
  components: {
    HealthSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
