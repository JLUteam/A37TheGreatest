<template>
  <div class="basic">
    <Back></Back>
    <Avatar :recode="$route.query.recode"> </Avatar>
    <StateBar :recode="$route.query.recode"></StateBar>
    <PayState :recode="$route.query.recode"></PayState>
    <Another :recode="$route.query.recode"></Another>
    <button @click="this.delete_">{{ deleteorsave }}</button>
  </div>
</template>
<script>
import Avatar from "@/components/ConsumptionDetails/avatar.vue";
import Back from "@/components/ConsumptionDetails/back.vue";
import StateBar from "@/components/ConsumptionDetails/StateBar.vue";
import PayState from "@/components/ConsumptionDetails/PayState.vue";
import Another from "@/components/ConsumptionDetails/Another.vue";

export default {
  name: "ConsumptionDetails",
  components: { Avatar, Back, StateBar, PayState, Another },
  mounted() {
    this.deleteorsave = !this.$route.query.isphoto ? "删除" : "保存";
  },
  data() {
    return {
      deleteorsave: !this.$route.query.isphoto ? "删除" : "保存",
    };
  },
  methods: {
    getchange(type, val) {
      this.$store.commit("updatarecode_insorouts", [type, val]);
    },
    delete_() {
      if (this.deleteorsave == "删除") {
        this.$store.commit("delete_intsorouts", this.$route.query.recode);
        //补删除代码
        axios({
          method: "delete",
          url: "https://mineralsteins.icu:8080/a37/outs-query",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: getdetails,
        }).then(
          (response) => {
            console.log("987654321");
            console.log(response.data.data);
            df.$store.state.recodes = response.data.data;
            console.log(df.$store.state.recodes);
          },
          (error) => {
            console.log("失败了");
            console.log(error);
          }
        );
      } else {
        console.log("保存");
        this.$store.commit("save_insorouts");
        console.log("yyyyyyyyyyy");
        console.log(this.$store.getters.getchanges);
        this.$store.state.changes = {
          keys: [],
          newvals: [],
          id: "-1",
          isout: true,
        };
        //补修改代码
      }

      this.$router.back(-1);
    },
    isupdate() {
      this.deleteorsave = "保存";
    },
  },
};
</script>
<style lang='less' scoped>
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
}
</style>
