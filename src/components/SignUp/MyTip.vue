<template>
  <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__backInLeft">
    <div class="terms" :key="1">

      <div class="Checkbox">
        <div class="check" @click="toggleisagree" :class="mood">
          <img class="Checkbox_img" :src="currentImage_Checkbox" alt="Agree" />
        </div>
      </div>
      <p class="tip">
        登录或完成注册即代表您同意用户协议
      </p>
    </div>
  </transition-group>
</template>
<script >
export default {
  name: "MyTip",
  data() {
    return {
      isagree: false,
      currentImage_Checkbox: require("@/assets/svg/Checkbox_False.svg"),
      mood: "rectangle_false",
    };
  },
  methods: {
    toggleisagree() {
      this.isagree = !this.isagree;
      if (
        this.currentImage_Checkbox ===
        require("@/assets/svg/Checkbox_False.svg")
      ) {
        this.currentImage_Checkbox = require("@/assets/svg/Checkbox_true.svg");
        this.mood = "  rectangle_true";
      } else {
        this.currentImage_Checkbox = require("@/assets/svg/Checkbox_False.svg");
        this.mood = " rectangle_false";
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
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;

  height: .64rem;
  background-color: #ffffff;

  .Checkbox {

    cursor: pointer;
    margin-left: .96rem;

    .check {
      width: .36rem;
      height: .36rem;
      border-radius: .08rem;
      background-blend-mode: normal;

      .Checkbox_img {
        width: .36rem;
        height: .36rem;
      }
    }

    .rectangle_true {
      background-color: #928fff;
    }

    .rectangle_false {
      background-color: #d3d3d3;
    }


  }



  .tip {

    width: 6.8rem;
    color: #6c727f;
    font-family: Manrope;
    font-size: .24rem;
    font-weight: 400;
    line-height: .32rem;
    margin-left: .48rem;
  }

}
</style>