<template>
  <div class="terms" id="terms">
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInLeft"
    >
      <div class="Checkbox" :key="1">
        <div class="check" @click="toggleisagree">
          <img :src="currentImage_Checkbox" alt="Agree" />
        </div>
        <div :class="mood"></div>
      </div>
      <p class="tip" :key="2">
        By Creating your account you have to agree with our Terms and Condition
      </p>
    </transition-group>
  </div>
</template>
<script>
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

<style>
.terms {
  position: relative;
  /* left: 0rem;
  top: 21.375rem; */
  margin: 1.5rem;
  width: 328px;
  height: 32px;
  background-color: #ffffff;
}

.terms .Checkbox {
  position: absolute;
  width: 18px;
  height: 18px;
  margin-top: 0.5rem;
  cursor: pointer;
}

.terms .Checkbox .check {
  position: absolute;
  z-index: 2;
  width: 8px;
  height: 6px;
  background-blend-mode: normal;
}

.terms .Checkbox .rectangle_true {
  position: absolute;
  z-index: 0;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background: #928fff;
  background-blend-mode: normal;
}

.terms .Checkbox .rectangle_false {
  position: absolute;
  z-index: 0;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background: #d3d3d3;
  background-blend-mode: normal;
}

.terms .tip {
  position: absolute;
  width: 340px;
  height: 32px;
  color: #6c727f;
  padding-left: 1.5rem;
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.terms .tip2 {
  color: #4a44c6;
  font-family: Manrope;
  font-weight: bold;
}
</style>