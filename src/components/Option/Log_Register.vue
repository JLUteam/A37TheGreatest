<template>
  <div class="Log_Register">
    <input type="submit" class="log-register__submit" value="登录" @click.prevent="submit" />
    <router-link class="log-register__sign-in" :to="{
      name: 'SignUp',
    }">注册账号</router-link>
  </div>
</template>
<script>
export default {
  name: "Log_Register",
  methods: {
    submit() {
      this.$router.push({
        name: "SignIn",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.Log_Register {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  margin-bottom: 0.32rem;
}

.log-register__submit {
  width: 6.54rem;
  height: 1.28rem;
  border-radius: 0.48rem;
  background: #928fff;
  opacity: 0.4;
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

  &:hover {
    box-shadow: 0 0.2rem 0.72rem rgba(0, 0, 0, 0.15);
    opacity: 1;
  }
}



.log-register__sign-in {
  margin-top: 0.32rem;
  display: block;
  position: relative;
  color: #4a44c6;
  font-weight: bold;
  text-decoration: none;
}
</style>