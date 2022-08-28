<template>
  <div>
    <van-submit-bar :price="cartTotal.checkedGoodsAmount*100"  button-text="立即购买" @submit="onSubmit">
      <van-checkbox :disabled='!bool' v-model="checked" @click="checking()">全选</van-checkbox>
      <template #tip>
        累计4件商品，可点击 <van-button :type=" bool?'primary':'danger'" @click="onClickEditAddress()"><span v-show='bool'>编辑</span><span v-show='!bool'>完成编辑</span></van-button>按钮进行商品数量修改
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
    data(){
        return{
          checked:true,
          pricess:'',
          bool:true,
          i:0,
        }
    },
    props:['cartTotal','showb'],
    methods:{
      //全选按钮功能
      checking(){
        this.$emit('signaling',this.checked);
        // console.log(this.checked);
      },
      onSubmit(){
        // console.log(this.cartTotal); 
      },
      onClickEditAddress(){
        this.bool= !this.bool;
        this.$emit('sends',this.bool);
        //选项变禁选，编辑变完成编辑，出现单商品个总数量，出现华步器
      }
    },
    watch:{
      showb:{
        immediate:true,
        handler(ol,ne){
          if(this.i==0){
            this.checked=ol;
            this.i++;
          }
          this.checked=this.showb;
        }
      }
    }
    

}
</script>

<style>

</style>