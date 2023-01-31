<template>
  <div :class="flag ? 'basic_dark' : 'basic'">
    <Home_mini></Home_mini>
    <ButtomNav></ButtomNav>
  </div>
</template>
<script>
import ButtomNav from "@/components/ButtomNav.vue";
import Home_mini from "@/components/Home/home_mini.vue";

export default {
  name: "home",
  components: {
    ButtomNav,
    Home_mini,
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
