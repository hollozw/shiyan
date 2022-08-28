<template>
<!-- 该模块为搜索框模块 -->
  <div class="sreach-box">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @input='oninput'
      />
    </form>
    <!-- 引入三个组件 -->
  <FindLoad @sending='fun' @sendp='fun' v-show="signal==1" :historyKeywordList='historyKeywordList' :hotKeywordList="hotKeywordList"></FindLoad>
  <Finding @sendd='fun' :dataa='dataa' v-show="signal==2" ></Finding>
  <FindEnter :value='value' :informations='informations' v-show="signal==3"></FindEnter>
  </div>
</template>

<script>
import FindLoad from '@/components/searchs/FindLoad.vue'
import Finding from '@/components/searchs/Findind.vue'
import FindEnter from '@/components/searchs/FindEnter.vue'
import {SearchLists,Searching,searchWord} from '@/require/api.js'

export default {
  data() {
    return {
      value: '',
      signal:1,
      historyKeywordList:'',
      hotKeywordList:'',
      dataa:'',
      informations:'',
    };
  },
  methods: {
    //按下回车
    onSearch(val) {
      this.signal=3;
      searchWord({"keyword":val}).then(res=>{
        this.informations=res.data;
      }).catch(err=>{
        console.log(err);
      })
    },


    //返回上一页
    onCancel() {
      history.go(-1);
    },


    //输入文字
    oninput(val){
      this.signal=2;
      Searching({"keyword":val}).then(res=>{
        this.dataa=res.data;
      }).catch(err=>{
        console.log(err);
      })
    },


    fun(v){
      this.value=v;
      this.signal=3;
      searchWord({"keyword":this.value}).then(res=>{
        this.informations=res.data;
      }).catch(err=>{
        console.log(err);
      })
    },
  },
  components:{
    FindLoad,
    Finding,
    FindEnter,
  },
  created(){
    SearchLists().then(res=>{
      let {historyKeywordList,hotKeywordList} =res.data
      this.historyKeywordList=historyKeywordList;
      this.hotKeywordList=hotKeywordList;
    }).catch(err=>{
      console.log(err);
    })
  }
};
</script>

<style lang="less">
.sreach-box{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgb(237, 237, 237);
  z-index: 99;
}
</style>