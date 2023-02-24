<template id="app">
  <div class="captcha">
    <input
      v-for="(c, index) in ct"
      :key="index"
      type="number"
      v-model="ct[index]"
      ref="input"
      :style="{
        backgroundColor: index <= cIndex ? 'rgba(146, 143, 255, 0.5)' : '',
      }"
      @input="
        (e) => {
          onInput(e.target.value, index);
        }
      "
      @keydown.delete="
        (e) => {
          onKeydown(e.target.value, index);
        }
      "
      @focus="onFocus"
      :disabled="loading"
    />
  </div>
  <!-- <p>{{msg}}</p> -->
</template>
<script>
import axios from "axios";
export default {
  name: "Captcha_Captcha",
  data() {
    return {
      ct: ["", "", "", ""],
      loading: false,
      msg: "",
    };
  },
  computed: {
    ctSize() {
      return this.ct.length;
    },
    cIndex() {
      let i = this.ct.findIndex((item) => item === "");
      i = (i + this.ctSize) % this.ctSize;
      return i;
    },
    lastCode() {
      return this.ct[this.ctSize - 1];
    },
  },
  watch: {
    cIndex() {
      this.resetCaret();
    },
    lastCode(val) {
      if (val) {
        // console.log('this.ctSize', this.ctSize)
        this.$refs.input[this.ctSize - 1].blur();
        this.sendCaptcha();
      }
    },
  },
  mounted() {
    this.resetCaret();
  },
  methods: {
    onInput(val, index) {
      this.msg = "";
      val = val.replace(/\s/g, "");
      if (index == this.ctSize - 1) {
        this.ct[this.ctSize - 1] = val[0]; // 最后一个码，只允许输入一个字符。
      } else if (val.length > 1) {
        let i = index;
        for (i = index; i < this.ctSize && i - index < val.length; i++) {
          this.ct[i] = val[i];
        }
        this.resetCaret();
      }
    },
    // 重置光标位置。
    resetCaret() {
      this.$refs.input[this.ctSize - 1].focus();
    },
    onFocus() {
      // 监听 focus 事件，将光标重定位到“第一个空白符的位置”。
      let index = this.ct.findIndex((item) => item === "");
      index = (index + this.ctSize) % this.ctSize;
      // console.log(this.$refs.input)
      this.$refs.input[index].focus();
    },
    onKeydown(val, index) {
      if (val === "") {
        // 删除上一个input里的值，并对其focus。
        if (index > 0) {
          this.ct[index - 1] = "";
          this.$refs.input[index - 1].focus();
        }
      }
    },
    sendCaptcha() {
      this.msg = `${this.ct.join("")}`;
      console.log(this.$route.params);
      console.log(this.msg);
      console.log(Number(this.msg));
      console.log(Number(this.$route.params.check));
      console.log(Number(this.msg) === Number(this.$route.params.check));
      if (Number(this.msg) === Number(this.$route.params.check)) {
        this.loading = true;
        var userinfo = {
          iswx: this.$route.params.iswx,
          iszfb: this.$route.params.iszfb,
          uname: this.$route.params.uname,
          uphone: this.$route.params.uphone,
          ubirth: this.$route.params.ubirth,
          password: this.$route.params.password,
        };
        console.log(userinfo);
        axios({
          method: "post",
          url: "https://mineralsteins.icu:8080/a37/register",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: userinfo,
        }).then(
          (response) => {
            console.log(response.data);
            this.$alert("", "注册成功，请重新登录", {
              confirmButtonText: "确定",
              showClose: false,
              center: true,
              type: "success",
              customClass: "success",
              beforeClose: (action, instance, done) => {
                if (action === "confirm") {
                  this.$router.push({
                    name: "SignIn",
                  });
                  done();
                }
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
        this.$alert("", "验证码有误", {
          confirmButtonText: "确定",
          showClose: false,
          center: true,
          type: "warning",
          customClass: "fail",
        });
      }
    },

    reset() {
      // 重置。一般是验证码错误时触发。
      this.ct = this.ct.map((item) => "");
      this.resetCaret();
    },
  },
};
</script>

<style scoped>
.captcha {
  display: flex;
  justify-content: center;
  margin-top: 0.8rem;
}

input {
  margin-right: 0.4rem;
  width: 1.28rem;
  height: 1.28rem;
  text-align: center;
  border: none;
  border-radius: 0.32rem;
  color: #ffffff;
  font-family: Manrope;
  font-size: 0.48rem;
  font-weight: 700;
  background: #f4f4f6;
  line-height: 0.68rem;
  text-align: center;
  border-bottom: 0.02rem solid #eee;
  outline: none;
}

input :focus {
  border: #928fff;
  background: rgba(146, 143, 255, 0.1);
}

input:last-of-type {
  margin-right: 0;
}

input:disabled {
  background-color: #fff;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 0;
}

.msg {
  text-align: center;
}
</style>