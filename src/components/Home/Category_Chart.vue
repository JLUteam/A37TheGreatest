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
      return {
        energy: this.sum('energy',this.today()),
        food: this.sum("food", this.today()),
        entertainment: this.sum("entertainment", this.today()),
        other: this.sum("other", this.today()),
      };
    },
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
        legend: [
          {
            itemWidth: 12,
            itemHeight: 12,
            itemStyle: { color: "rgb(146, 143, 255)" },
            textStyle: { color: "black" },
            top: "60%", //调整位置
            left: "36%", //调整位置
            data: [{ name: "能源", icon: "rect" }],
          },
          {
            itemWidth: 12,
            itemHeight: 12,
            itemStyle: { color: "rgb(142, 224, 78)" },
            textStyle: { color: "black" },
            top: "60%", //调整位置
            left: "58%", //调整位置
            data: [{ name: "餐饮", icon: "rect" }],
          },
          {
            itemWidth: 12,
            itemHeight: 12,
            itemStyle: { color: "rgb(255, 103, 64)" },
            textStyle: { color: "black" },
            top: "70%", //调整位置
            left: "36%", //调整位置
            data: [{ name: "娱乐", icon: "rect" }],
          },
          {
            itemWidth: 12,
            itemHeight: 12,
            itemStyle: { color: "rgb(202, 202, 245)" },
            textStyle: { color: "black" },
            top: "70%", //调整位置
            left: "58%", //调整位置
            data: [{ name: "其他", icon: "rect" }],
          },
        ],
        color: ["#928FFF", "#8EE04E", "#FF6740", "#CACAF5"],
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["60%", "80%"],
            center: ["55%", "55%"],
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
            data: [
              { value: this.Consumption.energy, name: "能源" },
              { value: this.Consumption.food, name: "餐饮" },
              { value: this.Consumption.entertainment, name: "娱乐" },
              { value: this.Consumption.other, name: "其他" },
            ],
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
        (item) =>
          (item.bcategory === name) & (item.btime.indexOf(time) != -1)
      );

      return data.reduce((total, item) => {
        return total + -1 * item.amount;
      }, 0);
    },
    today() {
      let date = new Date();
      let year = date.getFullYear()
      let month = date.getMonth() + 1;
      let day = date.getDate();
      // console.log('' + year + '-' + month + '-' + day)
      return '' + year + '-' + month + '-' + day
    }
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