<template>
  <div class="animation">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'animation',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
