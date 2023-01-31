<template>
  <div class="basic">
    <Title_Captcha>
      <p class="tip1_Captcha" :key="2">找回密码</p>
      <p class="tip2_Captcha" :key="3">请选择重置密码的方式</p>
    </Title_Captcha>
    <!-- <Forgot_Password_Line>
            <p class="Tip1_Forget_Password">发送到您的邮箱 ✉️</p>
            <p class="Tip2_Forget_Password">密码重置链接已发送至您的邮箱</p>
        </Forgot_Password_Line> -->
    <Forgot_Password_Line>
      <p class="Tip1_Forget_Password">发送到您的电话号码 📲</p>
      <p class="Tip2_Forget_Password">密码重置链接已发送至您的手机号码</p>
    </Forgot_Password_Line>
    <Forgot_Password_Button>
      <router-link
        class="base_Forgot_Password_Button_p"
        :to="{
          name: 'SignUp',
        }"
        >登录</router-link
      >
    </Forgot_Password_Button>
    <Forgot_Password_Button> 重新发送验证码 </Forgot_Password_Button>
  </div>
</template>

<script>
import Title_Captcha from "../components/captcha/Title_Captcha.vue";
import Forgot_Password_Line from "../components/Forgot_Password/Forgot_Password_Line.vue";
import Forgot_Password_Button from "../components/Forgot_Password/Forgot_Password_Button.vue";

export default {
  name: "Forgot_Password",
  components: {
    Title_Captcha,
    Forgot_Password_Line,
    Forgot_Password_Button,
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
