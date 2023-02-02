<template>
    <div class="General">
        <p class="title">General</p>
        <div class="Setting_label info">
            <p>语言</p>
            <div class="result">
                <el-select v-model="Language" filterable class="select">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label">
                    </el-option>
                </el-select>
            </div>
        </div>

        <div class="Setting_label info">
            <p>联系我们</p>
            <div class="result">
                <img src="@/assets/svg/rightgo.svg" alt=""></img>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "General",
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
            Language: '简体中文'
        }
    },
    computed: {
        //     Setting_label: {
        //         get() {
        //             return this.recode.isfinish ? 'Completed' : 'Uncompleted';
        //         },
        //         set(value) {
        //             this.$store.commit('updateSetting_label', [this.recode.uid, value])

        //         }
        //     },

        //     Add_note: {
        //         get() {
        //             return this.recode.note
        //         },
        //         set(value) {
        //             console.log(123)
        //             this.$store.commit('updatenote', [this.recode.uid, value])
        //         }
        //     }
        // },
        // watch: {
        //     value: {
        //         handler: function (value) {
        //             this.$store.commit('updateCategory', [this.recode.uid, value])
        //         }
        //     },
    }
};
</script>
<style lang="less" scoped>
.General {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 6.54rem;
    height: 2.56rem;
    background-blend-mode: normal;
    margin-top: .5rem;
    margin-bottom: 1.5rem;

    .Setting_label {
        margin-top: .5rem;

        .result {
            display: flex;
            justify-content: space-evenly;
            width: 2.08rem;
            color: #121826;


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
        top: 8%;
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