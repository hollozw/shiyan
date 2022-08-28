<template>
<!-- 该模块为应用详情模块 -->
  <div class="box-box1">
    <!-- 轮播图 -->
    <div v-show="gallery.length" class="carousel">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for='(item,index) in gallery' :key='index'>
                <van-image :src="item.img_url"/>
            </van-swipe-item>
        </van-swipe>
    </div>
    <!-- 轮播图结束 -->

    <!-- 小模块 -->
    <div class="icon-box-p">
        <span><van-icon name="checked" color="brown"/>30天无忧退货</span>
        <span><van-icon name="checked" color="brown"/>48小时快速退费</span>
        <span><van-icon name="checked" color="brown"/>满88元免邮费</span>
    </div>

    <!-- 说明模块 -->
    <div class="info-box" :style='{"backgroundColor":"white"}'>
        <h2 :style="[{'fontWeight':'400'},{'fontSize':'1.2rem'}]">{{Goods_name}}</h2>
        <div :style="{'fontSize':'0.8rem'}">{{goods_brief}}</div>
        <div class="info-box-price">￥ {{retail_price}} 元</div>
    </div>


    <div class="zhanshi" @click="showgouwu()">
        <p>展示弹出层</p> 
        <p>></p>
    </div>

    <!-- 商品参数模块 -->
    <div class="shoppings">
        <div>
            <h2>商品参数</h2>
            <ul v-show='attribute.length? true : false '>
                <li v-for='(item,index) in attribute' :key='index'>{{item.value}}</li>
            </ul>
        </div>
        <div v-html="imges" class="shoppings-box">
        </div>
    </div>

    <!-- 商品参数模块结束 -->


    <!-- 常见问题 -->
    <div class="problems">
        <div class="problems-box">
            <span>——</span> 常见问题 <span>——</span>
        </div>
        <div class="problems-font">
            <div v-for="(item,index) in issue" :key='index'>
                <h3><span>•</span>{{item.question}}</h3>
                <p>{{item.answer}}</p>
            </div>
        </div>
    </div>
    <!-- 常见问题结束 -->



    <!-- 相关产品 -->
    <div class="related">
        <div class="related-box1"><span>——</span> 相关产品 <span>——</span></div>
        <van-grid :border="false" :column-num="2" >
            <van-grid-item v-for='(item,index) in goodsList1' :key="index" >
                <van-image :src="item.list_pic_url" />
                <div class="related-box2">{{item.name}}</div>
                <div class="related-box3">￥ {{item.retail_price}} 元</div>
            </van-grid-item>
        </van-grid>
    </div>
    <!-- 相关产品结束 -->


    <!-- 购物车 -->
    <AddCat :list_pic_url='list_pic_url' :showa='show'></AddCat>
    <!-- 购物车结束 -->
    
  </div>
</template>

<script>
import {Pingpa,goodsRelated} from '@/require/api'
import AddCat from '@/components/registered/addCart.vue'
export default {
    data(){
        return {
            //步进器
            value: 1,
            gallery:'',
            goods_brief:'',
            Goods_name:'',
            retail_price:'',
            imges:'',
            issue:'',
            show: true,
            list_pic_url:'',
            goodsList1:'',
            attribute:'',
        }
    },
    components:{
        AddCat
    },
    methods:{     
        getContainer() {
            return document.querySelector('.buyingym');
        },

        showgouwu(){
            this.show = !this.show
        },
    },
    created(){
        let ids=this.$route.params.id
        // console.log(ids);
        Pingpa({"id":ids}).then(res=>{
            let {gallery,info,issue,attribute} = res.data;
            this.attribute=attribute;
            this.gallery=gallery;
            this.goods_brief=info.goods_brief
            this.Goods_name=info.name;
            this.retail_price=info.retail_price
            this.imges=info.goods_desc
            this.issue=issue;
            this.list_pic_url=res.data.info.list_pic_url;
        }).catch(err=>{
            console.log(err);
        })
        goodsRelated({'id':ids}).then(res=>{
            let {goodsList} = res.data;
            this.goodsList1=goodsList

        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>

<style lang='less'>
.box-box1{
    margin-bottom: 3rem;
}
//轮播图
.carousel{
    .my-swipe .van-swipe-item {
        color: brown;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        height: 23.4rem;
    }
} 

//符号文字模块
.icon-box-p{
    font-size: 0.8rem ; 
    height: 1.5rem;
    line-height: 1.5rem;
    span{   
        margin: 0rem 0.9rem;
        
    }
}

//内容说明模块
.info-box{
    padding: 1rem 0rem;
    h2{
        margin: 1.5rem 0rem;

    }
    div{
        margin: 0.5rem 0rem;
    }
    .info-box-price{
        margin: 1.4rem 0rem;
        color: brown;
    }
}

//商品参数模块
.shoppings{
    margin: 1.5rem 0rem;
    margin-bottom: 1.2rem;
    background-color: white;
    ul{
        padding-left: 0.8rem;
        li{
            background-color: #999;
            margin-bottom: 0.4rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 1.4rem;
            width: 95%;
            border-radius: 0.4rem;
        }
    }
    h2{
        height: 3.5rem;
        line-height: 3.5rem;
        font-size: 1.2rem;
        text-align: left;
        padding-left: 1rem;
        font-weight: 400;
    }
    .shoppings-box{
        p{
            height: 5.9rem;
        }
        img{
            height: 100%;
        }
    }
}

//常见问题
.problems{
    background-color: white;
    .problems-box{
        padding: .4rem 0rem;
        font-size: 1.1rem;
        padding-bottom: 1rem;
        span{
            color: rgb(194, 194, 194);
            padding: 0rem 1rem;
        }
    }
    .problems-font{
        text-align: left;
        
        span{
            padding: 0rem 0.4rem;
            color: brown;
        }
        h3{
            font-size: 1rem;
            font-weight: 400;
        }
        p{
            padding: 1rem 0.6rem;
            padding-left: 1.2rem;
            font-size: 0.8rem;

        }
    }
}

// 相关产品
.related{
    background-color: white;
    padding: 0.5rem 0rem;
    .van-grid-item__content{
        padding: 0.5rem;
    }
    .related-box1{
        span{
            color: rgb(194, 194, 194);
            padding: 0rem 1rem;
        }
        font-size: 1rem;
        padding: 1rem 0rem;
        padding-bottom: 3rem;
    }
    .related-box2{
        font-size: 0.8rem;
        padding-top: 0.3rem;

    }
    .related-box3{
        font-size: 0.8rem;
        color: brown;
        padding-top: 0.3rem;
    }
}
//相关产品结束
.gouwu-box{
    width: 100%;
    height: 100%;
    background-color: white;
}
.zhanshi{
    display: flex;
    justify-content: space-between;
    height: 3rem;
    line-height: 3rem;
    background-color: white;
    padding: 0rem 1rem;
}

</style>