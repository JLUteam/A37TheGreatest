<template>
  <div class="Logout">
    <button class="Logout_button" @click="logout">退出账号</button>
  </div>
</template>
<script>
export default {
  name: "Logout",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$router.push({
        name: "Options",
      });
    },
  },
  computed: {},
};
</script>
<style lang="less" scoped>
.Logout {
  position: absolute;
  top: 78%;
  .Logout_button {
    width: 6.54rem;
    height: 1.28rem;
    border-radius: 0.48rem;
    background: #fff;
    border: 0.1rem solid #f4f4f6;
    color: #932205;
    font-family: Manrope;
    font-size: 0.32rem;
    font-weight: 700;
    line-height: 0.52rem;
    text-align: center;
    transition: background 0.3s;
  }

  .Logout_button:hover {
    background: #e9e9ff;
    border: 0.1rem solid #e9e9ff;
  }
}
</style>