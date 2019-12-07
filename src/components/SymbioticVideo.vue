<template>
  <div class="video">
    <b-embed 
      type="embed"
      aspect="16by9"
      :src="video.src"
    ></b-embed>
  </div>
</template>

<script>
export default {
  name: 'symbiotic-video',
  data() {
    return {
      video: {
        src: 'https://www.youtube.com/embed/p6FblZ7cRyo'
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
