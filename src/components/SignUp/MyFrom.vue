<template>
  <form id="from" class="from">
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInLeft"
    >
      <MyUserName @UserName="UserName" :key="1" />
      <MyPhoneNumber @PhoneNumber="PhoneNumber" :key="2" />
      <MyBirthday @setBirthDay="setBirthDay" :key="3"></MyBirthday>
      <MyPassword @Password="Password" :key="4" />
      <MyTip @IsAgree="isAgree" :key="5" />
      <input
        type="submit"
        class="base_button"
        value="注册登录"
        :key="6"
        @click.prevent="submit"
      />
    </transition-group>
  </form>
</template>
<script>
import axios from "axios";
import "animate.css";
import MyUserName from "@/components/SignUp/MyUserName.vue";
import MyPhoneNumber from "@/components/SignUp/MyPhoneNumber.vue";
import MyPassword from "@/components/SignUp/MyPassword.vue";
import MyTip from "@/components/SignUp/MyTip.vue";
import MyBirthday from "@/components/SignUp/MyBirthday.vue";
export default {
  name: "MyFrom",
  components: { MyUserName, MyPhoneNumber, MyPassword, MyTip, MyBirthday },
  data() {
    return {
      userinfo: {
        phonenumbe: "",
        username: "",
        password: "",
        IsAgree: false,
        birthday: "",
      },
    };
  },
  methods: {
    submit() {
      if (this.userinfo.IsAgree === true) {
        axios({
          method: "post",
          url: "https://mineralsteins.icu:8080/a37/verifycode",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: { uphone: this.userinfo.phonenumbe },
        }).then(
          (response) => {
            console.log(response.data.code[0]);
            this.$router.push({
              name: "Captcha",
              params: {
                iswx: false,
                iszfb: false,
                uname: this.userinfo.username,
                uphone: this.userinfo.phonenumbe,
                ubirth: this.userinfo.birthday,
                password: this.userinfo.password,
                check: response.data.code[0],
              },
            });
          },
          (error) => {
            this.$alert("", "网络故障,请检查网络后重试", {
              confirmButtonText: "确定",
              showClose: false,
              center: true,
              type: "warning",
              customClass: "fail",
            });
          }
        );
      } else {
        this.$alert("", "请阅读并确认用户协议", {
          confirmButtonText: "确定",
          showClose: false,
          center: true,
          type: "warning",
          customClass: "fail",
        });
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
      this.userinfo.IsAgree = t;
    },
    setBirthDay(birtydayInfo) {
      this.birtydayInfo = birtydayInfo;
      let { year = "1900", month = "1", day = "1" } = this.birtydayInfo;
      this.userinfo.birthday = `${year}-${month}-${day}`;
    },
  },
};
</script>

<style lang="less" >
.from {
  width: 7.5rem;
  border-radius: 0.32rem;

  background-color: #ffffff;
}

.logo {
  position: absolute;
  left: 0.38rem;
  top: 1.08rem;
  width: 0.48rem;
  height: 0.48rem;
  z-index: 2;
}

.form__div {
  position: relative;
  height: 1.96rem;
  margin-bottom: 0.48rem;
  margin: 0.32rem 0.48rem 0;
}

.form__title {
  color: #121826;
  font-family: Manrope;
  font-size: 0.28rem;
  font-weight: 500;
  line-height: 0.48rem;
}

.form__input {
  position: absolute;
  left: 0;
  top: 0.68rem;
  width: 6.54rem;
  height: 1.28rem;
  padding-left: 0.96rem;
  background: none;
  outline: none;
  z-index: 1;
  border-radius: 0.32rem;
  background: #f4f4f6;
  background-blend-mode: normal;
  border: none;
  font-size: 0.28rem;
  font-weight: 500;
  line-height: 0.48rem;
}

.base_button {
  position: relative;
  width: 6.54rem;
  height: 1.28rem;
  border-radius: 0.48rem;
  background: #928fff;
  opacity: 0.4;
  margin-left: 0.48rem;
  background-blend-mode: normal;
  border: none;
  color: #ffffff;
  font-family: Manrope;
  font-size: 0.32rem;
  font-weight: 700;
  line-height: 0.52rem;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  margin-top: 0.32rem;
}

.base_button:hover {
  box-shadow: 0 0.2rem 0.72rem rgba(0, 0, 0, 0.15);
  opacity: 1;
}
</style>