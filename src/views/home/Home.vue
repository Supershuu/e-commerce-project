<template>
  <div class="home">
    <HomeTopNav></HomeTopNav>
    <HomeSwiper :homeimgswiper='swiper'></HomeSwiper>
    <HomeRecommend :recommend='recommend'></HomeRecommend>
    <HomeWeekPop></HomeWeekPop>
    <HomeGoodsControl @goodsControl='requestGoods($event,index)'></HomeGoodsControl>
    <HomeGoods :goodsArray='goods.pop.list'></HomeGoods>
  </div>
</template>

<script>
  //请求首页数据的
  import {getHomeMultidata,getHomeGoodsData} from '../../network/home.js'

  import HomeTopNav from '../../components/content/home/HomeTopNav.vue'
  import HomeSwiper from '../../components/content/home/HomeSwiper.vue'
  import HomeRecommend from '../../components/content/home/HomeRecommend.vue'
  import HomeWeekPop from '../../components/content/home/HomeWeekPop.vue'
  import HomeGoodsControl from '../../components/content/home/HomeGoodsControl.vue'
  import HomeGoods from '../../components/content/home/HomeGoods.vue'
  export default {
    name:  "Home",
    components: {
      //顶部导航栏购物街的制作
      HomeTopNav,
      //轮播图的制作
      HomeSwiper,
      // 推荐的制作
      HomeRecommend,
      //本周流行
      HomeWeekPop,
      //商品切换栏
      HomeGoodsControl,
      //商品的展示
      HomeGoods
    },
    data(){
      return {
        swiper:[],   //用于储存轮播图的数据
        recommend:[], //用于储存推荐的数据
        goods:{
          pop:{list:[],page:1},
          new:{list:[],page: 1},
          sell:{list:[],page: 1}
        },  //用于储存展示商品的信息,list用于储存请求过来的数据,page用于记录页数
      }
    },
    created(){
      //组件一创建就进行首页数据的亲求getHome..是一个promise函数,res就是得到的结果
      getHomeMultidata().then((res)=>{
        console.log(res);
        this.swiper=res.data.data.banner.list //将轮播图的数据储存到数组当中
        this.recommend=res.data.data.recommend.list;
        console.log('recommend的数据:');
        console.log(this.recommend);
      });
      //请求首页当中流行的商品信息
      getHomeGoodsData('pop',this.goods.pop.page).then((res)=>{
        this.goods.pop.list=res.data.data.list;
        console.log('pop的商品:');
        console.log(this.goods.pop.list);
        this.goods.pop.page++;
      });
      //请求商品中新品的商品信息
      getHomeGoodsData('new', this.goods.new.page).then((res) => {
        this.goods.new.list = res.data.data.list;
        console.log('new的商品:');
        console.log(this.goods.new.list);
        this.goods.new.page++;
      });
      //请求商品中精选的商品信息
      getHomeGoodsData('sell', this.goods.sell.page).then((res) => {
        this.goods.sell.list = res.data.data.list;
        console.log('sell的商品:');
        console.log(this.goods.sell.list);
        this.goods.sell.page++;
      });
    },
    methods:{
      //处理商品控制栏传递过来的index并进行处理
      requestGoods(index){
        console.log(index+'传递参数index');
      }
    }
  }
</script>

<style scoped>

</style>
