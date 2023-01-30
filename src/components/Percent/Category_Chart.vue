<template>
    <div class="Category_Chart">
        <div class="tags">
            <el-radio-group v-model="radio1">
                <el-radio-button label="收入"></el-radio-button>
                <el-radio-button label="支出"></el-radio-button>
            </el-radio-group>
        </div>
        <div class="title">
            <p class="title_number">{{ '-$'+title_number }}</p>
            <p class="title_p">Category Chart</p>
            <p class="title_time">{{ '过去'+title_time + '的花费' }}</p>

        </div>
        <div class="chart" ref="myChart">
        </div>
    </div>
</template>
<script>

export default {
    name: 'Category_Chart',
    data() {
        return {
            radio1: '支出',

        }
    },
    mounted() {
        this.drawLine();
        const self = this;
        window.addEventListener("resize", () => {
            self.myChart.resize();
        });
    },
    beforeDestroy() {
        const self = this;
        window.addEventListener("resize", () => {
            self.myChart.resize();
        });
    },
    computed: {
        Consumption() {
            return {
                'energy': this.sum('energy', 'Sep,2021'),
                'food': this.sum('food', 'Sep,2021'),
                'entertainment': this.sum('entertainment', 'Sep,2021'),
                'other': this.sum('other', 'Sep,2021'),
            }
        },
        title_number() {
            return Object.values(this.Consumption).reduce((prev, current, index, arr) => {
                return prev + current
            })
        },
        title_time: {
            get() {
                let time = null
                if (this.$store.state.click_time === 'first') {
                    time = '一天'
                } else if (this.$store.state.click_time === 'second') {
                    time = '一周'
                } else if (this.$store.state.click_time === 'third') {
                    time = '一月'
                }
                else if (this.$store.state.click_time === 'fourth') {
                    time = '一年'
                } else {
                    time = '全部'
                }
                return time
            },
            set() {

                let time = null
                if (this.$store.state.click_time === 'first') {
                    time = '一天'
                } else if (this.$store.state.click_time === 'second') {
                    time = '一周'
                } else if (this.$store.state.click_time === 'third') {
                    time = '一月'
                }
                else if (this.$store.state.click_time === 'fourth') {
                    time = '一年'
                } else {
                    time = '全部'
                }
                return time
            }
        },
        // time_number()//用来计算数据日期
        // {
        //     let time = null
        //     if (this.$store.state.click_time === 'first') {
        //         time = '一天'
        //     } else if (this.$store.state.click_time === 'second') {
        //         time = '一周'
        //     } else if (this.$store.state.click_time === 'third') {
        //         time = '一月'
        //     }
        //     else if (this.$store.state.click_time === 'fourth') {
        //         time = '一年'
        //     } else {
        //         time = '全部'
        //     }
        //     return time
        // }



        // this.$store.state.click_time
    },
    methods: {
        drawLine() {
            // 基于刚刚准备好的 DOM 容器，初始化 EChart 实例
            let myChart = this.$echarts.init(this.$refs.myChart)
            this.myChart = myChart
            // 绘制图表
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: function (arg) {

                        return arg.name + ':' + arg.percent + '%'
                    }

                },
                backgroundColor: 'transparent'
                , //rgba设置透明度0.1,
                legend: {
                    show: 'true',
                    type: 'scroll',
                    top: '80%',
                    left: 'center',
                    icon: 'circle'
                },
                // color: ['#928FFF', '#8EE04E', '#FF6740', '#CACAF5'],
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['30%', '60%'],
                        center: ['50%', '40%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 25,
                                fontWeight: 'bold',
                                formatter: function (arg) {

                                    return '$' + arg.value
                                },
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: this.Consumption.energy, name: '能源', truename: 'energy' },
                            { value: this.Consumption.food, name: '餐饮', truename: 'food' },
                            { value: this.Consumption.entertainment, name: '娱乐', truename: 'food' },
                            { value: this.Consumption.other, name: '其他', truename: 'other' },

                        ]
                    },
                ]
            }
            )
            myChart.on('click', (arg) => {
                if (!this.$store.state.Transactions_click) {
                    this.$store.commit('updateTransactions_click')
                }

                this.$store.commit('updateprecent_Transactions_bcategoryk', arg.data.truename);
                this.title_number = this.Consumption[arg.data.truename]
            }

            )

        },
        sum(name, time) {
            let data = this.$store.state.recodes.filter(item => ((item.bcategory === name) & item.ShoppingTime.indexOf(time) != -1))

            return data.reduce((total, item) => {
                return total + -1 * item.consumption
            }, 0)
        },
    }
}
</script>
<style lang="less" scoped>
.tags {
    width: 6.54rem;
    height: 1.16rem;
    border-radius: .32rem;
    background: #e9e9ff;
    background-blend-mode: normal;
    display: flex;
    justify-content: space-around;
    align-items: center;

    /deep/.el-radio-button__orig-radio:checked+.el-radio-button__inner {
        width: 2.9856rem;
        height: .64rem;
        border-radius: .16rem;
        background: #ffffff;
        background-blend-mode: normal;
        color: #4a44c6;
        font-family: Manrope;
        font-size: .28rem;
        font-weight: 700;
      
        text-align: center;
        border-color: #fff;
        box-shadow: none;
        align-items: center;
    }

    /deep/.el-radio-button__inner {
        width: 2.9856rem;
        height: .64rem;
        background-color: transparent;
        border-radius: .16rem;
        border: none;
        background-blend-mode: normal;
        color: #121826;
        font-family: Manrope;
        font-size: .28rem;
        font-weight: 700;
        text-align: center;
        outline: none;
        border-color: #fff;

    }

    /deep/ .el-radio-button:first-child .el-radio-button__inner {
        border-left: none;
    }
}

.title {
    width: 6.54rem;
    height: 1.12rem;

    .title_p {
        color: #121826;
        font-family: Manrope;
        font-size: .36rem;
        font-weight: 700;
        line-height: .56rem;
    }

    .title_time {
        color: #6c727f;
        font-family: Manrope;
        font-size: .28rem;
        font-weight: 400;
        line-height: .48rem;
    }

    .title_number {
        color: #4a44c6;
        font-family: Manrope;
        font-size: .32rem;
        font-weight: 700;
        line-height: .52rem;
        float: right;
    }
}

.Category_Chart {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 6.54rem;
    height: 6.7044rem;


    .chart {
        position: relative;
        left: .2124rem;
        top: .4774rem;
        width: 6.54rem;
        height: 6.7044rem;

    }
}
</style>


