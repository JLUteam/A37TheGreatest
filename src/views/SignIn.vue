<template>
  <div class="basic">
    <MyHeader>
      <template v-slot:tip1> 欢迎回来 </template>
      <template v-slot:tip2> 让我们再次启程吧！ </template>
    </MyHeader>
    <MyFromSignIn />
    <MySocialSignIn />
    <MySignIn>
      <template v-slot:signin> 还没有创建账号 </template>
      <template v-slot:Sign_Up> 注册 </template>
    </MySignIn>
  </div>
</template>
<script>
import MyHeader from "../components/SignUp/MyHeader.vue";
import MyFromSignIn from "../components/SignIn/MyFrom_SignIn.vue";
import MySocialSignIn from "../components/SignIn/MySocialSignIn.vue";
import MySignIn from "../components/SignUp/MySignIn.vue";
export default {
  name: "SignIn",
  components: {
    MyHeader,
    MyFromSignIn,
    MySocialSignIn,
    MySignIn,
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
