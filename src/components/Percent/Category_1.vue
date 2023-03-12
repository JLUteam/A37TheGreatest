<template>
    <div class="Category_Chart" v-show="!flag">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="select">
            <el-tab-pane label="一天" name="first"></el-tab-pane>
            <el-tab-pane label="一周" name="second"></el-tab-pane>
            <el-tab-pane label="一月" name="third"></el-tab-pane>
            <el-tab-pane label="一年" name="fourth"></el-tab-pane>
            <el-tab-pane label="全部" name="firth"></el-tab-pane>
        </el-tabs>
        <div class="chart" ref="myChart">
        </div>
    </div>
</template>
<script>

export default {
    name: 'Category_Chart',
    data() {
        return {
            options: [{
                value: '选项1',
                label: '一天'
            }, {
                value: '选项2',
                label: '一周'
            }, {
                value: '选项3',
                label: '一月'
            }, {
                value: '选项4',
                label: '一年'
            }, {
                value: '选项5',
                label: '全部'
            }],
            value: '',
            activeName: this.$store.state.click_time
        }
    },
    mounted() {
        this.drawLine();
        this.$store.commit('updateradio2', '一天')
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
            let myChart = this.$echarts.init(this.$refs.myChart)
            this.myChart = myChart
            let xAxis = []
            let yAxis = []
            let yAxis2 = []
            const date = new Date();
            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, "0");
            let dayOfWeek = date.getUTCDay() === 0 ? 7 : date.getUTCDay();
            let day = date.getDate().toString().padStart(2, "0");
            let hour = date.getHours().toString().padStart(2, "0");
            if (this.activeName === 'first') {
                xAxis = [];
                for (let i = 1; i <= 24; i++) {
                    xAxis.push(i);
                }
                for (let i = 0; i <= hour; i++) {
                    let temp = this.sum('' + year + '-' + month + '-' + day + 'T' + i + ':')
                    yAxis.push(temp)
                    let temp2 = this.sum_income('' + year + '-' + month + '-' + day + 'T' + i + ':')
                    yAxis2.push(temp2)

                }

            } else if (this.activeName === 'second') {
                xAxis = [];
                for (let i = 0; i <= 6; i++) {
                    xAxis.push(i);
                }
                for (let i = 0; i <= dayOfWeek; i++) {
                    var oneDayTime = 24 * 60 * 60 * 1000;
                    const newDate = new Date(date.getTime() + (i - dayOfWeek) * oneDayTime);
                    month = (newDate.getMonth() + 1).toString().padStart(2, "0");
                    day = newDate.getDate().toString().padStart(2, "0");
                    console.log('' + year + '-' + month + '-' + day)
                    let temp = this.sum('' + year + '-' + month + '-' + day)
                    console.log('!!!' + temp)
                    yAxis.push(temp)
                    let temp2 = this.sum_income('' + year + '-' + month + '-' + day)
                    yAxis2.push(temp2)
                }
            } else if (this.activeName === 'third') {
                xAxis = [];
                for (let i = 1; i <= 31; i++) {
                    xAxis.push(i);
                }
                yAxis = []
                for (let i = 0; i <= day; i++) {
                    let temp = this.sum('' + year + '-' + month + '-' + i.toString().padStart(2, "0"))
                    yAxis.push(temp)
                    let temp2 = this.sum_income('' + year + '-' + month + '-' + i.toString().padStart(2, "0"))
                    yAxis2.push(temp2)
                }
            }
            else if (this.activeName === 'fourth') {
                xAxis = [];
                for (let i = 1; i <= 12; i++) {
                    xAxis.push(i);
                }
                yAxis = []
                for (let i = 1; i <= month; i++) {
                    let temp = this.sum('' + year + '-' + i.toString().padStart(2, "0"))
                    yAxis.push(temp)
                    console.log(temp)
                    let temp2 = this.sum_income('' + year + '-' + i.toString().padStart(2, "0"))
                    yAxis2.push(temp2)
                }
            } else {
                xAxis = [];
                for (let i = 1; i <= 10; i++) {
                    xAxis.push(i);
                }
                yAxis = []
                for (let i = year - 9; i <= year; i++) {
                    let temp = this.sum(i)
                    yAxis.push(temp)
                    let temp2 = this.sum_income(i)
                    yAxis2.push(temp2)
                }
            }
            // 绘制图表
            myChart.setOption(
                {
                    xAxis: {
                        type: 'category',
                        data: xAxis,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                            }
                        },
                        boundaryGap: false
                    },
                    yAxis: {
                        type: 'value',
                        splitLine: {
                            show: false,
                            lineStyle: {
                                type: 'dashed',
                            }
                        }
                    },

                    tooltip: {
                        show: true,
                        trigger: 'item',
                        axisPointer: {
                            axis: 'x',
                            type: 'cross',
                            label: {
                                show: true,
                                backgroundColor: 'transparent',
                                color: '#4A44C6'
                            },
                            handle: {
                                show: true
                            },
                            crossStyle: {
                                coloe: 'red'
                            }
                        },
                        formatter: function (arg) {

                            return '$' + arg.data
                        },
                        textStyle: {
                            color: '#ffffff',
                            fontFamily: ' Manrope',
                            fontSize: '12',
                            fontWeight: 700,
                            lineHeight: '16px',
                            textAlign: 'center',
                        },
                        extraCssText: 'background:#1b7a00;    border-radius: 25%;',
                        triggerOn: 'mousemove|click',

                    },



                    series: [
                        {
                            data: yAxis,
                            type: 'line',
                            // smooth: true,
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#ff6740' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: ' rgba(255,103,64,0)' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            lineStyle: {
                                color: '#ff6740'
                            },

                        },
                        {
                            data: yAxis2,
                            type: 'line',
                            // smooth: true,
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,

                                    colorStops: [{
                                        offset: 0, color: '#8ee04e' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: ' rgba(142,224,78,0)' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            lineStyle: {
                                color: '#8ee04e'
                            }
                        }
                    ]
                }
            )
            window.addEventListener("resize", () => {
                myChart.resize();
            })
        },
        handleClick() {
            this.drawLine()
        },
        sum(time) {

            let data = this.$store.state.recodes.filter(item => {
                return item.btime.indexOf(time) != -1
            })

            return data.reduce((total, item) => {
                return total + parseFloat(item.amount)
            }, 0)
        },
        sum_income(time) {

            let data = this.$store.state.income_statement.filter(item => {
                return item.btime.indexOf(time) != -1
            })

            return data.reduce((total, item) => {
                return total + parseFloat(item.amount)
            }, 0)
        }

    }, watch: {
        activeName: {
            handler: function (value) {
                this.$store.commit('updateactiveName', value)
            },
            immediate: true
        },
    },
    computed: {
        flag() {
            return this.$store.state.Transactions_pull;
        }
    }
}
</script>
<style lang="less" scoped>
.Category_Chart {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 6.54rem;

    .chart {
        margin-top: -.6rem;
        width: 6.54rem;
        height: 6.7044rem;
    }

    .select {
        margin-top: .5rem;

        /deep/ .el-tabs__nav {

            padding-left: .4rem;
        }

        /deep/ .el-tabs__active-bar {
            margin-left: .4rem;
        }

        /deep/ .el-tabs__item.is-active {
            color: #4A44C6;
        }

        /deep/ .el-tabs__item {
            padding: 0 .4rem;
        }

        /deep/ .el-tabs__active-bar {
            background-color: #928FFF
        }
    }

}
</style>