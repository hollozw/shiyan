<template>
  <div>
    <div class="boxxx">
        <van-grid :border="false" :column-num="1">
          <van-grid-item v-for='(item,index) in datas' :key="index">
            <van-image :src="item.scene_pic_url" />
            <div class="tipp">{{item.title}}</div>
            <div class="listt">{{item.subtitle}}</div>
            <div class="btnn">￥{{item.price_info.toFixed(2)}}</div>
          </van-grid-item>
        </van-grid>
    <van-pagination v-model="currentPage" :page-count="2" mode="simple" 
    :style="[{'margin-top':'1rem'},{'backgroundColor':'white'},{'width':'100%'}]"
    @change="pages(currentPage)"
    />
    </div>

  </div>
</template>

<script>
import {Topics} from '@/require/api'

export default {
  data(){
    return {
      datas:'',
      currentPage:1,
    }
  },
  methods:{
    pages(val){
      Topics({"page":val,'size':10}).then(res=>{
        let {data} =res.data;
        this.datas=data
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  created(){
    Topics({"page":1,'size':10}).then(res=>{
      // console.log(res.data);
      let {data} =res.data;
      this.datas=data
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style lang='less'>
.boxxx{
  padding-bottom: 5rem;
  img{
    width: 100%;
  }
  .tipp,.listt,.btnn{
    width: 10rem;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 0.6rem;
  }
  .tipp{
    padding: .8rem;
  }
  .btnn{
    padding: 1rem;
    color: #8b0000;
  }
}
</style>