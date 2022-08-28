<template>
<!-- 该模块为底部栏目 -->
  <div>
    <!-- 底部栏目 -->
    <div class="tabarr">
      <van-tabbar route v-model="active" @change="onChange"  >
        <van-tabbar-item icon="home-o"  to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="label-o"  to='/topic'>专题</van-tabbar-item>
        <van-tabbar-item icon="apps-o" to='/category'>分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o"  to='/gouwu'>购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o"  to='/my'>我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <!-- 底部栏目结束 -->
  </div>
</template>

<script>
export default {
    data(){
        return {
          active:0,
        }
    },
    methods:{
      onChange(index){
        // console.log(index)
        this.active=index
      }
    }
}
</script>

<style>
.tabarr{
  width: 100%;
  /* color: rgb(214, 0, 0); */
}
</style>