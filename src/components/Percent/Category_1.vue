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
            let month = date.getMonth() + 1;
            let dayOfWeek = date.getUTCDay();
            let day = date.getDate();
            let hour = date.getHours();
            if (this.activeName === 'first') {
                xAxis = Object.keys([...Array(24)])
               
                for (let i = 0; i <= hour; i++) {
                    let temp = this.sum('' + year + '-' + month + '-' + day + ' ' + i + ':')
                    yAxis.push(temp)
                    let temp2 = this.sum_income('' + year + '-' + month + '-' + day + ' ' + i + ':')
                    yAxis2.push(temp2)
                 
                }

            } else if (this.activeName === 'second') {
                xAxis = Object.keys([...Array(7)])
                for (let i = 0; i <= dayOfWeek; i++) {
                    var oneDayTime = 24 * 60 * 60 * 1000;
                    const newDate = new Date(date.getTime() + (i - dayOfWeek) * oneDayTime);
                    month = newDate.getMonth() + 1;
                    day = newDate.getDate();
                    let temp = this.sum('' + year + '-' + month + '-' + day )
                    yAxis.push(temp)
                    let temp2 = this.sum_income('' + year + '-' + month + '-' + day)
                    yAxis2.push(temp2)
                }
            } else if (this.activeName === 'third') {
                xAxis = Object.keys([...Array(30)])
                yAxis = []
                for (let i = 0; i <= day; i++) {
                    let temp = this.sum('' + year + '-' + month + '-' + i)
                    yAxis.push(temp)
                    let temp2 = this.sum_income('' + year + '-' + month + '-' + i)
                    yAxis2.push(temp2)
                }
            }
            else if (this.activeName === 'fourth') {
                xAxis = Object.keys([...Array(12)])
                yAxis = []
                for (let i = 0; i < month; i++) {
                    let temp = this.sum('' + year + '-' + i)
                    yAxis.push(temp)
                    let temp2 = this.sum_income('' + year + '-' + i)
                    yAxis2.push(temp2)
                }
            } else {
                xAxis = Object.keys([...Array(10)])
                yAxis = []
                for (let i = year-10; i < year; i++) {
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
                            console.log(arg)
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
        handleClick(tab, event) {
            console.log(tab, event);
            this.drawLine()
        },
        sum(time) {
            // console.log('edadg')
            // console.log(time)
            let data = this.$store.state.recodes.filter(item => (item.btime.indexOf(time) != -1))
            // console.log(data)
            return data.reduce((total, item) => {
                return total + -1 * item.amount
            }, 0)
        },
        sum_income(time) {
            let data = this.$store.state.income_statement.filter(item => (item.btime.indexOf(time) != -1))

            return data.reduce((total, item) => {
                return total +  item.amount
            }, 0)
        }

    }, watch: {
        activeName: {
            handler: function (value) {
                this.$store.commit('updateactiveName', value)
            }
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