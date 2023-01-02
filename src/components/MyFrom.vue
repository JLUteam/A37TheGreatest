<template>
    <form id="from"  class="from">
        <transition-group 
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInLeft"
        >
        <MyUserName @UserName="UserName" :key="1"/>
        <MyPhoneNumber @PhoneNumber="PhoneNumber" :key="2"/>
        <MyPassword @Password="Password" :key="3"/>
        <MyTip @IsAgree="isAgree" :key="4"/>
        <input type="submit" class="base_button" value="Sign In" :key="5" @click.prevent="submit"></input>
        </transition-group>
    </form>
</template>
<script>
import "animate.css";
import MyUserName from "./MyUserName.vue";
import MyPhoneNumber from "./MyPhoneNumber.vue";
import MyPassword from "./MyPassword.vue";
import MyTip from "./MyTip.vue";
export default {
  name: "MyFrom",
  components: { MyUserName, MyPhoneNumber, MyPassword, MyTip },
  data() {
    return {
      userinfo: {
        phonenumbe: "",
        username: "",
        password: "",
        IsAgree: false,
      },
    };
  },
  methods: {
    submit() {
      if (this.userinfo.IsAgree === true) {
        console.log(JSON.stringify(this.userinfo));
      } else {
        alert("没有确认同意用户协议");
      }
    },
    UserName(UserName) {
      this.userinfo.username = UserName;
    },
    PhoneNumber(PhoneNumber) {
      this.userinfo.phonenumbe = PhoneNumber;
    },
    Password(Password) {
      this.userinfo.password = Password;
    },
    isAgree(t) {
      console.log("我接受到", t);
      this.userinfo.IsAgree = t;
    },
  },
};
</script>

<style>
.from {
  width: 375px;
  border-radius: 1rem;

  background-color: #ffffff;
}

.form__div {
  position: relative;
  height: 98px;
  margin-bottom: 1.5rem;
  margin: 1rem 1.5rem 0;
}

.form__title {
  color: #121826;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

.form__input {
  position: absolute;
  left: 0;
  top: 2.125rem;
  width: 327px;
  height: 64px;
  padding-left: 3rem;
  background: none;
  outline: none;
  z-index: 1;
  border-radius: 1rem;
  background: #f4f4f6;
  background-blend-mode: normal;
  border: none;
}

.base_button {
  position: relative;
  width: 327px;
  height: 64px;
  border-radius: 1.5rem;
  background: #928fff;
  opacity: 0.4;
  margin-left: 1.5rem;
  background-blend-mode: normal;
  border: none;
  color: #ffffff;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
}

.base_button:hover {
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.15);
  opacity: 1;
}
</style>