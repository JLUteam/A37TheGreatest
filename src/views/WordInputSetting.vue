<template>
    <div class="basic">
        <div class="back">
            <img src="@/assets/svg/IconsChevron-left.svg" alt="" @click=back()>
        </div>
        <div class="tags">
            <el-radio-group v-model="radio1">
                <el-radio-button label="支出" @click.native="switchIncome()"></el-radio-button>
                <el-radio-button label="收入" @click.native="switchOutcome()"></el-radio-button>
            </el-radio-group>
        </div>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>
<script>

export default {

    name: "WordInputSetting",
    data() {
        return {
            radio1: '支出',
        }
    },
    methods: {
        switchIncome() {
            this.$router.push({
                name: 'Income',
            })
        },
        switchOutcome() {
            this.$router.push({
                name: 'Outcome',
            })
        },
        back() {
            this.$router.push({
                name:'home'
            })
        }
    },
    components: {

    },




};
</script>
<style lang="less" scoped>
.basic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .back {
        display: flex;
        position: absolute;
        align-items: center;
        left: -.4rem;
        top: -.25rem;
        width: .8rem;
        height: .8rem;
        margin-left: .48rem;
        margin-top: .48rem;
        border-radius: .4rem;
        border: .03rem dashed #f4f4f6;

        img {
            width: .8rem;
            height: .8rem;
        }

    }

    .tags {
        width: 100%;
        height: 1.16rem;
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
}



::-webkit-scrollbar {
    display: none;
}
</style>
