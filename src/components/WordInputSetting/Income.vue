<template>
    <div class="income ">
        <div class="line">
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/canyin.svg" @click='ToSettingRecode("餐饮",true)' alt="">
                <p>餐饮</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/fushi.svg" @click='ToSettingRecode("服饰", true)' alt="">
                <p>服饰</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/gongjiao.svg" @click='ToSettingRecode("公交", true)' alt="">
                <p>公交</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/gongzuo.svg" @click='ToSettingRecode("工作", true)' alt="">
                <p>工作</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/shezhi.svg" @click='ToSettingRecode("设置", true)' alt="">
                <p>设置</p>
            </div>
        </div>
        <div class="line">
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/gouwu.svg" @click='ToSettingRecode("购物", true)' alt="">
                <p>购物</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/jujia.svg" @click='ToSettingRecode("居家", true)' alt="">
                <p>居家</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/liwu.svg" @click='ToSettingRecode("礼物", true)' alt="">
                <p>礼物</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/lvhang.svg" @click='ToSettingRecode("旅行", true)' alt="">
                <p>旅行</p>
            </div>
            <div class="tab" style="background-color: transparent;">

            </div>
        </div>
        <div class="line">
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/meirong-heicopy.svg" @click='ToSettingRecode("美容", true)' alt="">
                <p>美容</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/riyongpin.svg" @click='ToSettingRecode("日用", true)' alt="">
                <p>日用</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/shucai.svg" @click='ToSettingRecode("蔬菜", true)' alt="">
                <p>蔬菜</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/shuiguo.svg" @click='ToSettingRecode("水果", true)' alt="">
                <p>水果</p>
            </div>
            <div class="tab" style="background-color: transparent;">
                <!-- <img src="@/assets/svg/icon_ycof0s6ppu/shezhi.svg" alt="">
                            <p>设置</p> -->
            </div>
        </div>
        <div class="line">
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/tongxunlu.svg" @click='ToSettingRecode("通讯", true)' alt="">
                <p>通讯</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/xuexi.svg" @click='ToSettingRecode("学习", true)' alt="">
                <p>学习</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/yule.svg" @click='ToSettingRecode("娱乐", true)' alt="">
                <p>娱乐</p>
            </div>
            <div class="tab">
                <img src="@/assets/svg/icon_ycof0s6ppu/yundong.svg" @click='ToSettingRecode("运动", true)' alt="">
                <p>运动</p>
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
    name: 'income',
    computed: {
    },
    methods: {
        ToSettingRecode(bcategory_, Ispay_) {
            this.$router.push({
                name: 'ConsumptionDetails_Setting',
                query: {
                    bcategory: bcategory_,
                    Ispay: Ispay_
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