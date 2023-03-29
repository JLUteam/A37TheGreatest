<template>
    <div class="basic">
        <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__backInDown">
            <p class="title_" :key="1">您的消费倾向为:</p>
            <p class="result" :key="2">{{ this.result }}</p>
            <div class="category" ref="caiwu_category" :key="3">
            </div>
        </transition-group>
        <div class="suggest">
            <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__backInLeft">
                <p class="title_suggest" :key="1">建议:</p>
                <div class="item_suggest" :key="2">
                    <div class="item">
                        <p class="result_suggest">{{ result_text.text1 }}</p>
                    </div>
                    <div class="content" style="white-space: pre-wrap;">
                        {{ result_text.text1_content }}
                    </div>
                </div>
            </transition-group>
            <transition appear name="animate__animated animate__bounce" enter-active-class="animate__backInRight">
                <div class="item_suggest">
                    <div class="item2">
                        <p class="result_suggest">{{ result_text.text2 }}</p>
                    </div>
                    <div class="content" style="white-space: pre-wrap;">
                        {{ result_text.text2_content }}
                    </div>
                </div>
            </transition>
            <transition appear name="animate__animated animate__bounce" enter-active-class="animate__backInLeft">
                <div class="item_suggest">
                    <div class="item">
                        <p class="result_suggest">{{ result_text.text3 }}</p>
                    </div>
                    <div class="content" style="white-space: pre-wrap;">
                        {{ result_text.text3_content }}
                    </div>
                </div>
            </transition>


        </div>
        <div class="blank">

        </div>
    </div>
</template>
<script>

export default {
    name: "caiwujiankang",
    data() {
        return {

        };
    },
    methods: {
        getEngel_coefficient() {
            return (this.sum(this.foodrecode) / this.sum(this.recodes__)).toFixed(2)
        },
        getAPC() {
            return (this.sum(this.recodes__) / this.sum(this.income_salary)).toFixed(2)
        },
        month() {
            let date = new Date();
            let year = date.getFullYear()
            let month = (date.getMonth() + 1).toString().padStart(2, "0");
            return ('' + year + '-' + month)
        },
        sum(recode_) {
            return recode_.reduce((total, item) => {
                return total + parseFloat(item.amount);
            }, 0);
        },
        data_caiwu() {
            return [
                {
                    name: '消费', value: this.sum(this.recodes__)
                },
                {
                    name: '投资与存储', value: this.sum(this.income) - this.sum(this.income_salary),
                }
            ]
        },
        drawcategroy() {
            let myChart = this.$echarts.init(this.$refs.caiwu_category);
            this.myChart = myChart;
            let option = {
                tooltip: {
                    trigger: "item",
                    show: false
                },
                backgroundColor: "transparent", //rgba设置透明度0.1,
                //rgba设置透明度0.1,
                legend: {
                    show: 'true',
                    top: '90%',
                    left: 'center',
                    icon: 'circle'
                },
                color: ['#e04141', '#74be62']
                ,
                series: [
                    {
                        name: "Access From",
                        type: "pie",
                        radius: ["70%", "90%"],
                        center: ["50%", "50%"],
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
                                formatter: "{b}\n{d}%",
                                padding: [10, 10],
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: this.data_caiwu()

                    },
                ],
            };
            myChart.setOption(option);
        },


    }
    ,
    computed: {
        recodes__() {
            let recodes__ = this.$store.getters.getreoces;
            recodes__ = recodes__.filter((item) => (item.btime.indexOf(this.month()) != -1))
            return recodes__
        },
        foodrecode() {
            let foodrecode = this.recodes__.filter((item) => (item.bcategory == '餐饮' || item.bcategory == '蔬菜' || item.bcategory == '水果'))
            return foodrecode
        },

        income() {
            let income = this.$store.getters.getincome;
            income = income.filter((item) => (item.btime.indexOf(this.month()) != -1))
            return income
        },
        income_salary() {
            let income_salary = this.income.filter((item) => (item.bcategory == '工资'))
            return income_salary
        }
        ,
        result() {
            let result;
            if (this.getAPC() > 1) {

                result = '过度消费人群'
            } else if (this.getAPC() >= 0.5) {
                result = '重视消费人群'
            } else {
                result = '倾向投资储蓄人群'
            }
            return result
        },
        result_text() {
            let text;
            if (this.getAPC() > 1) {
                let ans = {
                    text1: '仔细分析您的账单',
                    text1_content: '您在消费方面的支出已超出您的收入\n请仔细分析您的账单\n并适当减少开支',
                    text2: '建立合理的预算',
                    text2_content: '建立合理的预算\n规划好每月可支配的收入和支出\n并尽可能按照预算执行\n以便更好地控制支出',
                    text3: '建立储蓄习惯',
                    text3_content: '建立储蓄习惯\n每月将一定比例的收入用于储蓄\n以增加财务稳定性和减轻压力',
                }
                text = ans
            } else if (this.getAPC() >= 0.5) {
                let ans = {
                    text1: '制定合理预算',
                    text1_content: '制定合理预算\n明确自己每月可支配的收入和支出\n规划好每一笔开支\n并尽可能按照预算执行',
                    text2: '建立紧急基金',
                    text2_content: '建立紧急基金\n对于消费倾向强的人来说\n突发事件可能会使你们陷入财务困境\n建立紧急基金可以帮助你们应对突发事件',
                    text3: '进行适当投资',
                    text3_content: '可以考虑进行适当投资\n以增加收入并实现财务目标',
                }
                text = ans
            } else {
                let ans = {
                    text1: '确认明确的目标',
                    text1_content: '储蓄和投资需要有明确的目标\n以便合理地制定储蓄和投资计划\n更好地实现财务目标',
                    text2: '选择高效的储蓄方式',
                    text2_content: '选择高效的储蓄方式\n以提高储蓄的效率和收益',
                    text3: '进行多元化投资',
                    text3_content: '在进行投资时\n应该进行多元化投资\n以减少风险和提高收益',
                }
                text = ans
            }
            return text
        }

    },
    mounted() {
        setTimeout(() => {
            this.drawcategroy()
        }, 1000);
    }
};
</script>
<style lang="less" scoped>
.basic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title_ {
    display: flex;
    justify-content: start;
    margin-left: -.0rem;
    font-size: .5rem;
    font-weight: 500;
}

