<template>
  <!-- <div class="container">
    <div class="box" v-for="menu in menus" :key="menu.id">
      <div class="img">
        <img :src="menu.src" />
      </div>
      <p>{{menu.name}}</p>
    </div>    
  </div>-->
  <div class="menugrid">
    <van-cell-group class="menu-cell-group">
      <van-divider class="divider">快速导航</van-divider>
      <van-grid :border="false" :gutter="10" :column-num="3" square>
        <van-grid-item v-for="menu in quickMenus" :key="menu.id" v-bind:to="menu.router">
          <div class="img">
            <img :src="menu.src" />
          </div>
          <p>{{menu.name}}</p>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
  </div>
</template>

<script>
import { Grid, GridItem, CellGroup, Divider } from "vant";
import { mapGetters } from "vuex";
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [CellGroup.name]: CellGroup,
    [Divider.name]: Divider
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["quickMenus"])
  }
};
</script>

<style scoped>
/* @import url("../assets/style/menugrid.css"); */
.menugrid .menu-cell-group .divider {
  color: #2ed573;
  border-color: #2ed573;
  padding: 0 16px 0 16px;
}

.img {
  width: 100px;
  height: 100px;
  box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.1),
    -18px -18px 30px rgba(255, 255, 255, 1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efeeee;
  transition: box-shadow 0.2s ease-out;
  position: relative;
}
.img img {
  width: 60px;
  transition: width 0.2s ease-out;
}

p {
  color: slategrey;
}

.img:hover {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px rgba(255, 255, 255, 0.8),
    inset 18px 18px 30px rgba(0, 0, 0, 0.1),
    inset -18px -18px 30px rgba(255, 255, 255, 1);
  transition: box-shadow 0.2s ease-out;
}

.img:hover img {
  width: 58px;
  transition: width 0.2s ease-out;
}
</style>