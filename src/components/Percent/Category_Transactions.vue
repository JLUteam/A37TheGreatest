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
            value: '',
            activeName: '',
            selectedvalue: ''
        }
    },
    mounted() {
        this.drawLine();
        // console.log(('123', this.getdata(this.$store.state.precent_Transactions_bcategory, this.temp), 'consumption'))
        console.log(this.activevalue)
    },
    beforeDestroy() {
        const self = this;
        window.addEventListener("resize", () => {
            self.myChart.resize();
        });
    },
    methods: {
        drawLine() {
            let date = new Date()
            let temp = new Date(date);
            // 基于刚刚准备好的 DOM 容器，初始化 EChart 实例
            let myChart = this.$echarts.init(this.$refs.myChart)
            this.myChart = myChart
            let xAxis = null
            if (this.activeName === 'first') {
                xAxis = Object.keys([...Array(24)])
                temp.setDate(temp.getDate() - 1);
            } else if (this.activeName === 'second') {
                xAxis = Object.keys([...Array(7)])
                temp.setDate(temp.getDate() - 7);
            } else if (this.activeName === 'third') {
                xAxis = Object.keys([...Array(30)])
                temp.setDate(temp.getDate() - 30);
            }
            else if (this.activeName === 'fourth') {
                xAxis = Object.keys([...Array(12)])
                temp.setDate(temp.getDate() - 365);
            } else {
                xAxis = Object.keys([...Array(10)])
            }
            temp = this.formatDate(temp)
            this.temp = temp
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
                            data: this.activevalue,
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
        handleClick(tab, event) {
            this.drawLine()
        },
        getdata(name, time) {
            let arr = this.$store.state.recodes.filter(item => ((item.bcategory === name) & this.getHour(time, item.ShoppingTime) >= 0))
            console.log(arr)
            return arr

        },
        getHour(s1, s2) {
            s1 = new Date(s1.replace(/-/g, '/'));
            s2 = new Date(s2.replace(/-/g, '/'));
            var ms = Math.abs(s1.getTime() - s2.getTime());
            return ms / 1000 / 60 / 60;
        },
        formatDate(time, format = 'YY-MM-DD hh:mm:ss') {
            var date = new Date(time);
            var year = date.getFullYear(),
                month = date.getMonth() + 1,//月份是从0开始的
                day = date.getDate(),
                hour = date.getHours(),
                min = date.getMinutes(),
                sec = date.getSeconds();
            var preArr = Array.apply(null, Array(10)).map(function (elem, index) {
                return '0' + index;
            });
            var newTime = format.replace(/YY/g, year)
                .replace(/MM/g, preArr[month] || month)
                .replace(/DD/g, preArr[day] || day)
                .replace(/hh/g, preArr[hour] || hour)
                .replace(/mm/g, preArr[min] || min)
                .replace(/ss/g, preArr[sec] || sec);

            return newTime;
        },
        getMappingValueArrayOfKey(array, keyName) {
            if (Object.prototype.toString.call(array) == '[object Array]') {
                return array.map((item, index) => {
                    return item[keyName]
                })
            }
            return 'null（参数一应为对象数组）';//不是数组
        }


    },
    computed: {
        activevalue: {
            get() {

                return this.getMappingValueArrayOfKey(this.getdata(this.$store.state.precent_Transactions_bcategory, this.temp), 'consumption').map(item => -item)
            },
            set() {
                return this.getMappingValueArrayOfKey(this.getdata(this.$store.state.precent_Transactions_bcategory, this.temp), 'consumption').map(item => -item)
            }
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