<template>
  <div class="HomeGoodsItems">
    {{goodsItems}}
  </div>
</template>

<script>
  export default {
    name:  "HomeGoodsItems",
    props: {
      goodsItems:{
        type:Object
      }
    }
  }
</script>

<style scoped>

</style>
