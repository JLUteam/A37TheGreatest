<template>
    <div class="Category_Chart" >
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
                tooltip: {
                    trigger: 'item'
                },
                backgroundColor: 'transparent'
                , //rgba设置透明度0.1,
                title: {
                    text: '今天的支出百分比',
                    textStyle: {
                        color: '#121826',
                        fontWeight: 700,
                        fontFamily: 'Manrope',
                        fontSize: 15,
                    },
                    top: '0%'
                },
                legend: [{
                    itemWidth: 12,
                    itemHeight: 12,
                    itemStyle: { color: 'rgb(146, 143, 255)' },
                    textStyle: { color: 'black' },
                    top: '55%', //调整位置
                    left: '33%',//调整位置
                    data: [{ name: '能源', icon: 'rect' }],

                }, {
                    itemWidth: 12,
                    itemHeight: 12,
                    itemStyle: { color: 'rgb(142, 224, 78)' },
                    textStyle: { color: 'black' },
                    top: '55%', //调整位置
                    left: '55%',//调整位置
                    data: [{ name: '餐饮', icon: 'rect' }],
                },
                {
                    itemWidth: 12,
                    itemHeight: 12,
                    itemStyle: { color: 'rgb(255, 103, 64)' },
                    textStyle: { color: 'black' },
                    top: '65%', //调整位置
                    left: '33%',//调整位置
                    data: [{ name: '娱乐', icon: 'rect' }],
                },
                {
                    itemWidth: 12,
                    itemHeight: 12,
                    itemStyle: { color: 'rgb(202, 202, 245)' },
                    textStyle: { color: 'black' },
                    top: '65%', //调整位置
                    left: '53%',//调整位置
                    data: [{ name: '其他', icon: 'rect' }],
                }],
                color: ['#928FFF', '#8EE04E', '#FF6740', '#CACAF5'],
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['60%', '90%'],
                        center: ['50%', '50%'],
                        avoidLabelOverlap: false,

                        itemStyle: {
                            borderRadius: 10,
                            borderWidth: 20
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 55,
                                fontWeight: 'bold',
                                formatter: '{d}%',
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
    .percentage {
        position: relative;
        width: 5.7526rem;
        height: .56rem;
        top: 0;
        left: 0;
        color: #121826;
        font-family: Manrope;
        font-size: .36rem;
        font-weight: 700;
        line-height: .56rem;
    }

    .chart {
        position: relative;
        left: .2124rem;
        top: .4774rem;
        width: 6.54rem;
        height: 6.7044rem;
        
    }
}
</style>