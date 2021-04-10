<template>
  <div class="HomeRecommend">
    <span v-for='items in recommend' :key='items'>
      <a :href="items.link">
        <img :src="items.image">
      </a>
      <div>{{items.title}}</div>
    </span>
  </div>
</template>

<script>
  export default {
    name:  "HomeRecommend",
    props:{
      recommend:{
        type:Array,
        default:()=>{
          return []
        }
      }
    },

  }
</script>

<style scoped>
.HomeRecommend {
  width: 10rem;
  height: 3rem;
  align-items: center;
  display: flex;
}
.HomeRecommend span {
  width: 2.5rem;
  flex: 1;
  text-align: center;
  font-size: .441176rem;
  color: #666666;
}
img {
  width: 2.022059rem;
  height: 1.838235rem;
}
</style>
