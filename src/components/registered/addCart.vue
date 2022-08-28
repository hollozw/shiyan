<template>
<!-- 该模块为购物车详情页面的组件 -->
  <div>
     <!-- 购买页面 -->
        <van-popup
            v-model="show"
            closeable
            :style="[{height:'50%'},{width:'100%'}]"
            position="bottom"
        >
        <div class='gouwu-box'>
            <Registered :list_pic_url='list_pic_url' :signall='signall' @sennd="fun"></Registered>
        </div>
        </van-popup>


        <div class="buyingym">
        <van-goods-action>
            <van-goods-action-icon icon="cart-o" text="购物车" :badge="goodsCount" @click="judgeing()"/>
            <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
            <van-goods-action-button type="warning" text="加入购物车" @click='onClickButton'/>
            <van-goods-action-button type="danger" text="立即购买" @click='onClickButton1'/>
        </van-goods-action>
        </div>
    <!-- 购买页面结束 -->

  </div>
</template>

<script>
import Registered from '@/components/registered/registere.vue'
import {getNumbers} from '@/require/api'
import {addCart} from '@/require/api'
import {Pingpa} from '@/require/api'

export default {
    data(){
        return {
            show: false,
            cartTotal:'',
            biaozhi:true,
            number:1,
            infoid:'',
            productList:'',
            goodsCount:0,
            signall:true,
        }
    },
    components:{
        Registered
    },
    props:['list_pic_url','showa'],
    methods:{
        onClickButton() {
            let token= sessionStorage.getItem('token');
            if(!token){
                this.$toast.loading({
                    message: '点击购物车跳转...',
                    forbidClick: true,
                    duration:1000,
                });
                return;
            }
            if(this.show){
                addCart(this.infoid,this.productList[0].id,this.number).then(res=>{
                let {cartTotal} = res.data;
                this.goodsCount=cartTotal.goodsCount;
                this.number=1;
                this.signall= !this.signall;
                this.$toast.success('添加成功');
                }).catch(err=>{
                    console.log(err);
                    this.$toast.fail('添加失败');

                })
            }
            this.show= !this.show;
        },
        onClickButton1(){
            let token= sessionStorage.getItem('token');
            if(!token){
                this.$toast.loading({
                    message: '点击购物车跳转...',
                    forbidClick: true,
                    duration:1000,
                });
                return;
            }
            this.show= !this.show;
        },
        fun(v){
            this.number=v;
        },
        //判断是否存在token值，若存在则直接跳转到购物车模块，若未存在则跳转登入模块
        judgeing(){
            if(sessionStorage.getItem('token')){
                this.$router.push('/gouwu');
            }else{
                this.$router.push('/my');
            }
        }
    },
    watch:{
        showa:{
            handler(ol,ne){
                this.show=true;
            }
        }
    },
    created(){
        let ids=this.$route.params.id;
        let token = sessionStorage.getItem('token');
        getNumbers(token).then(res=>{
            let {cartTotal} =res.data;
            this.cartTotal=cartTotal;
            if(sessionStorage.getItem('token')){
                this.goodsCount=cartTotal.goodsCount;
            }
        }).catch(err=>{
            console.log(err);
        })
        Pingpa({"id":ids}).then(res=>{
            let {info,productList} = res.data;
            this.productList=productList;
            this.infoid=info.id;
        }).catch(err=>{
            console.log(err);
        })


    }
}
</script>

<style>
.buyingym{
    position: relative;
    z-index: 10000;
}
</style>