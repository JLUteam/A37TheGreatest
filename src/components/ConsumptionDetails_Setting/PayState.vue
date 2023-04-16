<template>
    <div class="PayState">
        <div class="payment info">
            <p>{{ Ispay ? '支付方式' : ' 收入方式' }}</p>
            <div class="result">
                <el-select v-model="payment" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="Amount info">
            <p>{{ Ispay ? '支付金额' : ' 收入金额' }}</p>
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

        bcategory: String,
        Ispay: Boolean

    },
    data() {
        return {
            Amount: '',
            payment: '支付宝',
            options: [{
                value: '选项1',
                label: '现金'
            }, {
                value: '选项2',
                label: '银行卡'
            }, {
                value: '选项3',
                label: '股票'
            }, {
                value: '选项4',
                label: '基金'
            }, {
                value: '选项5',
                label: '微信'
            }, {
                value: '选项6',
                label: '支付宝'
            }, {
                value: '选项7',
                label: '公交卡'
            }, {
                value: '选项8',
                label: '饭卡'
            }, {
                value: '选项9',
                label: '白条'
            }, {
                value: '选项10',
                label: '信用卡'
            }, {
                value: '选项11',
                label: '应付款项'
            }, {
                value: '选项12',
                label: '公司报销'
            }, {
                value: '选项13',
                label: '应收款项'
            },],
        }
    }
    ,
    methods: {
        geAmount_() {
            return this.Amount.toString()
        },
        getpayment_() {
            return this.payment
        },
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


    .Amount {

        margin-top: .3rem;

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