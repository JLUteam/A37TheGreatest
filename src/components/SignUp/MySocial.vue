<template>
  <transition appear name="animate__animated animate__bounce" enter-active-class="animate__backInUp">
    <div class="social">
      <a class="wechat">
        <img class='icon' src="@/assets/img/wechat.png" alt="Icon" />
        <p>使用微信登录</p>
      </a>
      <a class="zhifubao">
        <img class='icon' src="@/assets/img/alipay.png" alt="Icon" />
        <p>使用支付宝登录</p>
      </a>
    </div>
  </transition>
</template>
<script>
export default {
  name: "MySocial",
  data() {
    return {
       appId: "2021001165650001",
    };
  },
   methods: {
    getAuthCode_() {
      // console.log('getAuthCode_');
      // console.log(this.appId);
      // console.log(ap)
      // console.log(ap.getAuthCode)
      ap.getAuthCode({
        appId: `${this.appId}`,
        scopes: ['auth_user']
      }, function (res) {
        if (res.authCode) {
        ap.alert(JSON.stringify(res));
        } 
      });




    }
  }
};
</script>

<style  lang="less" scoped>
.social {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 6.48rem;
  height: 1.28rem;
  margin: .32rem .48rem .32rem;
  background-color: #ffffff;

  .wechat {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 3.12rem;
    height: 1.28rem;
    border-radius: .48rem;
    transition: 0.3s;
    cursor: pointer;
    border: .03rem dashed #E9E9FF;
  }

  .wechat:hover {
    box-shadow: 0 .2rem .72rem rgba(0, 0, 0, 0.15);
  }

  .icon {
    width: .48rem;
    height: .48rem;
  }

  .zhifubao {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 3.12rem;
    height: 1.28rem;
    border-radius: .48rem;
    transition: 0.3s;
    cursor: pointer;
    border: .03rem dashed #E9E9FF;
  }

  .zhifubao:hover {
    box-shadow: 0 .2rem .72rem rgba(0, 0, 0, 0.15);
  }
}
</style>