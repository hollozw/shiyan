<template>
  <div id="app">
    <router-view/>
    <Tabar v-if="$route.meta.bool"></Tabar>

  </div>
</template>

<script>
import  Tabar from '@/components/tabar/tabar.vue'
export default {
  data(){
    return{}
  },
  components:{
    Tabar,
  }
}


</script>

<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 1.8rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
