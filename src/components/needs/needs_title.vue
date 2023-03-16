<template>
    <div class="basic">
        <h2 class="title">个性需求</h2>
        <div class="item"></div>
        <div class="need_nav">
            <el-radio-group v-model="value" size="medium">
                <el-radio-button label="情景账本"></el-radio-button>
                <el-radio-button label="账务分享"></el-radio-button>
                <el-radio-button label="财务健康"></el-radio-button>
            </el-radio-group>
        </div>
    </div>
</template>
<script>
export default {
    name: "needs_title",
    data() {
        return {
            value: "情景账本"
        };
    },
    components: {

    },
    computed: {

    },
};
</script>
<style lang="less" scoped>
.basic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 7.5rem;
    overflow: hidden;

    .title {
        // position: absolute;
        margin-right: 4.5rem;
        margin-top: .70rem;
        // width: 5.42rem;
        height: .68rem;
        color: #121826;
        font-family: "Gill Sans", sans-serif;
        font-size: .48rem;
        font-weight: 500;
        line-height: .68rem;
    }

    .item {
        // position:unset;
       margin-left: 6.5rem;
       margin-top: -0.8rem;
        width: 1.46rem;
        height: .64rem;
        border-radius: .54rem 0 0 .54rem ;
        background: #a8a5ff;
        background-blend-mode: normal;

    }

    .need_nav {
        width: 7.04rem;
        height: 1.16rem;
        border-radius: 0.32rem;
        background: #e9e9ff;
        background-blend-mode: normal;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: .4rem;

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

        /deep/.el-radio-group {
            // margin-top: 2rem;
        }
    }
}
</style>