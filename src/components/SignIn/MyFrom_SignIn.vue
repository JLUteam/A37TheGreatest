<template>
  <form id="from" class="from">
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInLeft"
    >
      <MyPhoneNumber @PhoneNumber="PhoneNumber" :key="1" />
      <!-- <MyPhoneNumber @PhoneNumber="PhoneNumber" :key="2"/> -->
      <MyPassword @Password="Password" :key="2" />
      <input
        type="submit"
        class="base_button"
        value="登录"
        :key="6"
        @click.prevent="submit"
      />
    </transition-group>
  </form>
</template>
<script>
import axios from "axios";
import "animate.css";
import MyPhoneNumber from "@/components/SignUp/MyPhoneNumber.vue";
import MyPassword from "@/components/SignUp/MyPassword.vue";
export default {
  name: "MyFromSignIn",
  components: { MyPhoneNumber, MyPassword },
  data() {
    return {
      userinfo: {
        phonenumber: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      var users = {
        uphone: this.userinfo.phonenumber,
        password: this.userinfo.password,
      };
      axios({
        method: "post",
        url: "https://mineralsteins.icu:8080/a37/login",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: users,
      }).then(
        (response) => {
          console.log(response.data);
          if (response.data.login === true) {
            this.$router.push({
              name: "home",
            });
          } else if (response.data.login === false) {
            this.$alert("", "手机号或密码有误", {
              confirmButtonText: "确定",
              showClose: false,
              center: true,
              type: "warning",
              customClass: "fail",
            });
          }
        },
        (error) => {
          this.$alert(error, "网络故障", {
            confirmButtonText: "确定",
            showClose: false,
            center: true,
            type: "warning",
            customClass: "fail",
          });
        }
      );
      // } else {
      //   alert("没有确认同意用户协议");
      // }
    },
    PhoneNumber(PhoneNumber) {
      this.userinfo.phonenumber = PhoneNumber;
    },
    Password(Password) {
      this.userinfo.password = Password;
    },
    isAgree(t) {
      this.userinfo.IsAgree = t;
    },
  },
};
</script>

<style lang="less" scoped >
.from {
  width: 7.5rem;
  border-radius: 0.32rem;
  background-color: #ffffff;
}

.form__div {
  position: relative;
  height: 1.96rem;
  margin-bottom: 7.68rem;
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
  outline: none;
  z-index: 1;
  border-radius: 0.32rem;
  background: #f4f4f6;
  background-blend-mode: normal;
  border: none;
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