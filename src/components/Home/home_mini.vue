<template>
  <div :class="flag ? 'basic_dark' : 'basic'">
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInDown"
    >
      <Top key="1"></Top>
      <Consumption key="2"></Consumption>
      <Category_Chart key="3"></Category_Chart>
    </transition-group>
    <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInUp"
    >
      <Transactions ></Transactions>
    </transition>
  </div>
</template>
<script>
import ButtomNav from "@/components/ButtomNav.vue";
import Category_Chart from "@/components/Home/Category_Chart.vue";
import Consumption from "@/components/Home/Consumption.vue";
import Top from "@/components/Home/Top.vue";
import Transactions from "@/components/Home/Transactions.vue";
export default {
  name: "home_mini",
  components: {
    Top,
    Consumption,
    Category_Chart,
    ButtomNav,
    Transactions,
  },
  computed: {
    flag() {
      return this.$store.state.Transactions_pull;
    },
  },
};
</script>
<style scoped>
.basic {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #121826; */
}

.basic_dark {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #121826;
}

::-webkit-scrollbar {
  display: none;
}
</style>
