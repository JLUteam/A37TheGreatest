<template>
  <form id="from" class="from">
    <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__backInLeft">
      <MyUserName @UserName="UserName" :key="1" />
      <!-- <MyPhoneNumber @PhoneNumber="PhoneNumber" :key="2"/> -->
      <MyPassword @Password="Password" :key="2" />
      <input type="submit" class="base_button" value="登录" :key="6" @click.prevent="submit" />
    </transition-group>
  </form>
</template>
<script>
import "animate.css";
import MyUserName from "./MyUserName.vue";
import MyPassword from "./MyPassword.vue";
export default {
  name: "MyFromSignIn",
  components: { MyUserName, MyPassword },
  data() {
    return {
      userinfo: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {

      console.log(JSON.stringify(this.userinfo));
      // } else {
      //   alert("没有确认同意用户协议");
      // }
    },
    UserName(UserName) {
      this.userinfo.username = UserName;
    },
    Password(Password) {
      this.userinfo.password = Password;
    },
    isAgree(t) {
      this.userinfo.IsAgree = t;
    }
  },
};
</script>

<style lang="less" scoped >
.from {
  width: 7.5rem;
  border-radius: .32rem;
  background-color: #ffffff;
}

.form__div {
  position: relative;
  height: 1.96rem;
  margin-bottom: 7.68rem;
  margin: .32rem .48rem 0;
}

.form__title {
  color: #121826;
  font-family: Manrope;
  font-size: .28rem;
  font-weight: 500;
  line-height: .48rem;
}

.form__input {
  position: absolute;
  left: 0;
  top: .68rem;
  width: 6.54rem;
  height: 1.28rem;
  padding-left: .96rem;
  outline: none;
  z-index: 1;
  border-radius: .32rem;
  background: #f4f4f6;
  background-blend-mode: normal;
  border: none;
}

.base_button {
  position: relative;
  width: 6.54rem;
  height: 1.28rem;
  border-radius: .48rem;
  background: #928fff;
  opacity: 0.4;
  margin-left: .48rem;
  background-blend-mode: normal;
  border: none;
  color: #ffffff;
  font-family: Manrope;
  font-size: .32rem;
  font-weight: 700;
  line-height: .52rem;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  margin-top: .32rem;
}

.base_button:hover {
  box-shadow: 0 .2rem .72rem rgba(0, 0, 0, 0.15);
  opacity: 1;
}
</style>