.result {
    display: flex;
    justify-content: center;

    font-size: .7rem;
    font-weight: 500;
}

.suggest {

    .title_suggest {
        display: flex;
        font-size: .5rem;
        font-weight: 500;
        margin-left: -0.1rem;
    }

    .item_suggest {
        width: 6rem;
        margin-top: .2rem;

        .item {
            margin-left: -.6rem;
            // margin-top: -0.8rem;
            width: 3.46rem;
            height: .9rem;
            border-radius: 0 0.54rem 0.54rem 0;
            background: #a8a5ff;
            background-blend-mode: normal;

            .result_suggest {
                padding-top: .1rem;
                text-align: center;
                font-size: .4rem;
                font-weight: 500;
            }
        }

        .item2 {
            margin-left: 3rem;
            // margin-top: -0.8rem;
            width: 3.46rem;
            height: .9rem;
            border-radius: 0.54rem 0 0 0.54rem;
            background: #a8a5ff;
            background-blend-mode: normal;

            .result_suggest {
                padding-top: .1rem;
                text-align: center;
                font-size: .4rem;
                font-weight: 500;
            }
        }

        .content {

            margin-top: .2rem;
            width: 100%;

            margin-bottom: .3rem;
            border-radius: .5rem;
            background-color: #e2e0e0;
            font-size: .4rem;
            font-weight: 500;
            padding-left: .3rem;
            padding-top: .2rem;
            padding-bottom: .2rem;

        }
    }
}

.category {
    width: 6.54rem;
    height: 7.7044rem;
}

.blank {
    height: 2rem;
}
</style>