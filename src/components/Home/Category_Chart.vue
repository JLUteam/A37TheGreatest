<template>
  <div class="Category_Chart">
    <div class="chart" ref="myChart" :auto-resize="'true'"></div>
  </div>
</template>
<script>
export default {
  name: "Category_Chart",
  mounted() {
    this.drawLine();
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => {
      this.myChart.resize();
    });
  },
  computed: {
    Consumption() {
      let array_incomeoroutcome = [... this.$store.state.outcomelist]
      let consumption = {}
      for (let i = 0; i < array_incomeoroutcome.length; i++) {
        let key = array_incomeoroutcome[i];
        let value = this.sum(key, this.today);
        consumption[key] = value;
      }
      return consumption
    },
    data_() {
      // ],
      let ans = [];
      let array_incomeoroutcome = [... this.$store.state.outcomelist]

      for (let i = 0; i < array_incomeoroutcome.length; i++) {
        let consumption = {}
        let key = array_incomeoroutcome[i];
        consumption.value = this.Consumption[key];
        consumption.name = key;
        ans.push(consumption)
      }
      console.log(ans)
      return ans
    },
    today() {
      let date = new Date();
      let year = date.getFullYear()
      let month = (date.getMonth() + 1).toString().padStart(2, "0");
      let day = date.getDate().toString().padStart(2, "0");
      return ('' + year + '-' + month + '-' + day)
    }
  },
  methods: {
    drawLine() {
      // 基于刚刚准备好的 DOM 容器，初始化 EChart 实例
      let myChart = this.$echarts.init(this.$refs.myChart);
      this.myChart = myChart;
      // 绘制图表
      let option = {
        tooltip: {
          trigger: "item",
          show: false
        },
        backgroundColor: "transparent", //rgba设置透明度0.1,
        title: {
          text: "今天的支出百分比",
          textStyle: {
            color: "#121826",
            fontWeight: 700,
            fontFamily: "Manrope",
            fontSize: 15,
          },
          top: "0%",
          // left:'30%'
        },
        //rgba设置透明度0.1,
        legend: {
          show: 'true',
          type: 'scroll',
          top: '90%',
          left: 'center',
          icon: 'circle'
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 10,
              borderRadius: 20,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
                formatter: "{d}%",
                padding: [10, 10],
              },
            },
            labelLine: {
              show: false,
            },
            data: this.data_,
          },
        ],
      };
      myChart.setOption(option);

      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    sum(name, time) {
      let data = this.$store.state.recodes.filter(
        (item) => {
          return item.bcategory == name && item.btime.indexOf(time) != -1
        }
      );

      return data.reduce((total, item) => {
        return total + 1 * item.amount;
      }, 0);
    },

  },
};
</script>
<style lang="less" scoped>
.Category_Chart {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 6.54rem;
  height: 7.7044rem;

  // 
  .percentage {
    position: relative;
    width: 5.7526rem;
    height: 0.56rem;
    top: 0;
    left: 0;
    color: #121826;
    font-family: Manrope;
    font-size: 0.36rem;
    font-weight: 700;
    line-height: 0.56rem;
  }

  .chart {
    position: relative;
    left: 0.2124rem;
    top: 0.4774rem;
    width: 6.54rem;
    height: 6.7044rem;

  }
}
</style>