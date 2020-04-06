<template>
  <div class="handover">
    <van-notice-bar text="宁波春宇科技有限公司供应链手持终端系统上线啦！！！" left-icon="volume-o" />
  </div>
</template>

<script>
import { NoticeBar } from "vant";
export default {
  name: "Handover",
  components: {
    [NoticeBar.name]: NoticeBar
  }
};
</script>