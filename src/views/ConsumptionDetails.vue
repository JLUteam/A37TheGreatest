<template>
  <div class="basic">
    <Back></Back>
    <Avatar :img="$route.query.recode.bpic" :name="$route.query.recode.bname">
    </Avatar>
    <StateBar :recode="$route.query.recode"></StateBar>
    <PayState :recode="$route.query.recode"></PayState>
    <Another :recode="$route.query.recode"></Another>
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
    console.log(this.$route.query);
  },
};
</script>
<style scoped>
.basic {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
