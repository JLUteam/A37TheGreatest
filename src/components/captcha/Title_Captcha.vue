<template>
  <div class="title_Captcha">
    <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__backInLeft">
      <img class="fullLogo_Captcha" src="../../assets/svg/FullLogo.svg" alt="email" :key="1" />
      <slot></slot>
      <div class="item_2_Captcha" :key="4"></div>
      <div class="item_3_Captcha" :key="5"></div>
      <div class="item_4_Captcha" :key="6">
        <router-link :to="{
          name: 'Options'
        }">
          <img class="IconsClose_Captcha" src="../../assets/svg/IconsClose.svg" alt="">
        </router-link>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "Title_Captcha",
};
</script>

<style lang="less" >
.title_Captcha {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 7.5rem;
  height: 3.52rem;
  background-color: #ffffff;
  padding-left: 0.75rem;

  .fullLogo_Captcha {
    /* position: absolute;
      left: .48rem; */
    /* top: 8.125rem; */
    width: 1.84rem;
    height: .48rem;
  }

  .item_2_Captcha {
    position: absolute;
    left: 5.3rem;
    top: 1.28rem;
    width: 2.2rem;
    height: .64rem;
    border-radius: .54rem;
    background: #e9e9ff;
    background-blend-mode: normal;
    border-radius: 10% 0 0 10%;
    z-index: 1;
  }

  .item_3_Captcha {
    position: absolute;
    left: 6.04rem;
    top: 2.08rem;
    width: 1.46rem;
    height: .64rem;
    border-radius: .54rem;
    background: #bebcff;
    background-blend-mode: normal;
    border-radius: 10% 0 0 10%;
    z-index: 1;
  }

  .item_4_Captcha {
    position: absolute;
    left: 0.6rem;
    top: 0.3rem;
    width: .8rem;
    height: .8rem;
    border-radius: .8rem;
    background: #928fff;
    background-blend-mode: normal;
  }

  .IconsClose_Captcha {
    position: relative;
    left: .15rem;
    top: .15rem;
    width: .5rem;
    height: .5rem;
    cursor: pointer;
    background-blend-mode: normal;
    transform: rotate(90.00008deg);
  }

  .tip1_Captcha {

    position: absolute;
    width: 6.54rem;
    margin-top: 0.1rem;
    color: #121826;
    font-family: Manrope;
    font-size: .44rem;
    font-weight: 700;
    line-height: .64rem;

  }

  .tip2_Captcha {
    position: absolute;
    width: 6.54rem;
    margin-top: 0.8rem;
    color: #6c727f;
    font-family: Manrope;
    font-size: .28rem;
    font-weight: 400;
    line-height: .48rem;
    z-index: 2;
  }
}
</style>