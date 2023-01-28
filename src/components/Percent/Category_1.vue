<template>
    <div class="Category_Chart">
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
            activeName: 'second'
        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            // 基于刚刚准备好的 DOM 容器，初始化 EChart 实例
            let myChart = this.$echarts.init(this.$refs.myChart)
            let xAxis = null
            if (this.activeName === 'first') {
                xAxis = Object.keys([...Array(24)])
            } else if (this.activeName === 'second') {
                xAxis = Object.keys([...Array(7)])
            } else if (this.activeName === 'third') {
                xAxis = Object.keys([...Array(30)])
            }
            else if (this.activeName === 'fourth') {
                xAxis = Object.keys([...Array(12)])
            } else {
                xAxis = Object.keys([...Array(10)])
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
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line',
                            smooth: true,
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
                            },

                        },
                        {
                            data: [240, 432, 1201, 334, 290, 330, 320],
                            type: 'line',
                            smooth: true,
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
                                color: '#FF6740'
                            }
                        }
                    ]
                }
            )
        },
        handleClick(tab, event) {
            console.log(tab, event);
            this.drawLine()
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

        /deep/ .el-tabs__item.is-active {
            color: #4A44C6;
        }

        /deep/ .el-tabs__active-bar {
            background-color: #928FFF
        }
    }

}
</style>