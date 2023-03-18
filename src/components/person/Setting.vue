<template>
  <div class="Setting">
    <div class="MyAccount" @click="toMyAccount(true)">
      <div class="Myimg">
        <img src="@/assets/svg/person_active.svg" alt="" />
      </div>
      <p>修改账户信息</p>
      <img src="@/assets/svg/next.svg" alt="" class="next" />
    </div>
    <div class="MySetting" @click="toSetting">
      <div class="Myimg">
        <img src="@/assets/svg/setting.svg" alt="" />
      </div>
      <p>设置</p>
      <img src="@/assets/svg/next.svg" alt="" class="next" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Setting",
  data() {
    return {};
  },
  methods: {
    toMyAccount(bcategory) {
      this.$router.push({
        name: "person_MyAccount",
        query: {
          Ischange: bcategory,
        },
      });
    },
    toSetting() {
      this.$router.push({
        name: "person_Setting",
      });
    },
  },
  computed: {},
};
</script>
<style lang="less" scoped>
.Setting {
  .MyAccount {
    width: 6.54rem;
    height: 0.96rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 0.5rem;

    .Myimg {
      width: 0.96rem;
      height: 0.96rem;
      border-radius: 0.32rem;
      background: #e9e9ff;
      background-blend-mode: normal;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 0.48rem;
        height: 0.48rem;
      }
    }

    p {
      width: 3.62rem;
      height: 0.48rem;
      color: #121826;
      font-family: Manrope;
      font-size: 0.28rem;
      font-weight: 700;
      line-height: 0.48rem;
    }

    .next {
      width: 0.48rem;
      height: 0.48rem;
    }
  }

  .MySetting {
    width: 6.54rem;
    height: 0.96rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 0.5rem;

    .Myimg {
      width: 0.96rem;
      height: 0.96rem;
      border-radius: 0.32rem;
      background: #e9e9ff;
      background-blend-mode: normal;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 0.48rem;
        height: 0.48rem;
      }
    }

    p {
      width: 3.62rem;
      height: 0.48rem;
      color: #121826;
      font-family: Manrope;
      font-size: 0.28rem;
      font-weight: 700;
      line-height: 0.48rem;
    }

    .next {
      width: 0.48rem;
      height: 0.48rem;
    }
  }
}
</style>