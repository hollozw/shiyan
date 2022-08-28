<template>
  <div>
    <div class="lists">
      <ul>
        <li v-for="(item,index) in dataa" :key='index' @click="fun(item)">{{item}}</li>
      </ul>
      <p>没有更多了~</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    fun(v){
      this.$emit('sendd',v);
    }
  },
  props:['dataa'],
}
</script>

<style lang="less">
.lists{
  ul{
    background-color: white;

    li{
      padding: 0.5rem;
      text-align: left;
    }
  }
  p{
    font-size: 1.1rem;
    padding: 0.8rem;
    color: #383838;
  }
}
</style>