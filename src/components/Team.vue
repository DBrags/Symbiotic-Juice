<template>
  <div class="team">
    <h3>Team</h3>
    <b-card-group>
      <b-card v-for="(teammate, index) in team" :key="index" :title="teammate.name" :img-src="teammate.pic" img-alt="Image" img-top>
        <b-card-text>
          {{ teammate.description }}
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>


export default {
  name: 'team',
  data() {
    return {
      team :[
        { name: "Michael Gander", pic: require('../assets/gander.jpg'), description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis auctor purus, eu sagittis velit auctor eget. Suspendisse pharetra lectus eu dolor aliquet, at tempus massa porta. Aliquam mollis nisl neque, quis feugiat arcu elementum quis. Suspendisse potenti. In tristique dui metus, at pretium odio pellentesque in. Nulla ut lacinia felis. Mauris ultrices orci a suscipit commodo. Aliquam cursus, eros nec euismod convallis, arcu orci tincidunt est, nec auctor sapien ipsum nec sapien. Mauris sagittis ultricies felis. Suspendisse potenti. Aliquam ultrices eleifend risus, rutrum accumsan velit. Nunc condimentum, sapien sit amet luctus molestie, nisl quam faucibus enim, vitae rutrum nisl felis vitae erat. Donec imperdiet turpis quis commodo lobortis." },
        { name: "Cory Wrongdogongo Fong", pic: require('../assets/cory.jpg'), description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis auctor purus, eu sagittis velit auctor eget. Suspendisse pharetra lectus eu dolor aliquet, at tempus massa porta. Aliquam mollis nisl neque, quis feugiat arcu elementum quis. Suspendisse potenti. In tristique dui metus, at pretium odio pellentesque in. Nulla ut lacinia felis. Mauris ultrices orci a suscipit commodo. Aliquam cursus, eros nec euismod convallis, arcu orci tincidunt est, nec auctor sapien ipsum nec sapien. Mauris sagittis ultricies felis. Suspendisse potenti. Aliquam ultrices eleifend risus, rutrum accumsan velit. Nunc condimentum, sapien sit amet luctus molestie, nisl quam faucibus enim, vitae rutrum nisl felis vitae erat. Donec imperdiet turpis quis commodo lobortis." },
        { name: "Reza Kay", pic: require('../assets/reza.jpg'), description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis auctor purus, eu sagittis velit auctor eget. Suspendisse pharetra lectus eu dolor aliquet, at tempus massa porta. Aliquam mollis nisl neque, quis feugiat arcu elementum quis. Suspendisse potenti. In tristique dui metus, at pretium odio pellentesque in. Nulla ut lacinia felis. Mauris ultrices orci a suscipit commodo. Aliquam cursus, eros nec euismod convallis, arcu orci tincidunt est, nec auctor sapien ipsum nec sapien. Mauris sagittis ultricies felis. Suspendisse potenti. Aliquam ultrices eleifend risus, rutrum accumsan velit. Nunc condimentum, sapien sit amet luctus molestie, nisl quam faucibus enim, vitae rutrum nisl felis vitae erat. Donec imperdiet turpis quis commodo lobortis." }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
