<template>
  <div class="Category_Chart">
    <div class="identy">
      <p>{{ "家庭" }}账本</p>
      <el-button type="primary" @click="showDialog" class="button_">
        <img src="@/assets/svg/inv.svg" class="add" @click="dialogVisible_ = true" />
      </el-button>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="select">
      <el-tab-pane label="一周" name="first"></el-tab-pane>
      <el-tab-pane label="一月" name="second"></el-tab-pane>
      <el-tab-pane label="一年" name="third"></el-tab-pane>
    </el-tabs>
    <div class="chart" ref="myChart"></div>

    <el-dialog title="添加被邀请人" :visible.sync="dialogVisible_" :before-close="handleClose">

      <div class="yaoqing">
        <div class="phone">
          <span>请输入被邀请人手机号</span>
          <el-input v-model="phonenum" class="phoneinfo"></el-input>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button @click="insertEvent()">新建</el-button> -->
        <el-button type="primary" @click="submitForm()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "Category_Chart",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "一周",
        },
        {
          value: "选项2",
          label: "一月",
        },
        {
          value: "选项3",
          label: "一年",
        },
      ],
      value: "",
      activeName: "second",
      dialogVisible_: false,
      tableData: [
        { id: 10001, phonenumber: "Test1", role: "0", nickname: "T1" },
        { id: 10002, phonenumber: "Test2", role: "1", nickname: "T2" },
        { id: 10003, phonenumber: "Test3", role: "2", nickname: "T3" },
        { id: 10004, phonenumber: "Test4", role: "3", nickname: "T4" },
      ], //列表信息
      // rolelist: [
      //   { value: "0", label: "父亲" },
      //   { value: "1", label: "儿子" },
      //   { value: "2", label: "母亲" },
      //   { value: "3", label: "女儿" },
      // ],
      phonenum: ''
    };
  },
  mounted() {
    this.drawLine();
    this.$store.commit("updateradio2", "一天");
  },
  beforeDestroy() {
    const self = this;
    window.addEventListener("resize", () => {
      self.myChart.resize();
    });
  },
  methods: {
    drawLine() {
      // 基于刚刚准备好的 DOM 容器，初始化 EChart 实例
      let myChart = this.$echarts.init(this.$refs.myChart);
      this.myChart = myChart;
      let xAxis = [];
      let yAxis = [];
      let yAxis2 = [];
      const date = new Date();
      let year = date.getFullYear();
      let month = (date.getMonth() + 1).toString().padStart(2, "0");
      let dayOfWeek = date.getUTCDay() === 0 ? 7 : date.getUTCDay();
      let day = date.getDate().toString().padStart(2, "0");
      let hour = date.getHours().toString().padStart(2, "0");
      if (this.activeName === "first") {
        xAxis = [];
        for (let i = 1; i <= 7; i++) {
          xAxis.push(i);
        }
        for (let i = 1; i <= dayOfWeek; i++) {
          var oneDayTime = 24 * 60 * 60 * 1000;
          const newDate = new Date(
            date.getTime() + (i - dayOfWeek) * oneDayTime
          );
          month = (newDate.getMonth() + 1).toString().padStart(2, "0");
          day = newDate.getDate().toString().padStart(2, "0");
          //  console.log('' + year + '-' + month + '-' + day)
          let temp = this.sum("" + year + "-" + month + "-" + day);
          //  console.log('!!!'+i + '' + year + '-' + month + '-' + day)
          yAxis.push(temp);
          let temp2 = this.sum_income("" + year + "-" + month + "-" + day);
          yAxis2.push(temp2);
        }
      } else if (this.activeName === "second") {
        xAxis = [];
        for (let i = 1; i <= 31; i++) {
          xAxis.push(i);
        }
        yAxis = [];
        for (let i = 1; i <= day; i++) {
          let temp = this.sum(
            "" + year + "-" + month + "-" + i.toString().padStart(2, "0")
          );
          yAxis.push(temp);
          let temp2 = this.sum_income(
            "" + year + "-" + month + "-" + i.toString().padStart(2, "0")
          );
          yAxis2.push(temp2);
        }
      } else if (this.activeName === "third") {
        xAxis = [];
        for (let i = 1; i <= 12; i++) {
          xAxis.push(i);
        }
        yAxis = [];
        for (let i = 1; i <= month; i++) {
          let temp = this.sum("" + year + "-" + i.toString().padStart(2, "0"));
          yAxis.push(temp);
          console.log(temp);
          let temp2 = this.sum_income(
            "" + year + "-" + i.toString().padStart(2, "0")
          );
          yAxis2.push(temp2);
        }
      } else {
        xAxis = [];
        for (let i = 1; i <= 7; i++) {
          xAxis.push(i);
        }
        for (let i = 1; i <= dayOfWeek; i++) {
          var oneDayTime = 24 * 60 * 60 * 1000;
          const newDate = new Date(
            date.getTime() + (i - dayOfWeek) * oneDayTime
          );
          month = (newDate.getMonth() + 1).toString().padStart(2, "0");
          day = newDate.getDate().toString().padStart(2, "0");
          //  console.log('' + year + '-' + month + '-' + day)
          let temp = this.sum("" + year + "-" + month + "-" + day);
          //  console.log('!!!'+i + '' + year + '-' + month + '-' + day)
          yAxis.push(temp);
          let temp2 = this.sum_income("" + year + "-" + month + "-" + day);
          yAxis2.push(temp2);
        }
      }
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: "category",
          data: xAxis,
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            },
          },
          boundaryGap: false,
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
            lineStyle: {
              type: "dashed",
            },
          },
        },

        tooltip: {
          show: true,
          trigger: "item",
          axisPointer: {
            axis: "x",
            type: "cross",
            label: {
              show: true,
              backgroundColor: "transparent",
              color: "#4A44C6",
            },
            handle: {
              show: true,
            },
            crossStyle: {
              coloe: "red",
            },
          },
          formatter: function (arg) {
            return "¥" + arg.data;
          },
          textStyle: {
            color: "#ffffff",
            fontFamily: " Manrope",
            fontSize: "12",
            fontWeight: 700,
            lineHeight: "16px",
            textAlign: "center",
          },
          extraCssText: "background:#1b7a00;    border-radius: 25%;",
          triggerOn: "mousemove|click",
        },

        series: [
          {
            data: yAxis,
            type: "line",
            // smooth: true,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#ff6740", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: " rgba(255,103,64,0)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              color: "#ff6740",
            },
          },
          {
            data: yAxis2,
            type: "line",
            // smooth: true,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,

                colorStops: [
                  {
                    offset: 0,
                    color: "#8ee04e", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: " rgba(142,224,78,0)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              color: "#8ee04e",
            },
          },
        ],
      });
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    handleClick() {
      this.drawLine();
    },
    sum(time) {
      console.log(this.$store.state.recodes_needs)
      let data = this.$store.state.recodes_needs.filter((item) => {
        console.log(item.btime)
        return item.btime.indexOf(time) != -1 && item.amount < 0;
      });

      return data.reduce((total, item) => {
        return total + parseFloat(-1 * item.amount);
      }, 0);
    },
    sum_income(time) {
      let data = this.$store.state.recodes_needs.filter((item) => {
        return item.btime.indexOf(time) != -1 && item.amount > 0;
      });

      return data.reduce((total, item) => {
        return total + parseFloat(item.amount);
      }, 0);
    },
    getactivename() {
      return this.activename;
    },
    handleClose(done) {
      done();
    },
    // formatRole(value) {
    //   if (value === "0") {
    //     return "父亲";
    //   }
    //   if (value === "1") {
    //     return "儿子";
    //   }
    //   if (value === "2") {
    //     return "母亲";
    //   }
    //   if (value === "3") {
    //     return "女儿";
    //   }
    //   return "请确认身份";
    // },
    async insertEvent(row) {
      // 获得tableData中最大的id+1
      const maxID = this.tableData.reduce((max, item) => {
        return item.id > max ? item.id : max;
      }, 0);

      const record = {
        id: maxID + 1,
        phonenumber: "请输入手机号",
        role: "请确认身份",
        nickname: "请输入昵称",
      };

      //向tableData中插入一条数据
      this.tableData.push(record);
    },
    submitForm() {
      this.dialogVisible_ = false;
    },
  },
  watch: {
    activeName(newval, oldval) {
      this.$store.state.activeName_needs = newval;
    },
    //监视tableData的变化
    tableData(newval, oldval) {
      console.log(newval);
    },
  },
};
</script>
<style lang="less" scoped>
.Category_Chart {
  display: flex;
  flex-direction: column;
  width: 6.5rem;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    margin-top: 0.1rem;
  }

  .chart {
    margin-top: -0.6rem;
    width: 6.54rem;
    height: 6.7044rem;
  }

  .select {
    margin-top: 0.5rem;

    // position: absolute;
    /deep/ .el-tabs__nav {
      // padding-left: .4rem;
      background-color: transparent;
    }

    /deep/ .el-tabs__item.is-active {
      color: #4a44c6;
    }

    /deep/ .el-tabs__item {
      padding: 0 0.9rem;
      font-size: 0.28rem;
      border: none !important;
    }

    /deep/.el-tabs__nav {
      border: none !important;
      border-bottom: none !important;
    }
  }

  .identy {
    display: flex;
    justify-content: space-between;
    align-items: center;


    p {
      margin-left: 2.3rem;
    }

    .button_ {
      background-color: transparent;
      border: none !important;

      img {
        width: 0.35rem;
        height: 0.35rem;
        margin-top: 0.2rem;
        cursor: pointer;
      }
    }
  }

  // /deep/.vxe-icon-edit:before {
  //   content: "";
  // }

  .yaoqing {
    .phone {
      /deep/ .el-input {
        margin-top: .4rem;
      }
    }
  }
}
</style>
