<template>
<!-- 该模块为主页的分类模块 -->
  <div>
    <Searchk></Searchk>
    <div class="list-all"> 
      <!-- 左侧列表 -->
      <van-sidebar v-model="activeKey" :style="{width:'20%'}" @change='fun'>
        <van-sidebar-item :title="item.name" v-for="(item,index) in categoryList" :key="index" />
      </van-sidebar>

      <!-- 右侧部分 -->
      <div :style="[{width:'80%'},{padding:'0rem 0.5rem 0rem 0rem'}]">
        <!-- 右上部分 -->
        <div :style="{width:'100%'}" v-for="(item,index) in categoryList" :key="index">
          <div class="list-all-right"
          v-show='activeKey==index'
          >
          <van-image 
            :src="item.banner_url"
          />
          <div class="list-all-right-font"><span>——</span>{{item.front_name}}<span>——</span></div>
          </div>
        </div>
        <!-- 右下部分 -->        
        <div div class="list-bottom-box" >
          <p><span>——</span>居家<span>——</span></p>
          <van-grid :border="false" :column-num="3" >
            <van-grid-item v-for="(item,index) in currentCategory" :key='index' >
              <div>
                  <van-image :src="item.wap_banner_url" />
                <div class="list-box-fon">{{item.name}}</div>
              </div>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import {Catalogs} from '@/require/api'
import {Catadatas} from '@/require/api'
import Searchk from '@/components/searchs/Searchk.vue'
export default {
  data() {
    return {
      activeKey:0,

      active: 0,
      items: [
        
      ],
      categoryList:'',
      currentCategory:'',
      arr:[],
      id:'',
    }
  },
  methods:{
    fun(value){
      let data=this.categoryList[value].id;
      Catadatas({"id":data}).then(res=>{
        let {currentCategory} = res.data;
        this.currentCategory=currentCategory.subCategoryList
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  components:{
    Searchk
  },
  created(){
    Catalogs().then(res=>{
      let {categoryList,currentCategory} = res.data;
      this.categoryList=categoryList;
      this.currentCategory=currentCategory;
      let i=0;
    }).catch(err=>{
      console.log(err);
    });
    Catadatas({"id":1005000}).then(res=>{
      let {currentCategory} = res.data;
      this.currentCategory=currentCategory.subCategoryList
    }).catch(err=>{
      console.log(err);
    })
  }
};
</script>

<style lang='less'>

//列表图片部分
.list-all{
  display: flex;
  background-color: white;
  .list-all-right{
    width: 100%;
    position: relative;
    .van-image{
      width: 100%;
      height: 8.5rem;
    }
    img{
      width:100%;
      border-radius: 0.6rem;
    }
    .list-all-right-font{
      font-weight: 400;
      line-height: 8.5rem;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.384);
      top: 0;
      width: 100%;
      height: 8.5rem;
      border-radius: 0.6rem;
      color: white;
      font-size: 0.8rem;
      span{
        color: #b3b3b3;
        padding: 0rem 1.2rem;
      }
    }
  }
}
//货物部分
.list-bottom-box{
  width: 100%;
  background-color: white;
  p{
    span{
      padding: 0rem 0.7rem;
      color: #b3b3b3;
    }
  }
  .van-grid-item__content{
    padding: 1rem;
    height: 5.3rem;
    width: 100%;
    img{
      width: 1.5rem;
    }
  }
  .list-box-fon{
    font-size: 0.7rem;
  }
}
</style>