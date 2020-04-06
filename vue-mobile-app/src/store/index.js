import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 0,
      name: ""
    },
    currentPage: {
      title: "主页",
      router: ""
    },
    sideBarShow: false,
    menus: [
      {
        id: 1,
        src: require("@/assets/image/icon/tongxunlu.png"),        
        name: "主页",
        router:"/main/home"
      },
      { id: 2, src: require("@/assets/image/icon/weixin.png"), name: "装车" },
      { id: 3, src: require("@/assets/image/icon/shizhong.png"), name: "追踪" },
      { id: 4, src: require("@/assets/image/icon/rili.png"), name: "加油" },
      {
        id: 5,
        src: require("@/assets/image/icon/liulanqi.png"),
        name: "配送",
        router:"/main/handover"
      },
      {
        id: 6,
        src: require("@/assets/image/icon/dianhua.png"),
        name: "收货"
      },
      { id: 7, src: require("@/assets/image/icon/xiangce.png"), name: "相册" },
      { id: 8, src: require("@/assets/image/icon/xiangji.png"), name: "相机" },
      { id: 9, src: require("@/assets/image/icon/duanxin.png"), name: "短信" },
      {
        id: 10,
        src: require("@/assets/image/icon/luzhi.png"),
        name: "录音机"
      },
      {
        id: 11,
        src: require("@/assets/image/icon/youtube.png"),
        name: "Youtube"
      },
      {
        id: 12,
        src: require("@/assets/image/icon/facebook.png"),
        name: "Facebook"
      },
      {
        id: 13,
        src: require("@/assets/image/icon/BILIBILI_LOGO.png"),
        name: "哔哩哔哩动画"
      },
      { id: 14, src: require("@/assets/image/icon/QQ.png"), name: "QQ" }
    ]
  },
  mutations,
  actions,
  getters
});
