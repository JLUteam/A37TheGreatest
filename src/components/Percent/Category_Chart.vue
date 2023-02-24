<template>
    <div class="Category_Chart">
        <div class="tags">
            <el-radio-group v-model="radio1">
                <el-radio-button label="收入"></el-radio-button>
                <el-radio-button label="支出"></el-radio-button>
            </el-radio-group>
        </div>
        <div class="title">
            <p class="title_number">{{ (this.radio1 === '支出' ? '-$' : '$') + title_number.toFixed(2) }}</p>
            <!-- <p class="title_p">Category Chart</p> -->
            <p class="title_time">{{ '过去' + this.radio2 + '的' + (this.radio1 === '支出' ? '支出' : '收入') }}</p>
        </div>
        <div class="tags2">
            <el-radio-group v-model="radio2">
                <el-radio-button label="一天"></el-radio-button>
                <el-radio-button label="一周"></el-radio-button>
                <el-radio-button label="一月"></el-radio-button>
                <el-radio-button label="一年"></el-radio-button>
            </el-radio-group>
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
            radio2: '一天',
            time: ''
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
                'energy': this.radio1 === '支出' ? this.sum('能源', this.title_time) : this.sum_income('energy', this.title_time),
                'food': this.radio1 === '支出' ? this.sum('餐饮', this.title_time) : this.sum_income('food', this.title_time),
                'entertainment': this.radio1 === '支出' ? this.sum('娱乐', this.title_time) : this.sum_income('entertainment', this.title_time),
                'other': this.radio1 === '支出' ? this.sum('学习', this.title_time) : this.sum_income('other', this.title_time),
            }
        },
        title_number: {
            get() {
                return Object.values(this.Consumption).reduce((prev, current, index, arr) => {
                    // console.log('this=' + current + ' ' + prev)
                    return prev + current
                })
            },
            set() {
                return Object.values(this.Consumption).reduce((prev, current, index, arr) => {
                    return prev + current
                })
            }
        },
        title_time: {
            get() {
                const date = new Date();
                let year = date.getFullYear();
                let month = (date.getMonth() + 1).toString().padStart(2, "0");
                let dayOfWeek = date.getUTCDay() === 0 ? 7 : date.getUTCDay();
                let day = date.getDate().toString().padStart(2, "0");
                let temp = ''
                let time = []
                if (this.radio2 === '一天') {
                    temp = '' + year + '-' + month + '-' + day
                    time.push(temp)
                } else if (this.radio2 === '一周') {
                    for (let i = 1; i <= dayOfWeek; i++) {
                        var oneDayTime = 24 * 60 * 60 * 1000;
                        const newDate = new Date(date.getTime() + (i - dayOfWeek) * oneDayTime);
                        month = (newDate.getMonth() + 1).toString().padStart(2, "0");
                        day = newDate.getDate().toString().padStart(2, "0");
                        temp = '' + year + '-' + month + '-' + day
                        time.push(temp)
                    }
                } else if (this.radio2 === '一月') {
                    temp = '' + year + '-' + month
                    time.push(temp)
                }
                else if (this.radio2 === '一年') {
                    temp = '' + year
                    time.push(temp)
                }
                return time
            },
            set() {
                const date = new Date();
                let year = date.getFullYear();
                let month =( date.getMonth() + 1).toString().padStart(2, "0");
                let dayOfWeek = date.getUTCDay();
                let day = date.getDate().toString().padStart(2, "0");
                let temp = ''
                let time = []
                if (this.radio2 === '一天') {
                    temp = '' + year + ' - ' + month + ' - ' + day
                    time.push(temp)
                } else if (this.radio2 === '一周') {
                    for (let i = 1; i <= dayOfWeek; i++) {
                        var oneDayTime = 24 * 60 * 60 * 1000;
                        const newDate = new Date(date.getTime() + (i - dayOfWeek) * oneDayTime);
                        month = (newDate.getMonth() + 1).toString().padStart(2, "0");
                        day = newDate.getDate().toString().padStart(2, "0");
                        temp = '' + year + '- ' + month + ' - ' + day
                        time.push(temp)
                    }
                } else if (this.radio2 === '一月') {
                    temp = '' + year + ' - ' + month
                    time.push(temp)
                }
                else if (this.radio2 === '一年') {

                    temp = '' + year
                    time.push(temp)
                }

                return time
            }
        }
    },
    methods: {
        drawLine() {
            // 基于刚刚准备好的 DOM 容器，初始化 EChart 实例
            let myChart = this.$echarts.init(this.$refs.myChart)
            this.myChart = myChart
            // 绘制图表
            myChart.setOption({
                tooltip: {
                    show: false,
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
                        radius: ['40%', '70%'],
                        center: ['50%', '40%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 18,
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
                            { value: Math.round(this.Consumption.energy * 100) / 100, name: '能源', truename: 'energy' },
                            { value: Math.round(this.Consumption.food * 100) / 100, name: '餐饮', truename: 'food' },
                            { value: Math.round(this.Consumption.entertainment * 100) / 100, name: '娱乐', truename: 'entertainment' },
                            { value: Math.round(this.Consumption.other * 100) / 100, name: '其他', truename: 'other' },

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
            let data = this.include(name, time)
            return data.reduce((total, item) => {
                return total + 1 * item.amount
            }, 0)
        },
        sum_income(name, time) {
            let data = this.include_income(name, time)
            return data.reduce((total, item) => {
                return total + item.amount
            }, 0)
        },
        include(name, time) {
            let data = []
            for (let i = 0; i < time.length; i++) {
                // console.log('include ' + name + ' ' + time[i])
                data.push(... this.$store.state.recodes.filter(item => {
                   return ((item.bcategory === name) & item.btime.indexOf(time[i]) != -1)
                }))
            }
            console.log(data)
            return data
        },
        include_income(name, time) {
            let data = []
            for (let i = 0; i < time.length; i++) {
                // console.log('include ' + name + ' ' + time[i])
                data.push(... this.$store.state.income_statement.filter(item => ((item.bcategory === name) & item.btime.indexOf(time[i]) != -1)))
            }
            // console.log('546' + name + ' 123 ' + time + '  ' + data + ' 987')
            return data
        },

    }, watch: {
        radio1(val) {
            this.drawLine()

            this.$store.commit('updateradio1', val)
        },
        radio2(val) {
            this.drawLine()

            this.$store.commit('updateradio2', val)
        }
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

.tags2 {
    width: 6.54rem;
    height: 1.16rem;
    border-radius: .32rem;
    background: #e9e9ff;
    background-blend-mode: normal;
    display: flex;
    justify-content: space-around;
    align-items: center;

    /deep/.el-radio-button__orig-radio:checked+.el-radio-button__inner {
        // width: 2.9856rem;
        // height: .64rem;
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
        // width: 2.9856rem;
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

    // .title_p {
    //     color: #121826;
    //     font-family: Manrope;
    //     font-size: .36rem;
    //     font-weight: 700;
    //     line-height: .56rem;
    // }

    .title_time {
        color: #6c727f;
        font-family: Manrope;
        font-size: .36rem;
        font-weight: 700;
        line-height: .56rem;
    }

    .title_number {
        color: #4a44c6;
        font-family: Manrope;
        font-size: .36rem;
        font-weight: 700;
        line-height: .56rem;
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


