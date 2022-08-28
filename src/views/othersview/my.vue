<template>
<!-- 该模块为个人中心 -->
  <div>
    <div class="mys">
      <!-- 点击登入页面 -->
      <div class="mys-box1" v-if='!bool' @click="ondata()">
        <div class="mys-box1-box">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+BAMAAAAQDbi7AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURfjz8NTIvOPa0drQxe3l3/Pt6dJ8uJYAAAGKSURBVFjD7ZjNboMwEIT5vccxuZPS3qHJA4SouQPp+z9LkSJVBduw42mEqnrun9de744XoigoKCgoKCjoN5V/VI1Sp5eLH34d4YdePejPb3rUGQ+uJkIXiNVMJcanc35P8uAGEsVtwOQVVAWZyddkfOgAR5NXHZN+7AZs4YEE5DZcHZjsjyq44wMXYOe1f/c9FPg/wqdP4TXjHlD9sjzbfxnZ/3b/2Mn9q+H8y+5/cv8crPyppI4vv8DEwWuu/MV8vHH89En5K6jyBxrAwddU+QIF3Nv5jvMfTfa/3D+ilpx/soac3zJy/oyI7NkdsMD4lhp/LR4AfoQl3PeHkYAa5Xsm+0YNlzAf3ZnTz0poF/j/xl9/NoB+v2H0YPgHskJWWZ/fm8/WJ3uQvEB5pZzSb17WD/yIGdSK9h2FLy8gwJcWEOFuN0qUUGefzK/a6VGMK90t++2qCvHQ59BFNLK4deDCGxnoQX5+BQ3KF9T25y9yDPPTabbF+dKz9qwTSUPyOD59U7bmm634LwhiuCxbAoGfAAAAAElFTkSuQmCC" alt="">
          <span>点击登入</span> 
        </div>
        <van-icon name="arrow" color='white'/>
      </div>
      <!-- 点击登入页面结束 -->



      
      <div class="mys-box2" v-if='bool'>
        <div class="mys-box1-box">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+BAMAAAAQDbi7AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURfjz8NTIvOPa0drQxe3l3/Pt6dJ8uJYAAAGKSURBVFjD7ZjNboMwEIT5vccxuZPS3qHJA4SouQPp+z9LkSJVBduw42mEqnrun9de744XoigoKCgoKCjoN5V/VI1Sp5eLH34d4YdePejPb3rUGQ+uJkIXiNVMJcanc35P8uAGEsVtwOQVVAWZyddkfOgAR5NXHZN+7AZs4YEE5DZcHZjsjyq44wMXYOe1f/c9FPg/wqdP4TXjHlD9sjzbfxnZ/3b/2Mn9q+H8y+5/cv8crPyppI4vv8DEwWuu/MV8vHH89En5K6jyBxrAwddU+QIF3Nv5jvMfTfa/3D+ilpx/soac3zJy/oyI7NkdsMD4lhp/LR4AfoQl3PeHkYAa5Xsm+0YNlzAf3ZnTz0poF/j/xl9/NoB+v2H0YPgHskJWWZ/fm8/WJ3uQvEB5pZzSb17WD/yIGdSK9h2FLy8gwJcWEOFuN0qUUGefzK/a6VGMK90t++2qCvHQ59BFNLK4deDCGxnoQX5+BQ3KF9T25y9yDPPTabbF+dKz9qwTSUPyOD59U7bmm634LwhiuCxbAoGfAAAAAElFTkSuQmCC" alt="">
          <span>{{us}}</span> 
        </div>
        <van-icon name="cross" color='white'  @click="onouting()"/>
      </div>

      <!-- 功能列表 -->
      <div class="mys-box3">
        <van-grid :border="false" :column-num="3">
          <van-grid-item :style="[{fontSize:'2rem'}]">
            <van-icon name="label-o" />
            <p :style="[{fontSize:'0.7rem'},{padding:'0.6rem'}]">我的订单</p>
          </van-grid-item>
          <van-grid-item :style="[{fontSize:'2rem'}]">
            <van-icon name="bill-o" />
            <p :style="[{fontSize:'0.7rem'},{padding:'0.6rem'}]">优惠券</p>
          </van-grid-item>
          <van-grid-item :style="[{fontSize:'2rem'}]">
            <van-icon name="goods-collect-o" />
            <p :style="[{fontSize:'0.7rem'},{padding:'0.6rem'}]">礼品卡</p>
          </van-grid-item>
          <van-grid-item :style="[{fontSize:'2rem'}]">
            <van-icon name="location-o" />
            <p :style="[{fontSize:'0.7rem'},{padding:'0.6rem'}]">我的收藏</p>
          </van-grid-item>
          <van-grid-item :style="[{fontSize:'2rem'}]">
            <van-icon name="flag-o" />
            <p :style="[{fontSize:'0.7rem'},{padding:'0.6rem'}]">地理管理</p>
          </van-grid-item>
          <van-grid-item :style="[{fontSize:'2rem'}]">
            <van-icon name="contact" />
            <p :style="[{fontSize:'0.7rem'},{padding:'0.6rem'}]">账号安全</p>
          </van-grid-item>
          <van-grid-item :style="[{fontSize:'2rem'}]">
            <van-icon name="aim" />
            <p :style="[{fontSize:'0.7rem'},{padding:'0.6rem'}]">联系客服</p>
          </van-grid-item>
          <van-grid-item :style="[{fontSize:'2rem'}]">
            <van-icon name="warn-o" />
            <p :style="[{fontSize:'0.7rem'},{padding:'0.6rem'}]">帮助中心</p>
          </van-grid-item>
          <van-grid-item :style="[{fontSize:'2rem'}]">
            <van-icon name="service-o" />
            <p :style="[{fontSize:'0.7rem'},{padding:'0.6rem'}]">意见反馈</p>
          </van-grid-item>
          <van-grid-item :style="[{fontSize:'2rem'}]">
            <van-icon name="question-o" />
            <p :style="[{fontSize:'0.7rem'},{padding:'0.6rem'}]">我的订单</p>
          </van-grid-item>
          <van-grid-item :style="[{fontSize:'2rem'}]">
            <van-icon name="smile-comment-o" />
            <p :style="[{fontSize:'0.7rem'},{padding:'0.6rem'}]">意见反馈</p>
          </van-grid-item>
        </van-grid>
      </div>
      <!-- 功能列表结束 -->

    </div>

    <!-- 弹窗 -->
    <van-dialog v-model="show" title="登入" >
      <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">提交</van-button>
  </div>
