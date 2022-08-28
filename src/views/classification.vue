<template>
  <div>
    <van-tabs v-model="active" @click="onclick">
        <van-tab 
          :title="item.name" v-for="(item,index) in brotherCategory" :key="index" 
        >
            <p :style="[{'paddingTop':'0.5rem'}]" >{{item.name}}</p>
            <p :style="[{'fontSize':'0.4rem'},{'padding':'0.5rem 0rem'}]">{{item.front_name}}</p>
        </van-tab>
        
        <van-grid :border="false" :column-num="2">
            <van-grid-item v-for='(item,index) in datalists' :key="index" @click="onCk(item.id)">
                <van-image :src="item.list_pic_url" />
                <div class="box-box1">{{item.name}}</div>
                <div class="box-box2">￥ {{item.retail_price.toFixed(2)}}</div>
            </van-grid-item>
            
        </van-grid>
    </van-tabs>
  </div>
</template>

<script>
import {Checkeds,GoodsLists} from '@/require/api'
export default {
  data() {
    return {
      active: 3,
      brotherCategory:'',
      dataId:'',
      datalists:'',
    };
  },

  methods:{
    onclick(name,val){
      let a=this.brotherCategory[name].id;
      GoodsLists({"categoryId":a,"page":1,"size":100}).then(ress=>{
        let {data} =ress.data;
        this.datalists=data;
      }).catch(errr=>{
        console.log(errr);
      })
    },
    onCk(id){
      this.$router.push('/details/'+id)
    }

  },
  
  created(){
    //获取id部分
    this.dataId=this.$route.query.id;
    Checkeds({"id":this.dataId}).then(res=>{
        let {brotherCategory} = res.data;
        this.active=(res.data.currentCategory.show_index-1);
        // console.log(this.active);
        if(this.active==2){
          this.active=3;
        }else if(this.active==7){
          this.active=2;
        }
        this.brotherCategory=brotherCategory
        

        //遍历商品部分
        GoodsLists({"categoryId":this.dataId,"page":1,"size":100}).then(ress=>{
            // console.log(ress.data);
            let {data} =ress.data;
            this.datalists=data;
        }).catch(errr=>{
            console.log(errr);
        })
    }).catch(err=>{
        console.log(err);
    })
  }
};
</script>

<style lang='less'>
.box-box1, .box-box2 {
    font-size: 0.8rem;
    padding-top: 0.5rem ;
}
.box-box2{
    color: sienna;
    padding-top:0.3rem
}

</style>