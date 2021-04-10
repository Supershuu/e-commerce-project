<template>
  <div class="HomeGoods">
    <HomeGoodsItems v-for='items in goodsArray' :goodsItems='items' :key='items'></HomeGoodsItems>
  </div>
</template>

<script>
  import HomeGoodsItems from './HomeGoodsItems.vue'
  export default {
    name:  "HomeGoods",
    components: {
      HomeGoodsItems
    },
    props: {
      goodsArray:{
        type:Array,
        default:()=>{
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
