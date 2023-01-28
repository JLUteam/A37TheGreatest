<template>
    <div class="Category_Chart">
        <div class="chart" ref="myChart">

        </div>
    </div>
</template>
<script>

export default {
    name: 'Category_Chart',
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            // 基于刚刚准备好的 DOM 容器，初始化 EChart 实例
            let myChart = this.$echarts.init(this.$refs.myChart)
            // 绘制图表
            myChart.setOption({
                // title: {
                //     text: 'total',
                //     textStyle: {
                //         color: '#6c727f',
                //         fontFamily: 'Manrope',
                //         fontSize: 25,
                //         fontWeight: 400,
                //         lineHeight: 24,

                //     },
                //     x: '46%',
                //     y: '40%'
                // }
                
                tooltip: {
                    trigger: 'item',
                    formatter: function (arg) {
                     
                        return arg.name+':'+arg.percent +'%'
                    }

                },
                backgroundColor: 'transparent'
                , //rgba设置透明度0.1,
                legend: {
                    show: 'true',
                    type: 'scroll',
                    top: '90%',
                    left: 'center',
                    icon: 'circle'
                },
                color: ['#928FFF', '#8EE04E', '#FF6740', '#CACAF5'],
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['50%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 55,
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
                            { value: this.$store.state.Consumption.能源, name: '能源' },
                            { value: this.$store.state.Consumption.餐饮, name: '餐饮' },
                            { value: this.$store.state.Consumption.娱乐, name: '娱乐' },
                            { value: this.$store.state.Consumption.其他, name: '其他' },

                        ]
                    },
                ]
            }
            )
        },


    }
}
</script>
<style lang="less" scoped>
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


