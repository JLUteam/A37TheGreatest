<template>
    <div class="PayState">
        <div class="payment info">
            <p>payment</p>
            <div class="result">
                <p>{{ payment }}</p>
            </div>
        </div>
        <div class="Amount info">
            <p>Amount</p>
            <div class="result">
                <p>{{ Amount }}</p>
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
    computed: {
        payment() {
            return this.recode.payment
        },
        Amount() {
            return this.recode.consumption
        }
    }

};
</script>
<style lang="less" scoped>
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