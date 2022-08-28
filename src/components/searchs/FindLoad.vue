<template>
<!-- 搜索模块的组件1 -->
  <div>
    <div class="histories">
      <div class="box1">
        <p>历史记录</p>
        <van-icon name="delete-o" @click="clearing()"/>
      </div>
      <div class="box2">
        <van-tag plain type="default" v-for='(item,index) in historyKeywordList' :key='index' @click="fun1(item)">{{item}}</van-tag>
      </div>
    </div>
    <div class="histories padd">
      <div class="box1">
        <p>热门搜索</p>
      </div>
      <div class="box2">
        <van-tag plain :type="item.is_hot? 'danger':'default'" v-for="(item,index) in hotKeywordList" :key='index' @click="fun2(item.keyword)">{{item.keyword}}</van-tag>
      </div>
    </div>
  </div>
</template>

<script>
import {clearData} from '@/require/api'
export default {
  data(){
    return{
      fun1(v){
        this.$emit('sending',v);
      },
      fun2(v){
        this.$emit('sendp',v);
      },
      clearing(){
        let token = sessionStorage.getItem('token');
        clearData(token).then(res=>{
          this.$router.push('/home/searching');
          location.reload();

        }).catch(err=>{
          console.log(err);
        })
      },
    }
  },
  props:["historyKeywordList","hotKeywordList"],
}
</script>

<style lang="less">
.histories{
  width: 100%;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  .box1{
    display: flex;
    justify-content: space-between;
    padding: 0.6rem;
    padding-bottom: 0rem;
  }
  .box2{
    display: flex;
    padding: .6rem;
    flex-wrap: wrap;
    .van-tag{
      margin-right: 0.6rem;
      margin-bottom: 0.6rem;
    }
  }
}
.padd{
  margin-top:1.4rem ;
}
</style>