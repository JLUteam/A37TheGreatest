<template>
  <div class="basic">
    <Back></Back>
    <el-pagination
      layout="prev, pager, next"
      :total="recodes.length"
      @current-change="handleCurrentChange"
      :page-size="1"
      :current-page="this.recode_now_index"
    >
    </el-pagination>
    <Avatar :recode="this.recode_now"> </Avatar>
    <StateBar :recode="this.recode_now"></StateBar>
    <PayState :recode="this.recode_now"></PayState>
    <Another :recode="this.recode_now"></Another>
    <button @click="this.delete_">{{ deleteorsave }}</button>
  </div>
</template>
<script>
import axios from "axios";
import Avatar from "@/components/ConsumptionDetails/avatar.vue";
import Back from "@/components/ConsumptionDetails/back.vue";
import StateBar from "@/components/ConsumptionDetails/StateBar.vue";
import PayState from "@/components/ConsumptionDetails/PayState.vue";
import Another from "@/components/ConsumptionDetails/Another.vue";

export default {
  name: "ConsumptionDetails",
  components: { Avatar, Back, StateBar, PayState, Another },
  mounted() {
    // this.recodes = this.$route.query.recode;
    this.recode_now = this.recodes[0];
  },
  data() {
    return {
      deleteorsave: "保存",
      recodes: [
        {
          usr: "780303f9-b0a1-4d7b-a7b4-d191daa85f47",
          bname: "武林川木桶饭",
          ispic: false,
          bpic: null,
          bcategory: "餐饮",
          note: "顾客需要餐具",
          payment: "支付宝",
          amount: 22.56,
          btime: "2023-02-15 17:47:15",
          isreceipt: true,
          receipt: null,
        },
        {
          usr: "780303f9-b0a1-4d7b-a7b4-d191daa85f47",
          bname: "状元狼食坊",
          ispic: false,
          bpic: null,
          bcategory: "餐饮",
          note: "特色凉菜(12元),招牌酸菜鱼,糖醋里嵴",
          payment: "支付宝",
          amount: 56.8,
          btime: "2023-06-05 17:25:14",
          isreceipt: true,
          receipt: null,
        },
        {
          usr: "780303f9-b0a1-4d7b-a7b4-d191daa85f47",
          bname: "农家木桶饭",
          ispic: false,
          bpic: null,
          bcategory: "餐饮",
          note: "四季豆炒肉丝木桶饭",
          payment: "支付宝",
          amount: 17.3,
          btime: "2023-04-02 12:55:34",
          isreceipt: true,
          receipt: null,
        },
      ],
      recode_now: {},
      recode_now_index: 0,
    };
  },
  methods: {
    getchange(type, val) {
      this.$store.commit("updatarecode_insorouts", [type, val]);
    },

    delete_() {
      this.$confirm("是否保存", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        customClass: "msgbox",
      })
        .then(() => {
          //从recodes中删除recode_now
          console.log("-------come in-------");
          console.log(this.recodes);
          console.log(this.recode_now);
          var id =
            this.$store.state.recodes
              .map((item) => item.id)
              .reduce((a, b) => Math.max(a, b)) + 1;
          var usr = this.$store.state.userinfo.uid;
          var datatolocal = {
            bname: this.recode_now.bname,
            bcategory: this.recode_now.bcategory,
            note: this.recode_now.note,
            payment: this.recode_now.payment,
            amount: this.recode_now.amount,
            btime: this.recode_now.btime,
            isreceipt: this.recode_now.isreceipt,
            receipt: this.recode_now.receipt,
            ispic: true,
            bpic: null,
            usr: usr,
            id: id,
          };
          console.log("datatolocal:");
          console.log(datatolocal);
          // this.deletenow(this.recode_now);
          this.recodes.splice(this.recodes.indexOf(this.recode_now), 1);
          console.log(1232135);
          console.log(this.recodes);
          console.log(this.recode_now);
          console.log(this.recodes.length);
          if (this.recodes.length == 0) {
            this.$router.push("/Percent");
          }
        })
        .catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });
        });
    },
    isupdate() {
      this.deleteorsave = "保存";
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.recode_now_index = val;
      this.recode_now = this.recodes[val - 1];
    },
    // deletenow(recode_now) {
    //   this.recodes.splice(this.recodes.indexOf(recode_now), 1);
    // },
  },
  watch: {
    recode_now: {
      handler: function (val, oldval) {
        console.log("recode_now");
        console.log(this.recode_now);
        console.log(val);
      },
      deep: true,
      immediate: true,
    },
    recodes: {
      handler: function (val, oldval) {
        if (this.recode_now_index > 1) {
          this.recode_now_index = this.recode_now_index - 1;
        } else {
          this.recode_now_index = 1;
        }
        console.log("recodes");
        console.log(val);
        this.handleCurrentChange(this.recode_now_index);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style>
.msgbox {
  width: 5.9rem !important;
}
</style>

<style lang="less" scoped>
.basic {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    position: relative;
    width: 6.54rem;
    height: 1.28rem;
    border-radius: 0.48rem;
    background: #928fff;

    margin-left: 0.48rem;
    background-blend-mode: normal;
    border: none;
    color: #ffffff;
    font-family: Manrope;
    font-size: 0.32rem;
    font-weight: 700;
    line-height: 0.52rem;
    text-align: center;
    transition: 0.3s;
    cursor: pointer;
    margin-top: 0.32rem;
  }

  /deep/.el-pagination {
    margin-left: 0.2rem;
    margin-top: 0.6rem;
    background-color: transparent;
  }

  /deep/.el-pager li {
    background-color: transparent;
  }

  /deep/.el-pagination button:disabled {
    background-color: transparent;
  }

  /deep/.el-pagination .btn-prev {
    display: none;
    background-color: transparent;
  }

  /deep/.el-pagination .btn-next {
    display: none;
    background-color: transparent;
  }

  .avatar {
    margin-top: 0.2rem;
  }
}
</style>
