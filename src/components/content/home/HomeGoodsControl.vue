<template>
  <div class="HomeGoodsControl">
    <div
    @click='goodsControlClick(index)'
    v-for='(items,index) in goodsArray' 
    :key='items'
    :class='{fontColor:(index==currentindex)}'>{{items}}</div>
  </div>
</template>

<script>
  export default {
    name:  "HomeGoodsControl",
    data(){
      return {
        goodsArray:['流行','新款','精选'],
        currentindex:0
      }
    },
    methods:{
      //处理点击事件并把当前点击的下标发送出去
      goodsControlClick(index){
        this.currentindex=index;
        this.$emit('goodsControl',index)
      }
    }
  }
</script>

<style scoped>
.HomeGoodsControl {
  display: flex;
  width: 100%;
  height: 1.470588rem;
}
.HomeGoodsControl>div {
  flex: 1;
  text-align: center;
  height: 1.470588rem;
  line-height: 1.470588rem;
  font-size: .477941rem;
}
.fontColor {
  color: #ffc8d3;
}
</style>
