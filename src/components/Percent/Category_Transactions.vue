<template>
    <div class="Category_Chart">
        <div class="shoppingrecode">
            <p class="number">${{ selectedvalue }}</p>
            <p class="time">You’ve spent $32.4 this week</p>
        </div>
        <div class="chart" ref="myChart">
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="select">
            <el-tab-pane label="一天" name="first"></el-tab-pane>
            <el-tab-pane label="一周" name="second"></el-tab-pane>
            <el-tab-pane label="一月" name="third"></el-tab-pane>
            <el-tab-pane label="一年" name="fourth"></el-tab-pane>
            <el-tab-pane label="全部" name="firth"></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>

export default {
    name: 'Category_Transactions',
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
            activeName: '',
            selectedvalue: ''
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
                console.log(456)
                console.log(yAxis2)
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
                    let temp2 = this.sum_income('' + year + '-' + i.toString().padStart(2, "0"))
                    yAxis2.push(temp2)
                    console.log(567)
                    console.log(yAxis2)
                }
            } else {
                xAxis = [];
                for (let i = 1; i <= 10; i++) {
                    xAxis.push(i);
                }
                yAxis = []
                for (let i = year - 9; i <= year + 1; i++) {
                    let temp = this.sum(i)
                    yAxis.push(temp)
                    let temp2 = this.sum_income(i)
                    yAxis2.push(temp2)

                }
                console.log(789)
                console.log(yAxis2)
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
                            data: this.$store.state.radio1 === '支出' ? yAxis : yAxis2,
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
                                        offset: 0, color: '#928fff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: ' rgba(146,143,255,0)' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            lineStyle: {
                                color: '#928FFF'
                            },

                        },
                    ]
                }
            )
            window.addEventListener("resize", () => {
                myChart.resize();
            })
            myChart.on('click', arg => {
                this.selectedvalue = arg.value
            })

        },
        handleClick() {
            this.drawLine()
        },
        getMappingValueArrayOfKey(array, keyName) {
            if (Object.prototype.toString.call(array) == '[object Array]') {
                return array.map((item, index) => {
                    return item[keyName]
                })
            }
            return 'null（参数一应为对象数组）';//不是数组
        },
        sum(time) {
            let data = this.$store.state.recodes.filter(item => ((item.btime.indexOf(time) != -1) & item.bcategory === this.$store.state.precent_Transactions_bcategory))
            return data.reduce((total, item) => {
                return total + 1 * item.amount
            }, 0)
        },
        sum_income(time) {
            let data = this.$store.state.income_statement.filter(item => ((item.btime.indexOf(time) != -1) & item.bcategory === this.$store.state.precent_Transactions_bcategory))

            return data.reduce((total, item) => {
                return total + item.amount
            }, 0)
        }


    },
    watch: {
        activeName: {
            handler: function (value) {
                this.$store.commit('updateactiveName', value)
                this.drawLine();
            },
            immediate: true
        },
    },
}
</script>
<style lang="less" scoped>
.Category_Chart {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 6.54rem;
    overflow: scroll;

    .shoppingrecode {
        width: 6.54rem;
        height: 1.6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        .number {
            color: #121826;
            font-family: Manrope;
            font-size: .72rem;
            font-weight: 700;
            line-height: .96rem;
            text-align: center;
        }

        .time {
            color: #6c727f;
            font-family: Manrope;
            font-size: .28rem;
            font-weight: 400;
            line-height: .48rem;
            text-align: center;
        }
    }

    .chart {
        width: 6.54rem;
        height: 4.5044rem;
    }

    .select {
        margin-top: -.6rem;

        /deep/ .el-tabs__nav {
            padding-left: .4rem;
        }

        /deep/ .el-tabs__active-bar {
            margin-left: .45rem;
            background-color: #928FFF
        }

        /deep/ .el-tabs__item.is-active {
            color: #4A44C6;
        }

        /deep/ .el-tabs__item {
            padding: 0 .4rem;
        }


    }

}
</style>