<template>
  <div class="navbar">
    <van-nav-bar :title="currentPage.title" :left-arrow="currentPage.title!=='主页'" fixed>
      <template #right>
        <van-icon name="bars" size="28" @click="showPopup" />
      </template>
    </van-nav-bar>
    <van-popup v-model="show" position="left">
      <van-sidebar class="sidebar" v-model="currentPage.router">
        <van-sidebar-item
          :title="menu.name"
          v-for="menu in menus"
          :key="menu.id"
          v-bind:to="menu.router"
          @click="hidePopup"
        />
      </van-sidebar>
    </van-popup>
  </div>
</template>

<script>
import { NavBar, Icon, Sidebar, SidebarItem, Popup } from "vant";
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Popup.name]: Popup
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    ...mapActions(["showSideBar", "closeSideBar"]),
    showPopup() {
      this.show = true;
    },
    hidePopup(){
      this.show = false;
    }
  },
  computed: {
    ...mapState(["menus", "sideBarShow"]),
    ...mapGetters(["currentPage"])
  }
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  text-align: center;
}
</style>