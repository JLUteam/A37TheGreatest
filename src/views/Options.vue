<template>
  <div class="basic">
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInDown"
    >
      <MyShow :key="3" />
      <FullLogo :key="2" />
      <AV_LOG_INFO :key="1" />
    </transition-group>
    <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInUp"
    >
      <Log_Register></Log_Register>
    </transition>
  </div>
</template>

<script>
import MyShow from "../components/Show.vue";
import FullLogo from "../components/FullLogo.vue";
import AV_LOG_INFO from "../components/AV_LOG_INFO.vue";
import Log_Register from "../components/Log_Register.vue";
export default {
  name: "MyOptions",
  components: {
    MyShow,
    FullLogo,
    AV_LOG_INFO,
    Log_Register,
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
