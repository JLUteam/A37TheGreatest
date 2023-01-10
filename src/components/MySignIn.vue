<template>
  <transition appear name="animate__animated animate__bounce" enter-active-class="animate__backInUp">
    <div class="signin">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: "MySignIn",
  data() {
    return {};
  },
};
</script>
<style >
.signin {
  display: flex;
  justify-content: center;
  background-color: #ffffff;
}

.signin_tip {
  color: #121826;
  font-family: Manrope;
  font-size: .28rem;
  font-weight: 400;
  line-height: .48rem;
}

.signin_a {
  display: inline-block;
  position: relative;
  color: #4a44c6;
  font-weight: bold;
  text-decoration: none;
  margin-left: .16rem;
}
</style>