<template>
  <div>
    <div class="title">
      <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInLeft"
      >
        <div class="item_1" :key="1"></div>
        <img
          class="fullLogo"
          src="../assets/svg/FullLogo.svg"
          alt="email"
          :key="2"
        />
        <p class="gettingSta" :key="3">Getting Started</p>
        <p class="createanac" :key="4">Create an account to continue!</p>
      </transition-group>
      <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInRight"
      >
        <div class="item_2" :key="1"></div>
        <div class="item_3" :key="2"></div>
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyLogo",
};
</script>

<style>
.title {
  position: relative;
  width: 375px;
  height: 176px;
  background-color: #ffffff;
}

.title .item_1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  height: 32px;
  background: #e9e9ff;
  background-blend-mode: normal;
  border-radius: 0 10% 10% 0;
}

.title .item_2 {
  position: absolute;
  left: 16.5625rem;
  top: 4rem;
  width: 110px;
  height: 32px;
  border-radius: 27px;
  background: #e9e9ff;
  background-blend-mode: normal;
  border-radius: 10% 0 0 10%;
}

.title .item_3 {
  position: absolute;
  left: 18.875rem;
  top: 6.5rem;
  width: 73px;
  height: 32px;
  border-radius: 27px;
  background: #bebcff;
  background-blend-mode: normal;
  border-radius: 10% 0 0 10%;
}

.title .fullLogo {
  position: absolute;
  left: 1.5rem;
  top: 3.5rem;
  width: 92px;
  height: 24px;
}

.title .gettingSta {
  position: absolute;
  left: 1.5rem;
  top: 6rem;
  width: 271px;
  height: 32px;
  color: #121826;
  font-family: Manrope;
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
}

.title .createanac {
  position: absolute;
  left: 1.5rem;
  top: 8.5rem;
  width: 271px;
  height: 24px;
  color: #6c727f;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}
</style>