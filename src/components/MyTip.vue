<template>
  <div class="terms" id="terms">
    <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__backInLeft">
      <div class="Checkbox" :key="1">
        <div class="check" @click="toggleisagree">
          <img class="Checkbox_img" :src="currentImage_Checkbox" alt="Agree" />
        </div>
        <div :class="mood"></div>
      </div>
      <p class="tip" :key="2">
        By Creating your account you have to agree with our Terms and Condition
      </p>
    </transition-group>
  </div>
</template>
<script >
export default {
  name: "MyTip",
  data() {
    return {
      isagree: false,
      currentImage_Checkbox: require("../assets/svg/Checkbox_False.svg"),
      mood: "rectangle_false",
    };
  },
  methods: {
    toggleisagree() {
      this.isagree = !this.isagree;
      if (
        this.currentImage_Checkbox ===
        require("../assets/svg/Checkbox_False.svg")
      ) {
        this.currentImage_Checkbox = require("../assets/svg/Checkbox_true.svg");
        this.mood = "rectangle_true";
      } else {
        this.currentImage_Checkbox = require("../assets/svg/Checkbox_False.svg");
        this.mood = "rectangle_false";
      }
    },
  },
  watch: {
    isagree: {
      handler(val) {
        this.$emit("IsAgree", val);
      },
    },
  },
};
</script>

<style lang="less" scoped>
.terms {
  position: relative;
  margin: .48rem;
  width: 6.56rem;
  height: .64rem;
  background-color: #ffffff;

  .Checkbox {
    position: absolute;
    width: .36rem;
    height: .36rem;
    margin-top: .16rem;
    cursor: pointer;

    .check {
      position: absolute;
      z-index: 2;
      width: .16rem;
      height: .12rem;
      background-blend-mode: normal;
    }

    .rectangle_true {
      position: absolute;
      z-index: 0;
      width: .36rem;
      height: .36rem;
      border-radius: .08rem;
      background: #928fff;
      background-blend-mode: normal;
    }

    .rectangle_false {
      position: absolute;
      z-index: 0;
      width: .36rem;
      height: .36rem;
      border-radius: .08rem;
      background: #d3d3d3;
      background-blend-mode: normal;
    }
  }

  .Checkbox_img {
    width: .36rem;
    height: .36rem;
  }

  .tip {
    position: absolute;
    width: 6.8rem;
    height: .64rem;
    color: #6c727f;
    padding-left: .48rem;
    font-family: Manrope;
    font-size: .24rem;
    font-weight: 400;
    line-height: .32rem;
  }

  .tip2 {
    color: #4a44c6;
    font-family: Manrope;
    font-weight: bold;
  }
}
</style>