</van-form>
    </van-dialog>
    <!-- 弹窗结束 -->

    <!-- 确认弹框 -->
    <van-dialog v-model="show1" title="确认要退出吗？" show-cancel-button
      @confirm='onConfirm()'
    >
    </van-dialog>
    <!-- 确认弹框结束 -->

  </div>
</template>

<script>
import {useLoads} from '@/require/api'
import Searchk from '@/components/tabar/tabar.vue'
export default {
  data() {
    return {
      show: false,
      show1: false,
      token:'',
      username: '',
      password: '',
      bool:false,
      us:'',
    };
  },
  components:{
      Searchk
  },
  methods: {
    ondata(){
      this.show= !this.show;
    },
    onSubmit(values) {
      //上传密码账号
      useLoads({'username':values.username,'pwd':values.password}).then(res=>{
        let {token,userInfo} = res.data;
        this.token = token;
        this.bool=true;
        sessionStorage.setItem('token',this.token);
        sessionStorage.setItem('userInfo',userInfo.username);
        location.reload();
        this.$router.replace('/home');
      }).catch(err=>{
        console.log(err);
        this.bool=false;
      })
    },
    onouting(){
      this.show1= !this.show1
    },
    onConfirm(){
      this.bool=false;
      sessionStorage.clear();
      location.reload();
      this.$router.replace('/my');
    }

  },
  created(){
    if(sessionStorage.getItem('token')){
      // console.log('有token');
      this.us = sessionStorage.getItem('userInfo');
      this.bool=true;
    }else{
      // console.log('没有token');
      this.bool=false;
    }
  },

  components : {

  }
};
</script>
<style lang='less'>
// 按钮样式
.mys{
  .mys-box1{
    height: 7rem;
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    padding: 0rem 0.7rem;
    .mys-box1-box{

      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        padding: 0rem 1rem;
        color: white;

        
      }
      img{
        width: 5rem;
        border-radius: 2.5rem;
        
      }
    }
  }

  .mys-box2{
    height: 7rem;
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    padding: 0rem 0.7rem;
    .mys-box1-box{

      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        padding: 0rem 1rem;
        color: white;

        
      }
      img{
        width: 5rem;
        border-radius: 2.5rem;
        
      }
    }
  }
}
</style>