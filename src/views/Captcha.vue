<template>
  <div class="basic">
    <Title_Captcha>
      <p class="tip1_Captcha" :key="2">电话验证</p>
      <p class="tip2_Captcha" :key="3">
        我们已将代码发送到您的号码：<br />(+86){{ $route.params.uphone }}
      </p>
    </Title_Captcha>
    <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInLeft"
    >
      <Captcha_Captcha></Captcha_Captcha>
    </transition>
  </div>
</template>
<script>
import Captcha_Captcha from "../components/captcha/Captcha_Captcha.vue";
import Title_Captcha from "../components/captcha/Title_Captcha.vue";
export default {
  name: "MyCaptcha",
  components: {
    Title_Captcha,
    Captcha_Captcha,
  },
  mounted() {
    console.log("C");
    this.$router.push({
      name: "captchanput",
      params: this.$route.params,
    });
  },
};
</script>

<style scoped>
.basic {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
