<template>
  <div>
    <div class="search-nav">
      <div class="search-nav-container">
        <ul>
          <li>全部商品分类</li>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/">闪购</router-link></li>
          <li><router-link to="/">衣服</router-link></li>
          <li><router-link to="/">团购</router-link></li>
          <li><router-link to="/">裤子</router-link></li>
          <li><router-link to="/">卫衣</router-link></li>
          <li><router-link to="/">裙子</router-link></li>
          <li><router-link to="/">领结</router-link></li>
          <li><router-link to="/">领带</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListNav'
};
</script>

<style scoped>
.search-nav{
  width: 100%;
  height: 64px;
  /* 顶部红线 */
  border-bottom: 2px solid #d65b5b;
  padding-top: 20px;
}
.search-nav-container{
  width: 80%;
  min-width: 1000px;
  height: 64px;
  margin: 0px auto;
}
.search-nav-container-90{
  width: 90%;
}
.search-nav-container ul{
  margin: 0px;
  padding-left: 0px;
  list-style: none;
}
.search-nav-container li{
  cursor: pointer;
  margin-left: 40px;
  line-height: 64px;
  color: #065b5b;
  font-size: 18px;
  /*文字间距*/
  float: left;
}

.search-nav-container a{
  color:  #d65b5b;
  /*导航条的字*/
  text-decoration: none;
}
.search-nav-container li:first-child{
  padding: 0px 30px;
  background:#d65b5b;
  /*导航条左边方框*/
  margin: 0px;
  color: #fff;
}
</style>
