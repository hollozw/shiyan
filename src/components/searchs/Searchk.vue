<template>
  <div>
    <van-search disabled @click="searchh()" 
        v-model="value"
        placeholder="请输入搜索关键词"
        input-align="center"
      />
  </div>
</template>

<script>
export default {
    data(){
        return {
            value: '',
        }
    },
    methods:{
        searchh(){
            this.sign=true;
            this.$router.push('/home/searching');
        },
    }
}
</script>

<style>

</style>