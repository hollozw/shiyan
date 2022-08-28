<template>
  <div>
    
    <!-- <transition name="van-slide-right">
      <router-view></router-view>
    </transition> -->
          <router-view></router-view>
    <!-- 隐藏 -->
    <div v-show='$route.path == "/home"'>
    <!-- 搜索模块 -->
      <Searchk></Searchk>
    <!-- 搜索模块结束 -->
    
    <!-- 轮播图模块 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in imgp" :key='index'><img :src="item.image_url" alt="" ></van-swipe-item>
    </van-swipe>
    <!-- 轮播图模块结束 -->


    <!-- 分类栏 -->
    <van-grid clickable :column-num="5">
      <van-grid-item v-for="(item,index) in channel" :key='index' :icon="item.icon_url" :text="item.name" @click="changeBrand(item.id)" />
    </van-grid>
    <!-- 分类栏开始 -->

    <!-- 品牌制造商直供 -->
    <div class="infor">
      <div class="infor-top">品牌制造商直供</div>
          <ul class="infor-center-ul">
            <li class="infor-center-li" v-for="(item,index) in brandList" :key="index">
              <div @click="changeBrand1(item.id)">
                <h4>{{item.name}}</h4>
                <p>￥ {{item.floor_price.toFixed(2)}}</p>
                <img :src="item.pic_url" alt="">
              </div>
            </li>
          </ul>
    </div>
    <!-- 品牌制造商直供结束 -->


    <!-- 周一周四·新品首发 -->
    <div class="newgoods">
      <div class="newgoods-top">周一周四·新品首发</div>
      <ul class="newgoods-ul">
        <li class="newgoods-li" v-for="(item,index) in newGoodsList" :key="index">
          <div @click="newGoods(item.id)">
            <img :src="item.list_pic_url" alt="">
            <div class="newgoods-box1">{{item.name}}</div>
            <div class="newgoods-box2">￥ {{item.retail_price.toFixed(2)}}</div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 周一周四·新品首发结束 -->


    <!-- 人气推荐 -->
    <div class="tuijian">
      <div class="tuijian-box">人气推荐</div>
      <van-card v-for="(item,index) in hotGoodsList" :key='index'
        :price="item.retail_price"
        :desc="item.goods_brief"
        :title="item.name"
        :thumb="item.list_pic_url"
      >
      </van-card>
    </div>
    <!-- 人气推荐结束 -->
    
    
    <!-- 专业精选 -->
    <div class="carefully">
      <div class="tuijian-box">专题精选</div>
      <van-swipe :loop="false" :width="316" :height="256" :show-indicators="false">
          <van-swipe-item v-for="(item,index) in topicList" :key="index">
            <div class="carefully-img">
              <img :src="item.avatar" alt="">
              <h2>{{item.title}}<span>￥{{item.price_info}}</span></h2>
              <p>{{item.subtitle}}</p>
            </div>
          </van-swipe-item>
          
        </van-swipe>
    </div>
    <!-- 专业精选结束 -->

    <!-- 内容部分 -->
    <div class="substance-s">
      <div class="substance" v-for="(item,index) in categoryList" :key="index">
        <div class="substance-h4">{{item.name}}</div>
        <ul>
          <li v-for="(itemm,indexx) in item.goodsList" :key="indexx">
            <div @click="navpack(itemm.id)">
              <img :src="itemm.list_pic_url" alt="">
              <div class="substance-box1">{{itemm.name}}</div>
              <div class="substance-box2"> ￥ {{itemm.retail_price.toFixed(2)}} 元 </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 内容部分结束 -->
    </div>

    <div :style="[{width:'100%'},{height:'4rem'}]"></div>



  </div>
    



</template>

