<template>
  <div class="basic">
    <Back></Back>
    <Avatar :bcategory="$route.query.bcategory" ref="Avatar">
    </Avatar>
    <StateBar :bcategory="$route.query.bcategory" ref="StateBar"></StateBar>
    <PayState :bcategory="$route.query.bcategory" ref="PayState"></PayState>
    <Another :bcategory="$route.query.bcategory" ref="Another"></Another>
    <button @click="uplode">save</button>
  </div>
</template>
<script>
import Avatar from "@/components/ConsumptionDetails_Setting/avatar.vue";
import Back from "@/components/ConsumptionDetails_Setting/back.vue";
import StateBar from "@/components/ConsumptionDetails_Setting/StateBar.vue";
import PayState from "@/components/ConsumptionDetails_Setting/PayState.vue";
import Another from "@/components/ConsumptionDetails_Setting/Another.vue";

export default {
  name: "ConsumptionDetails_Setting",
  components: { Avatar, Back, StateBar, PayState, Another },
  mounted() {
    // console.log(this.$route.query);
  }, methods: {
    uplode() {
      let recode_new = {
        uid: '1',//随机生成
        isbpic: true,
        isfinish: true,
        isremind: false,
        rtime: '',
        bcategory: this.$refs.StateBar.getbcategory_(),
        note: this.$refs.StateBar.getAdd_note(),
        payment: this.$refs.PayState.getpayment_(),
        img: require('@/assets/img/Starbucks.png'),//待完成
        name: this.$refs.Avatar.getname_(),
        btime: this.$refs.Another.getDate_() + ' ' + this.$refs.Another.getTime_(),
        consumption: this.$refs.PayState.geAmount_()
      }
      console.log(recode_new)
    }
  },
};
</script >
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
}
</style>
