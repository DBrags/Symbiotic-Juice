<template>
  <div class="video">
    <b-embed 
      type="embed"
      aspect="16by9"
      src="https://www.youtube.com/embed/p6FblZ7cRyo"
      allowFullscreen
    ></b-embed>
  </div>
</template>

<script>
export default {
  name: 'symbiotic-video',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