<script>
import {GetHomeList} from '@/require/api.js'
import Searchk from '@/components/searchs/Searchk.vue'
export default {
  name: 'HomeView',
  data() {
      return {
        value: '',
        imgp:'',
        channel:'',
        brandList:'',
        newGoodsList:'',
        hotGoodsList:'',
        topicList:'',
        channel:'',
        categoryList:'',
      };
    },
    components:{
      Searchk
    },
    methods: {
      searchh(){
        this.sign=true;
        console.log(this.$route.meta.bool);
        this.$router.push('/home/searching');
      },
      changeBrand(id){
        this.$router.push('/channel?id='+id);
      },
      //品牌模块
      changeBrand1(id){
        this.$router.push('/brand/'+id);
      },
      //新品首发
      newGoods(id){
        this.$router.push('/details/'+id);
      },
      //商品内容
      navpack(id){
        this.$router.push('/details/'+id)
      },
    },

    created(){
      
      GetHomeList().then(res=>{
        let {banner,channel,newGoodsList,hotGoodsList,brandList,topicList,categoryList}=res.data;
        this.imgp=banner;
        this.channel=channel;
        this.brandList=brandList;
        this.newGoodsList=newGoodsList;
        this.hotGoodsList=hotGoodsList;
        this.topicList=topicList;
        this.categoryList=categoryList;
      }).catch(err=>{
        console.log(err);
      });
    }
}
</script>
<style lang="less">
  /* 基础配置 */
  *{
    margin: 0px;
    padding: 0px;
    color: black;
    text-decoration: none;
    border: 0px solid black;
  }
  body{
    background-color: rgb(237, 237, 237);
  }
  img{
    width: 100%;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
  }
  /* 基础配置结束 */



  /* 品牌制造商直供 */

  .infor{
    width: 100%;
    margin-top: 1.2rem;
    background-color: white;
  }
  .infor .infor-top{
    height: 3rem;
    width: 100%;
    text-align: center;
    line-height: 3rem;
  }

  .infor-center{
    width: 100%;
  }
  .infor-center-ul{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
  }
  .infor-center-ul .infor-center-li{
    width: 50%;
    padding-right: 0.1rem;
    /* background-color: pink; */
    box-sizing: border-box;
    position: relative;
  }

  .infor-center-ul .infor-center-li img{
    width: 100%;
  }

  .infor-center-ul .infor-center-li p,h4{
    position:absolute;
  }
  .infor-center-ul .infor-center-li h4{
    top: 0.6rem;
    left: 0.6rem;
    font-size: 0.9rem;
  }
  .infor-center-ul .infor-center-li p{
    left: 0.6rem;
    top: 2.4rem;
    font-size: 1rem;
    color: #8b0000;
  }
  /* 品牌制造商直供结束 */

  /* 周一周四·新品首发 */
  .newgoods{
    background-color: white;
    margin-top: 1.2rem;
  }
  .newgoods-top{
    height: 3rem;
    width: 100%;
    line-height: 3rem;
    text-align: center;
  }
  .newgoods-ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0.6rem;
    box-sizing: border-box;
  }
  .newgoods-li{
    width: 50%;
    /* background-color: pink; */

  }
  .newgoods-li img{
    width: 100%;
  }
  .newgoods-box2{
    color: #8b0000;
  }
  /* 周一周四·新品首发结束 */




  /* 人气推荐 */
  .tuijian{
    margin-top: 0.6rem;
    background-color: rgb(255, 255, 255);
    width: 100%;
  }
  .tuijian-box{
    height: 3rem;
    line-height: 3rem;
    font-size: 1.2rem;
  }
  .newgoods-li{
    font-size: 0.9rem;
  }

  /* 人气推荐结束 */



  /* 专题精选 */
  .carefully{
    margin-top: 0.6rem;
    background-color: rgb(255, 255, 255);

  }

  .carefully .carefully-img{
    width: 100%;
    height: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    box-sizing: border-box;
  }
  .carefully .carefully-img img{
    width: 18rem;
    height: 12rem;
  }
  .carefully .carefully-img h2{
    font-size: 1rem;
    width: 90%;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .carefully .carefully-img h2 span{
    color: #8b0000;
    margin-left: 0.6rem;
    
  }
  .carefully .carefully-img p{
    font-size: 0.9rem;
    color: #ccc;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 90%;
  }
  /* 专题精选结束 */

  /* 内容部分 */
  .substance-s{
    margin-top: 1.2rem;
    background-color: white;

  }
  .substance{
    width: 100%;
    background-color: white;
  }
  .substance-h4{
    height: 3rem;
    line-height: 3rem;
    width: 100%;
    text-align: center;
    background-color: white;

  }
  
  .substance ul{
    width: 100%;
    display: flex;
    flex-flow: wrap;
    background-color: white;

  }
  .substance ul li{
    width: 50%;
    background-color: white;

  }

  .substance ul li .substance-box2{
    color: #8b0000;
    height: 2.4rem;
    font-size: 0.9rem;
    line-height: 2.4rem;
  }
  .substance ul li .substance-box1{
    font-size: 0.9rem;

  }
  /* 内容部分结束 */



</style>