<template>
  <div class="mission">
    <b-button class="btn" @click="transform">Mission</b-button>
    <div id="container">
        <div class="box">Mission Animation</div>
    </div>
  </div>
</template>

<script>
import Kute from 'kute.js'

export default {
  name: 'mission',
  props: {
    msg: String
  },
  methods: {
    transform: function(){
    console.log('transform')
    //identify the element
    var el = document.querySelector('.box');

    //built the tween object
    var tween = Kute.fromTo(el, 
      {left:50},{left:500},
      {repeat: 1,yoyo:true, easing: 'easingCubicOut'}
    );

    //start the animation
    tween.start();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
    position: relative;
    display: block;
    height: 200px;
}

.box {
    width: 350px; height: 150px;
    position: absolute; top:35px; left: 50px;
    font-size: 40px;
    line-height:150px;
    text-align: center;
    border-radius: 10px;
    background-color: #42B983;
}

</style>
