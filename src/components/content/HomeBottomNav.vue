<!-- 底部'首页 分类 购物车 我的'组件的封装 -->
<!-- router-view是用来占用跳转路由的一个组件位置(home,sort,cart,profile) -->
<template>
  <div>
  <router-view></router-view>
    <div class='footer'>
      <div class="homebottomnav">
        <div @click='hbnav' :class="{'fontcolorchange':!hbActive}">
          <img src="../../assets/image/BottomNav/home.svg" v-if='hbActive'>
          <img src="../../assets/image/BottomNav/home_active.svg" v-else>
          <div>首页</div>
        </div>
        <div @click='sbnav' :class="{'fontcolorchange':!sbActive}">
          <img src="../../assets/image/BottomNav/category.svg" v-if='sbActive'>
          <img src="../../assets/image/BottomNav/category_active.svg" v-else>
          <div>分类</div>
        </div>
        <div @click='cbnav' :class="{'fontcolorchange':!cbActive}">
          <img src="../../assets/image/BottomNav/shopcart.svg" v-if='cbActive'>
          <img src="../../assets/image/BottomNav/shopcart_active.svg" v-else>
          <div>购物车</div>
        </div>
        <div @click='pbnav' :class="{'fontcolorchange':!pbActive}">
          <img src="../../assets/image/BottomNav/profile.svg" v-if='pbActive'>
          <img src="../../assets/image/BottomNav/profile_active.svg" v-else>
          <div>我的</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:  "HomeBottomNav",
    data(){
      return {
        hbActive:false,
        sbActive:true,
        cbActive:true,
        pbActive:true
      }
    },
    methods:{
      hbnav(){
        this.hbActive=false;
        this.sbActive=true;
        this.cbActive=true;
        this.pbActive=true;
        this.$router.push('/home')
      },
      sbnav(){
        this.hbActive = true;
        this.sbActive = false;
        this.cbActive = true;
        this.pbActive = true;
        this.$router.push('/sort')
      },
      cbnav(){
        this.hbActive = true;
        this.sbActive = true;
        this.cbActive = false;
        this.pbActive = true;
        this.$router.push('/cart')
      },
      pbnav(){
        this.hbActive = true;
        this.sbActive = true;
        this.cbActive = true;
        this.pbActive = false;
        this.$router.push('/profile')
      }
    }
  }
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0rem;
}
.homebottomnav {
  position: relative;
  right: 0px;
  bottom: 0px;
  width: 10rem;
  height: 1.470588rem;
  font-size: .367647rem;
}
.homebottomnav>div:first-child {
  position: absolute;
  width: 2.5rem;
  height: 1.470588rem;
  margin-left: 0px;
  text-align: center;
  top: 15%;
}
.homebottomnav>div:nth-of-type(2) {
  position: absolute;
  width: 2.5rem;
  height: 1.470588rem;
  margin-left: 2.5rem;
  text-align: center;
  top: 15%;
}
.homebottomnav>div:nth-of-type(3) {
  position: absolute;
  width: 2.5rem;
  height: 1.470588rem;
  margin-left: 5rem;
  text-align: center;
  top: 15%;
}
.homebottomnav>div:nth-of-type(4) {
  position: absolute;
  width: 2.5rem;
  height: 1.470588rem;
  margin-left: 7.5rem;
  text-align: center;
  top: 15%;
}
img {
  width: .514706rem;
  height: .514706rem;
}
.fontcolorchange {
  color: #ff8198;
}

</style>
