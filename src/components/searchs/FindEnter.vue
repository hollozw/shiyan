<template>
  <div>
    <div v-show="false" ref='name'>{{value}}</div> 
    <!-- 当处于按下回车键时页面 -->
    <van-dropdown-menu :overlay='true'>
      <van-dropdown-item v-model="value1" :options="option1" disabled />
      <van-dropdown-item v-model="value2" :options="option2" @change='changeing' title="价格"/>
      <van-dropdown-item v-model="value3" :options="option3" title="分类"/>
    </van-dropdown-menu>

    <div :style="[{'height':'2.5rem'},{'backgroundColor':'white'}]"></div>
    <div class="boxs-list">
      <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="(item,index) in informations.data" :key='index' @click="tiaoZ(item.id)">
          <van-image :src="item.list_pic_url"/>
          <div class="goods-box1">{{item.name}}</div>
          <div class="goods-box2">￥ {{item.retail_price.toFixed(2)}}元</div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import {searchWord} from '@/require/api.js'
export default {
    data() {
      return {
        valuer:'',
        value1: 0,
        value2: 'a',
        value3: 0,
        option1: [
          { text: '综合', value: 0 },
        ],
        option2: [
          { text: '价格由高到低', value: 'a' },
          { text: '价格由低到高', value: 'b' },
        ],
        option3: [
          { text: '全部', value: 0 },
          { text: '居家', value: 1 },
        ],
        datas:'',
        filterCategory:''
      };
    },
    methods: {
      tiaoZ(v){
        this.$router.push('/details/'+v)
      },
      //改变
      func(){
           let arr=this.informations.data
           for(let i=1;i<arr.length;i++){
            for(let j=0;j<arr.length-i;j++){
              if(arr[j].retail_price>arr[j+1].retail_price){
                let l=arr[j];
                  arr[j]=arr[j+1];
                  arr[j+1]=l;
               }
            }
          }
          this.informations.data=arr;
      },
      func1(){
        let arr=this.informations.data
           for(let i=1;i<arr.length;i++){
            for(let j=0;j<arr.length-i;j++){
              if(arr[j].retail_price<arr[j+1].retail_price){
                let l=arr[j];
                  arr[j]=arr[j+1];
                  arr[j+1]=l;
               }
            }
          }
          this.informations.data=arr;
      },
      changeing(value){
        // console.log(value);
        if(value=='b'){
          this.func();
          return
        }else if(value=='a'){
          this.func1();
          return
        }
      }
    },
    watch:{
      valuer:{
        handler(ne,ol){
          if(ne==false){
            return;
          }
          searchWord({"keyword":ne}).then(res=>{
            let {filterCategory,data}=res.data;
            this.datas=data;
            this.filterCategory=filterCategory
            let i=0;
            filterCategory.forEach(k => {
                this.option3[i]={
                  text:k.name,
                  value:i
                }
                i++;
            });
          }).catch(err=>{
            console.log(err);
          })
        }
      }
    },
    props:['informations','value'],
    beforeUpdate(){
      this.valuer=this.$refs.name.innerHTML; 
    },
}
</script>

<style lang="less">
.boxs-list{
  .van-grid-item__content{
    margin: 0;
    padding: 0;
    padding-bottom: 0.6rem;
    margin-bottom: 0.6rem;
    img{
      width: 100%;
      height: 100%;
    }
    .goods-box1{
      font-size: 0.9rem;
    }
    .goods-box2{
      font-size: 0.9rem;
      color: #8b0000;
    }
  }
}
</style>