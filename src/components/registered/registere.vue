<template>
<!-- 该页面为详情购物车页面的弹出页面 -->
  <div>
    <div class="registere-box">
      <div :style="{width:'6.3rem'}">
        <img :src="list_pic_url" alt="">
      </div>
      <div class="registere-box-box">
        <p>价格： ￥{{retail_price}} 元</p>
        <p>库存：{{goods_number}} <span>{{goods_unit}}</span></p>
      </div>
    </div>
    <h3 :style="[{textAlign:'left'},{padding:'0rem 1rem'},{fontWeight:'400'}]">数量：</h3>
    <div :style="[{padding:'1rem 0.5rem'},{textAlign:'left'}]"><van-stepper @change="funValue" v-model="value" /></div>
  </div>
</template>
<script>
import {Pingpa} from '@/require/api'
export default {
  data(){
    return {
      datad:'',
      value: 1,
      retail_price:'',
      goods_unit:'',
      goods_number:'',
    }
  },
  props:['list_pic_url','signall'],
  methods:{
    funValue(){
      this.$emit('sennd',this.value);
    }
  },
  watch:{
    signall:{
      handler(ol,ne){
        this.value=1;
      }
    }
  },
  created(){
    let id=this.$route.params.id;
    Pingpa({'id':id}).then(res=>{
      this.datad=res.data.info;
      this.retail_price=this.datad.retail_price;
      this.goods_unit=this.datad.goods_unit
      this.goods_number=this.datad.goods_number
    }).catch(err=>{
      console.log(err);
    })
  },
  

}

</script>

<style lang='less'>
.registere-box{
  margin-top: 1.5rem;
  padding: .9rem;
  display: flex;
  .registere-box-box{
    padding:0rem 1.5rem;
    p{
      padding: 0.8rem 0rem;
      text-align: left;
      font-size: 0.8rem;
    }
  }
}

</style>