<template>
  <div class="box-imgg">
    <van-image 
      :src="brand.list_pic_url"
    />
    <div class="box-imgg-box">{{brand.name}}</div>
    <p :style="{padding:'1rem'}">{{brand.simple_desc}}</p>
  </div>
</template>

<script>
import {brandDetails} from '@/require/api'
export default {
  data(){
    return {
      brand:"",
    }
  },
  methods:{
  },
  created(){
    let ids=this.$route.params.id;
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration:1000,
    });
    brandDetails({"id":ids}).then(res=>{
        let {brand}=res.data;
        this.brand=brand;
      }).catch(err=>{
        console.log(err);
      })
  }
}
</script>

<style lang='less'>
.box-imgg{
  position: relative;
  .box-imgg-box{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: white;
    
  }
}

</style>