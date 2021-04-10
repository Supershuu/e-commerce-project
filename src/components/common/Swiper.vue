<!-- 轮播图组件的开发 -->
<!-- 待优化的有轮播图的一个过渡效果 
    还有圆点的制作css样式怎么写
-->
<template>
  <div class="Swiper">
    <div v-for='(items,index) in imgArray' :key='items' @touchstart='touchImg' @touchend='changeImg'>
      <img :src=items.image v-show='index===currentindex'>
      <span></span>
    </div>
  </div>
</template>

<script>
  export default {
    name:  "Swiper",
    props: {
      imgArray:{
        type:Array,
        default:()=>{
          return []
        }
      }
    },
    data(){
      return {
        currentindex:0,
        startPageX:0,
        endPageX:0,
        clientWidth:0
      }
    },
    mounted(){
      setInterval(() => {
        if (this.currentindex==this.imgArray.length-1) {
          this.currentindex=0;
        }else{
          this.currentindex++;
        }
      }, 3000);
    },
    methods:{
      // 可以看一下关于touches的一些API使用方法,里面有详细介绍touch的使用
      touchImg(){
        this.clientWidth = document.documentElement.clientWidth //获取视口的宽度
        console.log(this.clientWidth+'窗口大小');
        this.startPageX=event.touches[0].pageX; //获取触摸开始的位置
        console.log(this.startPageX+'起始位置');
      },
      changeImg(){
        this.endPageX=event.changedTouches[0].pageX //获取触摸结束的位置
        console.log(this.endPageX+'结束位置');
        // 手指向左滑动时改变图片
        if ((this.clientWidth/5)<=(this.startPageX-this.endPageX)) {
          if (this.currentindex==(this.imgArray.length-1)) {
            this.currentindex=0
          }else{
            this.currentindex++
          } 
        }
        // 手指向右滑动时改变图片 
        else if((this.clientWidth/5)<=-(this.startPageX-this.endPageX)){
          if (this.currentindex==0) {
            this.currentindex=this.imgArray.length-1;
          }else{
            this.currentindex--;
          }
        }
      }
    }
  }
</script>

<style scoped>
.Swiper {
  position: relative;
  height: 5.147059rem;
}
.Swiper img {
  width: 100%;
}
</style>
