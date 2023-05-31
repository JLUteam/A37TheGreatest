<template>
    <div class="StateBar">
        <div class="Status info">
            <p>{{ Ispay_ ? '支付状态' : ' 收入状态' }}</p>
            <div class="result">
                <img src="@/assets/svg/Check.svg" alt="">
                <p>{{ Status }}</p>
            </div>
        </div>
        <div class="Category info">
            <p>{{ Ispay_ ? '支付类型' : ' 收入类型' }}</p>
            <div class="result">
                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="Add_note info">
            <p>备注</p>
            <div class="result">
                <input type="text" v-model="Add_note" placeholder="备注">
            </div>
        </div>


    </div>
</template>
<script>
import _ from 'lodash';
export default {
    name: "StateBar",
    data() {
        return {
            value: this.recode.bcategory,
            oldval_bcategory: this.recode.bcategory,
            oldval_addnote: this.recode.note

        }
    },
    props: {
        recode: {
            type: Object
        }
    },
    computed: {
        Status: {
            get() {
                return '已完成';
            },
            set(value) {
                this.$store.commit('updateStatus', [this.recode.uid, value])
            }
        },
        options() {
            let ans = []
            let values = this.Ispay_ ? this.$store.state.outcomelist : this.$store.state.incomelist
            for (let i = 0; i < values.length; i++) {
                let obj = {
                    label: values[i],
                    value: values[i]
                }
                ans.push(obj)
            }
            return ans;
        },

        Add_note: {
            get() {
                return this.recode.note
            },
            set(value, oldval) {
                let recode_;
                if (this.$store.state.temp_insorouts === null) {
                    recode_ = this.recode
                } else {
                    let temp_ = this.$store.state.temp_insorouts
                    for (let i = 0; i < temp_.length; i++) {
                        if (temp_[i]['id'] == this.$store.state.changes.id) {
                            recode_ = temp_[i]

                        }
                    }

                }
                this.$parent.getchange(['note', value, oldval, recode_])
                this.$parent.isupdate()
                // this.$store.commit('updatenote', [this.recode.uid, value])

            }
        },
        Ispay_() {
            return this.$store.state.radio1 === '支出'
        }
    },
    watch: {
        value: {
            handler: function (value, oldval) {
                let recode_;
                if (this.$store.state.temp_insorouts === null) {
                    recode_ = this.recode
                } else {
                    let temp_ = this.$store.state.temp_insorouts
                    for (let i = 0; i < temp_.length; i++) {
                        if (temp_[i]['id'] == this.$store.state.changes.id) {
                            recode_ = temp_[i]

                        }
                    }

                }
                this.$parent.getchange(['bcategory', value, oldval, recode_])
                this.$parent.isupdate()
                // this.$store.commit('updateCategory', [this.recode.uid, value])
            }
        },
        recode: {
            handler(newV) {
                this.recode = newV;
                // console.log("监视到了")
                // console.log(newV)
            },
            deep: true,
            immediate: true
        }
    }
};
</script>
<style lang="less" scoped>
.StateBar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 6.54rem;
    height: 3.04rem;
    border-radius: 16px;
    background: #f9fafb;
    background-blend-mode: normal;
    margin-bottom: .48rem;

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

    .Status {
        .result {
            display: flex;
            justify-content: space-around;
            width: 2.08rem;
            color: #121826;

            img {
                width: .4rem;
                height: .4rem;
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

    .Category {
        .result {
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

            /deep/ .el-input__inner,
            .el-select-dropdown__item.is-disabled:hover {
                background-color: transparent;
                border: none !important;

            }

            /deep/.el-icon-arrow-up:before {
                content: "";
            }



            /deep/ .el-input__inner {
                cursor: pointer;
                // width: 2rem !important;
                margin-left: 1rem;
                margin-right: -3.3rem;
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;
                color: #121826;

            }

            /deep/.el-select .el-input__inner {
                padding-right: 1rem !important;
            }
        }
    }

    .Add_note {
        margin-top: .1rem;

        .result {


            input {
                border: none;
                outline: none;
                text-align: right;
                background-color: transparent;
                color: #121826;
                font-family: "Manrope-Regular";
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;

            }
        }
    }
}
</style>