<template>
    <div class="Security">
        <p class="title">Security</p>

        <div class="Setting_label info">
            <p>更改钱包密码</p>
            <div class="result">
                <img src="@/assets/svg/rightgo.svg" alt=""></img>
            </div>
        </div>
        <div class="Setting_label info">
            <p>隐私政策</p>
            <div class="result">
                <img src="@/assets/svg/rightgo.svg" alt=""></img>
            </div>
        </div>
        <div class="Setting_label info">
            <p>生物识别</p>
            <div class="result">
                <el-switch v-model="IsBiometric" active-color="#13ce66;">
                </el-switch>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Security",
    data() {
        return {
            options: [{
                value: '选项1',
                label: '简体中文'
            }, {
                value: '选项2',
                label: '繁体中文'
            }, {
                value: '选项3',
                label: '英语'
            },],
            Language: '简体中文',
            IsBiometric: false
        }
    },
    computed: {

    }
};
</script>
<style lang="less" scoped>
.Security {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 6.54rem;
    height: 2.56rem;
    background-blend-mode: normal;

    .Setting_label {
        margin-top: .5rem;

        .result {
            display: flex;
            justify-content: space-evenly;
            width: 2.08rem;
            color: #121826;

            /deep/.el-switch__core {
                margin-left: 2.6rem;
            }

            /deep/ .el-switch.is-checked .el-switch__core {
                border-color: #928fff;
                ;
                background-color: #928fff;
                ;
            }

            .select {

                /deep/ .el-input__inner {
                    border: none;
                    background: transparent;
                    text-align: right;
                    cursor: pointer;
                    color: #121826;
                    font-family: "Manrope-Regular";
                    font-size: .28rem;
                    font-weight: 400;
                    line-height: .48rem;
                }

                /deep/ .el-select-dropdown__item {
                    font-size: .24rem;
                }

            }


            img {
                position: absolute;
                width: .4rem;
                height: .4rem;
                right: 5%;
                cursor: pointer;
            }

            p {
                color: #1b7a00;
                font-family: "Manrope-Regular";
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;
                text-align: right;
            }
        }
    }

    .title {
        position: absolute;
        top: 33%;
        left: 12%;
        height: .48rem;
        color: #6c727f;
        font-family: Manrope;
        font-size: .28rem;
        font-weight: 700;
        line-height: .48rem;
    }

    .info {
        display: flex;
        justify-content: space-between;
        width: 5.58rem;
        height: .48rem;


        p {
            color: #6c727f;
            font-family: "Manrope-Regular";
            font-size: .28rem;
            font-weight: 400;
            line-height: .48rem;
        }
    }




}
</style>