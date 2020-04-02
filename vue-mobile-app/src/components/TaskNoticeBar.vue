<template>
  <div class="tasknoticebar">
    <van-cell-group class="task-cell-group">
      <van-divider class="divider">任务列表</van-divider>
      <van-notice-bar class="notice" left-icon="info-o" mode="link">待收货{{count.receive}}张单据</van-notice-bar>
      <van-notice-bar class="notice" left-icon="info-o" mode="link">待验收{{count.check}}张单据</van-notice-bar>
      <van-notice-bar class="notice" left-icon="info-o" mode="link">待拣货{{count.pick}}张单据</van-notice-bar>
      <van-notice-bar class="notice" left-icon="info-o" mode="link">待装车{{count.load}}张单据</van-notice-bar>
    </van-cell-group>
    <van-cell-group class="message-cell-group">
      <van-divider class="divider">公告资讯</van-divider>
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item
          class="message"
          :title="message.title"
          :name="message.name"
          icon="envelop-o"
          :value="message.value"
          v-for="message in messages"
          :key="message.name"
        >{{message.content}}</van-collapse-item>
      </van-collapse>
    </van-cell-group>
  </div>
</template>
<script>
import { CellGroup, Divider, NoticeBar, Collapse, CollapseItem } from "vant";
export default {
  components: {
    [CellGroup.name]: CellGroup,
    [Divider.name]: Divider,
    [NoticeBar.name]: NoticeBar,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  },
  data() {
    return {
      count: {
        receive: 2,
        check: 1,
        pick: 1,
        load: 1
      },
      activeNames: "1",
      messages: [
        {
          name: "1",
          value: "2019-12-05 11:22",
          title: "关于举办“中药检验经验交流会”的通知",
          content:
            "请郑益军、郑程参加2013年12月20日，13：00报到，13：30--16：00交流。  地址：金华市食品药品检验所五楼会议室。"
        },
        {
          name: "2",
          value: "2019-12-05 11:22",
          title:
            "药品不良反应信息通报（第60期）提醒关注含羟乙基淀粉类药品安全风险",
          content:
            "第一、第二经营部：      日前，国家食品药品监督管理总局发布第60期《药品不良反应信息通报》，提醒关注含羟乙基淀粉类药品对严重脓毒血症患者的肾损伤及死亡率增加风险。含羟乙基淀粉类药品为血容量补充药，主要用于预防和治疗各种原因造成的低血容量。近期，欧盟、美国、加拿大等国外药品管理部门就含羟乙基淀粉类药品对特定健康条件患者的肾损伤及死亡率增高风险陆续发布了多项风险控制措施。国家食品药品监督管理总局针对其安全性问题再次进行了分析和评估，评估认为含羟乙基淀粉类药品在特定健康条件的患者中存在着死亡率升高、肾损害及过量出血等风险。      因此，国家食品药品监督管理总局建议医务人员和患者应充分重视此类药品的安全性问题，详细了解含羟乙基淀粉类药品的禁忌症、不良反应、注意事项、相互作用。将可能存在的安全性隐患告知患者，在增加剂量或调整治疗方案时，应密切关注患者的不良反应发生情况。  "
        },
        {
          name: "3",
          value: "2019-12-05 11:22",
          title: "关于开展中药材中药饮片滥用硫磺熏蒸专项检查的通知",
          content:
            "中药经营部：      近日，浙江省食品药品监督管理局发布了关于开展中药材中药饮片滥用硫磺熏蒸专项检查的通知，要求检查企业中药材和中药饮片购销渠道是否合法、是否按GSP要求进行入库验收，是否滥用硫磺熏蒸养护中药材中药饮片，库存是否有滥用硫磺熏蒸过的中药材和中药饮片等项目。加强重点品种的监督检查有1、浙江地产品种，如浙贝母、杭白菊等；2、《中国药典》（2010年版增补本）规定二氧化硫残留限量400毫克每公斤的山药、天冬等；3、以及其他在前期检查和抽验过程中发现二氧化硫易超标的品种：如金银花、山银花、玫瑰花、大枣、桔梗、人参、西洋参、当归、川贝母、枸杞子等。      请质管员对本公司中药材和中药饮片的供货商重新进行资质审核，并连同业务部门对外省供应商进行审计；中药验收员在验收药品时要核对检验报告单上的检验项目是否与中国药典或浙江省中药炮制规范是否一致，如不一致，一律拒收。"
        },
        {
          name: "4",
          value: "2019-12-05 11:22",
          title:
            "食品药品监管总局关于印发药品经营质量管理规范现场检查指导原则的通知",
          content:
            "各经营部：      日前，国家食品药品监管总局发布了关于药品经营质量管理规范现场检查指导原则的通知，该通知包含了新版GSP在认证时所需的检查项目和所对应的附录检查内容。  请各部门负责人对照国家局发布的检查项目和所对应的附录检查内容对自已部门所做的工作进行检查。  详见：http://www.sda.gov.cn/WS01/CL0844/97083.html  "
        },
        {
          name: "5",
          value: "2019-12-05 11:22",
          title: "公告标题2",
          content: "公告内容公告内容"
        }
      ]
    };
  }
};
</script>
<style scoped>
.tasknoticebar .task-cell-group .divider {
  color: #ff4757;
  border-color: #ff4757;
  padding: 0 16px 0 16px;
}

.tasknoticebar .task-cell-group .notice {
  color: #ff4757;
  background-color: #ecf9ff;
}

.tasknoticebar .message-cell-group .divider {
  color: #1e90ff;
  border-color: #1e90ff;
  padding: 0 16px 0 16px;
}

.tasknoticebar .message-cell-group .message {
  color: #1e90ff;
  background-color: #ecf9ff;
}
</style>