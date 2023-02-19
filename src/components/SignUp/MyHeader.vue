<template>
  <div>
    <div class="Header">
      <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__backInLeft">
        <div class="item_1" :key="1"></div>
        <img class="fullLogo" src="@/assets/img/suixinji.png" :key="2" />
        <p class="logoname" :key="3">随心记</p>
        <p class="tip1" :key="4">
          <slot name='tip1'></slot>
        </p>
        <p class="tip2" :key="5">
          <slot name="tip2"></slot>
        </p>

      </transition-group>
      <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__backInRight">
        <div class="item_2" :key="1"></div>
        <div class="item_3" :key="2"></div>
        <div class="item_4" :key="3">
          <router-link :to="{
            name: 'Options'
          }">
            <img class="IconsClose" src="@/assets/svg/IconsClose.svg" alt="">
          </router-link>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyHeader",
};
</script>

<style lang="less" scoped >
.Header {
  position: relative;
  width: 7.5rem;
  height: 3.52rem;
  background-color: #ffffff;

  .item_1 {
    position: absolute;
    width: 2.2rem;
    height: .64rem;
    background: #e9e9ff;
    background-blend-mode: normal;
    border-radius: 0 10% 10% 0;
  }

  .item_2 {
    position: absolute;
    left: 5.3rem;
    top: 1.28rem;
    width: 2.2rem;
    height: .64rem;
    border-radius: .54rem;
    background: #e9e9ff;
    background-blend-mode: normal;
    border-radius: 10% 0 0 10%;
  }

  .item_3 {
    position: absolute;
    left: 6.04rem;
    top: 2.08rem;
    width: 1.46rem;
    height: .64rem;
    border-radius: .54rem;
    background: #bebcff;
    background-blend-mode: normal;
    border-radius: 10% 0 0 10%;
  }

  .item_4 {
    position: absolute;
    left: 6.3rem;
    top: 0.9rem;
    width: .8rem;
    height: .8rem;
    border-radius: .8rem;
    background: #928fff;
    background-blend-mode: normal;
  }

  .IconsClose {
    position: relative;
    left: .15rem;
    top: .15rem;
    width: .5rem;
    height: .5rem;
    cursor: pointer;
    background-blend-mode: normal;
    transform: rotate(90.00008deg);
  }

  .fullLogo {
    position: absolute;
    left: .48rem;
    top: 1.12rem;
    width: .64rem;
    height: .64rem;
    background-color: #bf2b7a;
    border-radius: .1rem;
  }

  .logoname {
    position: absolute;
    left: 1.3rem;
    top: 1.1rem;
    color: #121826;
    font-family: Manrope;
    font-size: .30rem;
    font-weight: 500;
    line-height: .64rem;
  }

  .tip1 {
    position: absolute;
    left: .48rem;
    top: 1.92rem;
    width: 5.42rem;
    height: .64rem;
    color: #121826;
    font-family: Manrope;
    font-size: .44rem;
    font-weight: 700;
    line-height: .64rem;
  }

  .tip2 {
    position: absolute;
    left: .48rem;
    top: 2.72rem;
    width: 5.42rem;
    height: .48rem;
    color: #6c727f;
    font-family: Manrope;
    font-size: .28rem;
    font-weight: 400;
    line-height: .48rem;
  }
}
</style>