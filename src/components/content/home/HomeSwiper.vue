<template>
  <div class="HomeSwiper">
    <Swiper :imgArray='homeimgswiper'></Swiper>
  </div>
</template>

<script>
  import Swiper from '../../common/Swiper.vue'
  export default {
    name:  "HomeSwiper",
    props:{     //用于接收home组件传递过来的参数
      homeimgswiper:{
        type:Array, //数组的默认值后面必须是一个函数
        default:()=>{
          return []
        }
      }
    },
    components: {
      Swiper
    },
  }
</script>

<style scoped>

</style>
