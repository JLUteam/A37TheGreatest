<template>
  <transition appear name="animate__animated animate__bounce" enter-active-class="animate__backInUp">

    <div class="social">
      <p class="tip">Or continue with social account</p>
      <a id="google">
        <img class='icon' src="../assets/svg/IconsGoogle.svg" alt="Icon" />
        <p class="signup">Sign In with Google</p>
      </a>
      <a id="Facebook">
        <img class="icon" src="../assets/svg/IconsFacebook.svg" alt="Icon" />
        <p class="signup">Sign In with Facebook</p>
      </a>

    </div>
  </transition>
</template>
<script>
export default {
  name: "MySocialSignIn",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.social {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 6.48rem;
  margin: .32rem .48rem .32rem;
  background-color: #ffffff;

  .tip {
    position: relative;
    height: .48rem;
    color: #6c727f;
    font-family: Manrope;
    font-size: .28rem;
    font-weight: 400;
    line-height: .48rem;
    text-align: center;
  }

  .icon {
    position: absolute;
    width: .54rem;
    top: .384rem;
    left: 1.28rem;
  }

  #google {
    display: block;
    position: relative;
    width: 6.54rem;
    height: 1.28rem;
    border-radius: .48rem;
    transition: 0.3s;
    cursor: pointer;
    border: .03rem dashed #f4f4f6;
  }

  #google:hover {
    box-shadow: 0 .2rem .72rem rgba(0, 0, 0, 0.15);
  }

  .signup {
    position: relative;
    width: 4rem;
    left: 1.92rem;
    top: .384rem;
    font-family: Manrope;
    font-size: .32rem;
    font-weight: 700;
    line-height: .52rem;
  }

  #Facebook {
    display: block;
    position: relative;
    width: 6.54rem;
    height: 1.28rem;
    border-radius: .48rem;
    transition: 0.3s;
    cursor: pointer;
    border: .03rem dashed #f4f4f6;
  }

  #Facebook:hover {
    box-shadow: 0 .2rem .72rem rgba(0, 0, 0, 0.15);
  }
}
</style>