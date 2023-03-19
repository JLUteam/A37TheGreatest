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
    this.deleteorsave = "删除";
  },
  data() {
    return {
      deleteorsave: "删除",
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
      } else {
        console.log("保存");
        this.$store.commit("save_insorouts");
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
