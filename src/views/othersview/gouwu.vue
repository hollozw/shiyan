<template>
<!-- 该模块为购物车模块 -->
<div>  
    <!-- 货品表单 -->
    <div class="shopping-lists" v-for="(item,index) in cartList" :key="index">
      <van-checkbox :disabled='!bool' v-model="item.checked" :style="[{width:'10%'}]" @click="checking(item.checked,item.product_id)"></van-checkbox>
      <div :style="[{width:'90%'}]">
        <van-swipe-cell >
          <van-card
            :num="item.number"
            :price="item.retail_price"
            :title="item.goods_name"
            :thumb="item.list_pic_url"
            class="goods-card"
          />
          <div class="shopping-lists-box" v-show='!bool'>
            <van-stepper :style="[{float:'right'}]" v-model="item.number" @change="getValue(item.goods_id,item.id,item.number,item.product_id)"/>
          </div>

          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="deleted(item.product_id)"/>
          </template>
        </van-swipe-cell>
      </div>
    </div>
    <!-- 货品表单结束 -->
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

    <div :style="[{width:'100%'},{height:'4rem'}]"></div>
    <AddCat :cartTotal='cartTotal' :showb='showb'  @sends="fun1" @signaling='selectAll'></AddCat>
    
</div>
</template>
<script>
import AddCat from '@/components/registered/adCart.vue'
import {cartData} from '@/require/api'
import {checkCart} from '@/require/api'
import {cartUpadte} from '@/require/api'
import {deleteData} from '@/require/api'
export default {
  data(){
    return{
      active:'',
      checked: '',
      token:'',
      cartList:'',
      //点击小选项改变全选样式
      showb:'',

      //父传子的值
      cartTotal:'',
      
      //子传父的值
      bool:true,

      value: '',

    }
  },
  methods:{
    //子传父的值(编辑)
    fun1(v){
      this.bool=v;
    },
    onChange(index){
      this.active=index
    },
    //当点击全选时改值
    selectAll(v){
      let ids='';
      this.cartList.forEach(k => {
        k.checked=v;
        ids+=(k.product_id+",")
      });
        let id=ids.substr(0, ids.length - 1)
      //发送请求
      let a =v? 1 : 0 ;
      checkCart({'isChecked':a,'productIds':id}).then(res=>{
        // console.log(res.data,'请求成功');
        let {cartList,cartTotal} =res.data;
        this.cartTotal=cartTotal;
      }).catch(err=>{
        console.log(err);
      })


    },

    //点击步进器触发
    getValue(goods_id,id,number,product_id){
      cartUpadte({'goodsId':goods_id,'id':id,'number':number,'productId':product_id}).then(res=>{
        //再次请求,获取总价
        cartData(this.token).then(res=>{
          let {cartTotal} = res.data;
          this.cartTotal=cartTotal;
        }).catch(err=>{
          console.log(err);
        })
        //再次请求,获取总价(结束)
      }).catch(err=>{
        console.log(err);
      })
    },
    //步进器触发结束


    //点击选项框时状态
    checking(checked,productIds){
      //点击切换商品选中状态
      let b=true;
      this.cartList.forEach(k=>{
        k.checked= k.checked? true:false;
        b = (b && k.checked);
      })
      this.showb=b;
      let a =checked? 1 : 0 ;
      checkCart({'isChecked':a,'productIds':productIds}).then(res=>{
        // console.log(res.data,'请求成功');
        let {cartList,cartTotal} =res.data;
        this.cartTotal=cartTotal;
      }).catch(err=>{
        console.log(err);
      })
    },
    deleted(v){
      let a=String(v)
      deleteData({'productIds':a}).then(res=>{
        let {cartList,cartTotal} =res.data;
        this.cartList=cartList;
        this.cartTotal=cartTotal;
      }).catch(err=>{
        console.log(err,'失败了');
      })
    }
  },
  created(){
    //获取token值
    this.token=sessionStorage.getItem('token');
    //获取购物车信息
    cartData(this.token).then(res=>{
      let {cartList,cartTotal} = res.data;
      this.cartList=cartList;
      this.cartTotal=cartTotal;
      let b=true;
      this.cartList.forEach(k=>{
        k.checked= k.checked? true:false;
        b = (b && k.checked);
      })
      this.showb=b;
    }).catch(err=>{
      console.log(err,'错误了');
    })
  },
  components:{
    AddCat,
  }
}
</script>

<style>
.shopping-lists{
  padding: 0rem 1rem;
  height: 8.5rem;
  background-color: white;
  display: flex;
  align-items: center;
}
/* 滑动单元 */
.goods-card {
  margin: 0;
  background-color: #fafafa;
}
.delete-button {
  height: 100%;
}

.shopping-lists-box{
  width: 100%;
  background-color: #fafafa;

}

.van-submit-bar__bar{
  margin-bottom: 3rem;
}
.tabarr{
  position: relative;
  z-index: 10000
}
</style>