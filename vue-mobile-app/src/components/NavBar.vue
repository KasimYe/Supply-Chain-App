<template>
  <div class="navbar">
    <van-nav-bar :title="currentPage.title" :left-arrow="currentPage.title!=='主页'">
      <template #right>
        <van-icon name="bars" size="28" @click="showSideBar" />
      </template>
    </van-nav-bar>
    <van-sidebar v-model="currentPage.router" v-show="sideBarShow">
      <van-sidebar-item :title="menu.name" v-for="menu in menus" :key="menu.id" />
    </van-sidebar>
  </div>
</template>

<script>
import { NavBar, Icon, Sidebar, SidebarItem } from "vant";
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem
  },
  methods: {
    ...mapActions(["showSideBar"])
  },
  computed: {
    ...mapState(["menus", "sideBarShow"]),
    ...mapGetters(["currentPage"])
  }
};
</script>