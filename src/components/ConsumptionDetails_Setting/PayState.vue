<template>
    <div class="PayState">
        <div class="payment info">
            <p>支付方式</p>
            <div class="result">
                <input type="text" v-model="payment" placeholder="点此添加" ref="payment_" @click="getpayment_">
            </div>
        </div>
        <div class="Amount info">
            <p>支付金额</p>
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
            Amount: '',
            payment: ''
        }
    },
    methods: {
        geAmount_() {
            return this.Amount
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

            p {
                font-family: "Manrope-Regular";
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;
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