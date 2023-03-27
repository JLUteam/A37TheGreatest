<template>
  <transition appear name="animate__animated animate__bounce" enter-active-class="animate__backInUp">
    <div class="signin">
      <p class="signin_tip">
        <slot name="signin"></slot>
      </p>
      <router-link class="signin_a" :to="{
        name
      }">
        <slot name="Sign_Up"></slot>
      </router-link>
    </div>
  </transition>
</template>
<script>
export default {
  name: "MySignIn",
  data() {
    return {
      name: this.$route.name === 'SignUp' ? 'SignIn' :'SignUp'
    };
  },
};
</script>
<style  lang="less" scoped>
.signin {
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  margin-top: .25rem;
  margin-left:.2rem ;

  .signin_tip {
    color: #121826;
    font-family: Manrope;
    font-size: .28rem;
    font-weight: 400;
    line-height: .48rem;
  }

  .signin_a {
    display: inline-block;
    color: #4a44c6;
    font-weight: bold;
    text-decoration: none;
    margin-left: .16rem;
  }
}
</style>