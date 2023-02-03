<template>
    <div class="income ">
        <div class="line">
            <div class="tab">
                <img src="@/assets/svg/icon_0p9q85sdf0hp/jianzhi.svg" @click='ToSettingRecode("兼职")' alt="">
                <p>兼职</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_0p9q85sdf0hp/lijin.svg" @click='ToSettingRecode("礼金")' alt="">
                <p>礼金</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_0p9q85sdf0hp/shezhi.svg" @click='ToSettingRecode("设置")' alt="">
                <p>设置</p>
            </div>
        </div>
        <div class="line">
            <div class="tab">
                <img src="@/assets/svg/icon_0p9q85sdf0hp/tuihuo.svg" @click="ToSettingRecode('退货')">
                <p>退货</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_0p9q85sdf0hp/weibiaoti5.svg" @click='ToSettingRecode("金融")' alt="">
                <p>金融</p>
            </div>
            <div class="tab" style="background-color: transparent;">

            </div>
        </div>
        <div class="line">
            <div class="tab">
                <img src="@/assets/svg/icon_0p9q85sdf0hp/yinhangka.svg" @click='ToSettingRecode("银行")' alt="">
                <p>银行</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_0p9q85sdf0hp/yuangonggongzi.svg" @click='ToSettingRecode("工资")' alt="">
                <p>工资</p>
            </div>
            <div class="tab" style="background-color: transparent;">
            
            </div>
        </div>
        <div class="line">
            <div class="tab">
                <img src="@/assets/svg/icon_0p9q85sdf0hp/zizhuguanli1.svg" @click='ToSettingRecode("投资")' alt="">
                <p>投资</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_0p9q85sdf0hp/qita.svg" @click='ToSettingRecode("其他")'alt="">
                <p>其他</p>
            </div>
            <div class="tab" style="background-color: transparent;">
                <!-- <img src="@/assets/svg/icon_ycof0s6ppu/shezhi.svg" alt="">
                            <p>设置</p> -->
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'Outcome',
    computed: {
    },
    methods: {
        ToSettingRecode(bcategory) {
            this.$router.push({
                name: 'ConsumptionDetails_Setting',
                query: {
                    bcategory: bcategory
                }
            })
        }
    },
}
</script>
<style lang="less" scoped>
.income {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .line {
        width: 100%;
        align-items: center;
        margin-top: 0rem;
        margin-bottom: .8rem;

        .tab {
            width: 1.12rem;
            height: 1.12rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #f4f4f6;
            border-radius: .56rem;
            margin-left: .4rem;
            margin-top: .6rem;
            cursor: pointer;

            img {
                width: .48rem;
                height: .48rem;
            }

            p {
                position: absolute;
                margin-top: 1.5rem;
            }
        }
    }
}
</style>