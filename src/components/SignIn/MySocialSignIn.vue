<template>
  <transition appear name="animate__animated animate__bounce" enter-active-class="animate__backInUp">

    <div class="social">
      <p class="tip">用其他方式登录</p>
      <a id="wechat">
        <img class='icon' src="@/assets/svg/wechat.svg" alt="Icon" />
        <p class="signup">微信账号登录</p>
      </a>
      <a id="zhifubao" @click="getAuthCode_()">
        <img class="icon" src="@/assets/svg/alipay.svg" alt="Icon" />
        <p class="signup">支付宝账号登录</p>
      </a>

    </div>
  </transition>
</template>
<script>

export default {
  name: "MySocialSignIn",
  data() {
    return {
      appId: "2021001165650001",
    };
  },
  methods: {
    getAuthCode_() {
      console.log('getAuthCode_');
      console.log(this.appId);
      ap.getAuthCode({
        appId: this.appId,
        scopes: ['auth_user']
      }, function (res) {
        consolo.log(res);
        if (res.authCode) {
          ap.alert('获取authCode成功: ' + res.authCode);
        } else {
          ap.alert('获取authCode失败: ' + res.errorMessage);
        }
    });

     
      

    }
  }
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
    left: 1.78rem;
  }

  #wechat {
    display: block;
    position: relative;
    width: 6.54rem;
    height: 1.28rem;
    border-radius: .48rem;
    transition: 0.3s;
    cursor: pointer;
    border: .03rem dashed #f4f4f6;
  }

  #wechat:hover {
    box-shadow: 0 .2rem .72rem rgba(0, 0, 0, 0.15);
  }

  .signup {
    position: relative;
    width: 4rem;
    left: 2.4rem;
    top: .384rem;
    font-family: Manrope;
    font-size: .32rem;
    font-weight: 700;
    line-height: .52rem;
  }

  #zhifubao {
    display: block;
    position: relative;
    width: 6.54rem;
    height: 1.28rem;
    border-radius: .48rem;
    transition: 0.3s;
    cursor: pointer;
    border: .03rem dashed #f4f4f6;
  }

  #zhifubao:hover {
    box-shadow: 0 .2rem .72rem rgba(0, 0, 0, 0.15);
  }
}
</style>