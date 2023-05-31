<template>
  <div class="basic">
    <el-radio-group v-model="value2">
      <el-radio-button label="收入"></el-radio-button>
      <el-radio-button label="支出"></el-radio-button>
    </el-radio-group>
    <div class="title"></div>
    <div class="tip">
      <p class="mingxi">明细：</p>
      <el-button type="primary" @click="showDialog" class="button_">
        <img src="@/assets/svg/add.svg" class="add" />
      </el-button>
      <el-dialog title="支付信息" :visible.sync="dialogVisible" class="dialog">
        <div class="shopinfo">
          <div class="amount">
            <span>请输入支付金额：</span>
            <el-input v-model="amount" class="amountinfo"></el-input>
          </div>
          <div class="time">
            <span>请选择支付时间：</span>
            <div>
              <el-date-picker v-model="date"></el-date-picker>
            </div>
          </div>
          <div class="beizhu">
            <span>请输入备注：</span>
            <el-input v-model="comment" class="beizhuinfo"></el-input>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="confirm" class="confirmbuttom"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
    <div class="recodes_border">
      <div class="recordsets">
        <div
          class="record"
          v-for="recode in recodes.reverse()"
          :key="recode.btime"
        >
          <div class="reccode_first">
            <!-- <p class="merchantname">{{ recode.shenfen }}</p> -->
            <el-popover
              placement="bottom"
              title="标题"
              width="200"
              trigger="click"
              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
              class="merchantname"
            >
              <el-button slot="reference" class="comment_button">{{
                recode.comment
              }}</el-button>
            </el-popover>
          </div>
          <div class="recode_mid">
            <p class="ShoppingTime">{{ recode.btime.substr(0, 10) }}</p>

            <p class="consumption">
              {{ parseFloat(recode.amount).toFixed(2) }}
            </p>
          </div>
          <img
            class="jian"
            src="@/assets/svg/jian1.svg"
            @click="jian(recode)"
          />
        </div>
        <div class="temp2"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "needs_list",
  data() {
    return {
      value2: "收入",
      dialogVisible: false,
      amount: "",
      date: "",
      visible: false,
      comment: "",
    };
  },
  mounted() {
    this.getList();
    this.timer = window.setInterval(() => {
      setTimeout(() => {
        this.getList();
      }, 0);
    }, 3000);
  },
  computed: {
    recodes: {
      get() {
        let recodes =
          this.value2 === "支出"
            ? this.recodes_(this.time())
            : this.recodes_income(this.time());
        return recodes;
      },
      set() {
        return this.value2 === "支出"
          ? this.recodes_(this.time())
          : this.recodes_income(this.time());
      },
    },
    recodes_length() {
      return this.recodes.length;
    },
  },
  methods: {
    recodes_(time) {
      let temp = [];
      for (let i = 0; i < time.length; i++) {
        // console.log(this.$store.state.recodes)
        temp.push(
          ...this.$store.state.recodes_needs.filter((item) => {
            return (item.amount < 0) & (item.btime.indexOf(time[i]) != -1);
          })
        );
      }
      return temp;
    },
    recodes_income(time) {
      let temp = [];
      for (let i = 0; i < time.length; i++) {
        temp.push(
          ...this.$store.state.recodes_needs.filter(
            (item) => (item.amount > 0) & (item.btime.indexOf(time[i]) != -1)
          )
        );
      }
      return temp;
    },
    time() {
      let time = [];
      const date = new Date();
      let year = date.getFullYear();
      let month = (date.getMonth() + 1).toString().padStart(2, "0");
      let dayOfWeek = date.getUTCDay() === 0 ? 7 : date.getUTCDay();
      let day = date.getDate().toString().padStart(2, "0");
      var oneDayTime = 24 * 60 * 60 * 1000;
      if (this.$store.state.activeName_needs === "first") {
        time = [];
        for (let i = 1; i <= dayOfWeek; i++) {
          const newDate = new Date(
            date.getTime() + (i - dayOfWeek) * oneDayTime
          );
          month = (newDate.getMonth() + 1).toString().padStart(2, "0");
          day = newDate.getDate().toString().padStart(2, "0");
          let temp = "" + year + "-" + month + "-" + day;
          time.push(temp);
        }
      } else if (this.$store.state.activeName_needs === "second") {
        time = [];
        for (let i = 1; i <= day; i++) {
          let temp =
            "" + year + "-" + month + "-" + i.toString().padStart(2, "0");
          time.push(temp);
        }
      } else if (this.$store.state.activeName_needs === "third") {
        time = [];
        for (let i = 1; i <= month; i++) {
          let temp = "" + year + "-" + i.toString().padStart(2, "0");
          time.push(temp);
        }
      } else {
        time = [];
        for (let i = 1; i <= dayOfWeek; i++) {
          const newDate = new Date(
            date.getTime() + (i - dayOfWeek) * oneDayTime
          );
          month = (newDate.getMonth() + 1).toString().padStart(2, "0");
          day = newDate.getDate().toString().padStart(2, "0");
          let temp = "" + year + "-" + month + "-" + day;
          time.push(temp);
        }
      }
      return time;
    },
    showDialog() {
      this.dialogVisible = true;
    },
    getList() {
      axios({
        method: "get",
        url: "https://mineralsteins.icu:8080/a37/info/",
      }).then(
        (response) => {
          console.log(response.data);
          if (response.data.length != this.$store.state.recodes_needs.length) {
            this.$store.commit("clearall");
            for (var i = 0; i < response.data.length; i++) {
              this.$store.commit("addrecode_needs", response.data[i]);
            }
            this.recodes =
              this.value2 === "支出"
                ? this.recodes_(this.time())
                : this.recodes_income(this.time());
          }
        },
        (error) => {
          window.alert(error.message);
        }
      );
    },

    confirm() {
      // 处理用户输入的数据
      const date_ = new Date();
      let year = date_.getFullYear();
      let month = (date_.getMonth() + 1).toString().padStart(2, "0");
      let day = date_.getDate().toString().padStart(2, "0");
      let btime = "" + year + "-" + month + "-" + day;
      var data = {
        btime: this.date,
        comment: this.comment,
        amount: this.amount,
        room: this.$route.query.room_num,
      };
      console.log("支付金额：", this.amount);
      console.log("支付时间：", btime);
      console.log(data);
      // this.$store.commit("addrecode_needs", data);
      axios({
        method: "post",
        url: "https://mineralsteins.icu:8080/a37/info/",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      }).then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          window.alert(error.message);
        }
      );
      this.dialogVisible = false;
    },
    jian(recode) {
      this.$store.commit("jian_needs", recode);
    },
  },
  // mounted() {
  //   this.$store.commit("getrecode_needs");

  // },
  destroyed() {
    window.clearInterval(this.timer);
  },
};
</script>
<style lang="less" scoped>
.basic {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;

  .dialog {
    .shopinfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .amount {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 1.5rem;
      }

      .time {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 1.5rem;

        span {
          margin-left: 0.1rem;
        }

        /deep/.el-input__inner {
          margin-left: 0.1rem;
          width: 4.5rem;
        }
      }

      .beizhu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 1.5rem;
      }
    }

    .dialog-footer {
      display: flex;
      justify-content: center;
      align-items: center;

      .confirmbuttom {
        width: 4rem;
        margin-top: 0.2rem;
      }
    }
  }

  /deep/.el-radio-button__orig-radio:checked + .el-radio-button__inner {
    width: 2.9856rem;
    height: 0.64rem;
    border-radius: 0.16rem;
    background: #e9e9ff;
    background-blend-mode: normal;
    color: #4a44c6;
    font-family: Manrope;
    font-size: 0.28rem;
    font-weight: 500;

    text-align: center;
    border-color: #fff;
    box-shadow: none;
    align-items: center;
  }

  /deep/.el-radio-button__inner {
    width: 2.9856rem;
    height: 0.64rem;
    background-color: transparent;
    border-radius: 0.16rem;
    border: none;
    background-blend-mode: normal;
    color: #121826;
    font-family: Manrope;
    font-size: 0.28rem;
    font-weight: 500;
    text-align: center;
    outline: none;
    border-color: #fff;
  }

  /deep/ .el-radio-button:first-child .el-radio-button__inner {
    border-left: none;
  }

  /deep/.el-button {
    // background-color: transparent;
    border: none !important;
  }

  .title {
    display: flex;
    align-items: center;
    font-size: 0.28rem;
    color: #999;
  }

  .title::before,
  .title::after {
    content: "";
    flex: 1;
    height: 0.02rem;
    background: #ccc;
  }

  .title::before {
    margin-right: 0.2rem;
  }

  .title::after {
    margin-left: 0.2rem;
  }

  .tip {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    margin-top: 0.5rem;

    .mingxi {
      font-size: 0.28rem;
      font-weight: 500;

      margin-right: 4rem;
    }

    .add {
      width: 0.48rem;
      height: 0.48rem;
      cursor: pointer;
    }

    .button_ {
      background-color: transparent;
      border: none !important;
    }

    /deep/.el-input__inner {
      // height: 0.4rem;

      margin-top: 0.2rem;

      width: 100%;
      font-size: 0.28rem;
      font-weight: 500;
      line-height: 0.48rem;
    }

    /deep/.el-input {
      font-size: 0.28rem;
      margin-bottom: 0.2rem;
    }

    /deep/.el-icon-date:before {
      content: "";
    }

    /deep/.el-dialog {
      width: 60%;
    }
  }

  .recodes_border {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;

    .recordsets {
      width: 6.54rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 0.2rem;

      .record {
        width: 6.54rem;
        height: 0.96rem;
        border-color: #ffffff;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        cursor: pointer;

        .reccode_first {
          height: 0.96rem;
          display: flex;
          flex-direction: column;
          height: 1rem;
          width: 0.5rem;

          .merchantname {
            width: 2rem;
            height: 0.52rem;
            color: #121826;
            font-family: Manrope;
            font-size: 0.32rem;
            font-weight: 700;
            line-height: 0.26rem;
            padding-left: 0.5rem;

            .comment_button {
              background-color: transparent !important;
            }
          }
        }

        .recode_mid {
          display: flex;
          direction: columns;
          justify-content: center;
          margin-left: 1.23rem;

          .ShoppingTime {
            color: #6c727f;
            font-family: Manrope;
            font-size: 0.12rem;
            font-weight: 400;
            margin-left: 0.1rem;
            margin-top: 0rem;
            height: 40%;
          }

          .consumption {
            color: #932205;
            font-family: Manrope;
            font-size: 0.32rem;
            font-weight: 700;
            line-height: 0.52rem;
            height: 60%;
            margin-top: 0.2rem;
            margin-left: -1.15rem;
          }
        }

        .jian {
          margin-left: 0rem;
          margin-right: 1.2rem;
          width: 0.48rem;
          height: 0.48rem;
          margin-top: 0.2rem;
          cursor: pointer;
        }
      }

      .temp2 {
        height: 1.5rem;
      }
    }
  }
}
</style>
