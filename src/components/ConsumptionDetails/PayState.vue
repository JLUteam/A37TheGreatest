<template>
    <div class="PayState">
        <div class="payment info">
            <p>{{ Ispay_ ? '支付方式' : ' 收入方式' }}</p>
            <div class="result">
                <!-- <p>{{ payment }}</p> -->
                <el-select v-model="payment" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="Amount info">
            <p>{{ Ispay_ ? '支付金额' : ' 收入金额' }}</p>
            <div class="result">
                <input type="text" v-model="Amount" placeholder="点此添加" ref="Amount_" @click="geAmount_">
            </div>
        </div>


    </div>
</template>
<script>
export default {
    name: "PayState",
    props: {
        recode: {
            type: Object
        }
    },
    data() {
        return {
            payment: this.recode.payment,
            Amount: this.recode.amount,
            options: [{
                value: '现金',
                label: '现金'
            }, {
                value: '银行卡',
                label: '银行卡'
            }, {
                value: '股票',
                label: '股票'
            }, {
                value: '基金',
                label: '基金'
            }, {
                value: '微信',
                label: '微信'
            }, {
                value: '支付宝',
                label: '支付宝'
            }, {
                value: '公交卡',
                label: '公交卡'
            }, {
                value: '饭卡',
                label: '饭卡'
            }, {
                value: '白条',
                label: '白条'
            }, {
                value: '信用卡',
                label: '信用卡'
            }, {
                value: '应付款项',
                label: '应付款项'
            }, {
                value: '公司报销',
                label: '公司报销'
            }, {
                value: '应收款项',
                label: '应收款项'
            },],
        }
    }
    ,
    computed: {

        Ispay_() {
            return this.$store.state.radio1 === '支出'
        }
    },
    methods: {
        geAmount_() {
            return this.Amount.toString()
        },
    },
    watch: {
        Amount(newval, oldval) {
            this.$parent.getchange(['amount', newval, oldval, this.recode])
              this.$parent.isupdate()
        },
        payment(newval, oldval) {
            this.$parent.getchange(['payment', newval, oldval, this.recode])
               this.$parent.isupdate()
        }
    }


};
</script>
<style lang="less" scoped>
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

.PayState {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 6.54rem;
    height: 2.24rem;
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

    .payment {
        .result {

            p {
                font-family: "Manrope-Regular";
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;
                color: #121826;
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
                padding-right: .5rem;
                color: #121826;

            }
        }
    }


    .Amount {
        .result {
            p {
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