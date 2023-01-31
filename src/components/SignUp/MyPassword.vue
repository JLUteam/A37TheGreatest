<template>
  <div id="password" class="form__div">
    <label for="password_input" id="title" class="form__title">密码</label>
    <img class="logo" src="@/assets/svg/IconsLock.svg" alt="IconsLock" />
    <router-link
      :to="{
        name: 'Forgot_Password',
      }"
      class="forgot"
      >忘记</router-link
    >
    <img
      class="IconsEye"
      :src="currentImage_IconsEye"
      alt="IconsEye_Fasle"
      @click="togglePasswordVisibility"
    />
    <input
      :type="passwordvisible ? 'text' : 'password'"
      v-model="password"
      class="form__input"
      id="password_input"
      placeholder="请输入您的密码"
    />
  </div>
</template>
<script>
export default {
  name: "MyPassword",
  data() {
    return {
      password: "",
      passwordvisible: false,
      currentImage_IconsEye: require("@/assets/svg/IconsEye_False.svg"),
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordvisible = !this.passwordvisible;
      if (
        this.currentImage_IconsEye ===
        require("@/assets/svg/IconsEye_False.svg")
      ) {
        this.currentImage_IconsEye = require("@/assets/svg/IconsEye_True.svg");
      } else {
        this.currentImage_IconsEye = require("@/assets/svg/IconsEye_False.svg");
      }
    },
  },
  watch: {
    password(val) {
      this.$emit("Password", val);
    },
  },
};
</script>

<style scoped>
.logo {
  position: absolute;
  left: 0.38rem;
  top: 1.08rem;
  width: 0.48rem;
  height: 0.48rem;
  z-index: 2;
}

.forgot {
  position: absolute;
  text-decoration: none;
  z-index: 2;
  left: 4.32rem;
  top: 1.08rem;
  width: 1.06rem;
  height: 0.48rem;
  color: #4a44c6;
  font-family: Manrope;
  font-size: 0.28rem;
  font-weight: 700;
  line-height: 0.48rem;
  text-align: right;
}

.IconsEye {
  z-index: 2;
  position: absolute;
  left: 5.6rem;
  top: 1.08rem;
  width: 0.48rem;
  height: 0.48rem;
  cursor: pointer;
}
</style>