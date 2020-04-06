<template>
  <div class="main">
    <nav-bar />    
    <router-view />
  </div>
</template>

<script>
// import MenuGrid from "@/components/MenuGrid.vue";
import NavBar from "@/components/NavBar.vue";
// import TaskNoticeBar from "@/components/TaskNoticeBar.vue";
import { CellGroup, Divider, NoticeBar, Dialog } from "vant";
export default {
  name: "Main",
  components: {
    "nav-bar": NavBar,
    // "menu-grid": MenuGrid,
    // "task-notice-bar": TaskNoticeBar,
    [CellGroup.name]: CellGroup,
    [Divider.name]: Divider,
    [NoticeBar.name]: NoticeBar,
    [Dialog.name]: Dialog
  },
  data() {
    return {
      time: 0,
      backClick: 0,
      notice: "宁波春宇科技有限公司供应链手持终端系统上线啦！！！"
    };
  },
  methods: {
    // backbutton() {
    //   Dialog.confirm({
    //     title: "提示",
    //     message: "确认退出APP？"
    //   })
    //     .then(() => {
    //       navigator.app.exitApp();
    //     })
    //     .catch(() => {
    //       // on cancel
    //     });      
    // }
  },
  // mounted() {
  //   document.addEventListener("backbutton", this.backbutton, false);
  // },
  // beforeDestroy() {
  //   document.removeEventListener("backbutton", this.backbutton, false);
  // }
};
</script>

<style scoped>
/* .main .notic-bar {
  margin: 1px 0 0 0;
} */
</style>