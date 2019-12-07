<template>
  <div class="mission">
    <div id="container">
        <div id="box" :style="{ left: mission.left }" @click="missionClick">
          <p id="mission-statement">{{ mission.text }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import Kute from 'kute.js'

export default {
  name: 'mission',
  data() {
    return {
      mission: {
        text: 'Click Me!',
        left: ((window.innerWidth / 2) - (350 / 2) - 100) + 'px'
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    missionClick:function() {
    //identify the element
    var el = document.querySelector('#box');

    //built the tween object
    var tween = Kute.fromTo(el, 
      {rotateX:0},{rotateX:360}
    );

    tween.start()

    this.mission.text = 'Mission statement'

    },
    handleResize:function() {
      this.mission.left = ((window.innerWidth / 2) - (350 / 2) ) + 'px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#box {
    width: 350px; height: 150px;
    position: absolute; top:35px; left: 0px;
    font-size: 40px;
    line-height:150px;
    text-align: center;
    border-radius: 10px;
    background-color: #42B983;
}
#container {
    position: relative;
    display: block;
    height: 200px;
}

</style>
