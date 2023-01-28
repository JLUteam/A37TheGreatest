<template>
    <div class="summary ">
        <div class="income">
            <div class="img">
                <img src="@/assets/svg/income.svg" alt="" class="icon">
            </div>
            <div class="data">
                <p class="title">收入</p>
                <p class="result">$5,280</p>
            </div>
        </div>
        <div class="Expendituretion">
            <div class="img">
                <img src="@/assets/svg/expense.svg" alt="" class="icon">
            </div>
            <div class="data">
                <p class="title">支出</p>
                <p class="result">$5,280</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Consumption',
    computed: {
        zhenshu() {
            return this.$store.state.total.toFixed(2).split('.')[0]
        },
        xiaoshu() {
            return this.$store.state.total.toFixed(2).split('.')[1]
        },
        present() {
            let present = (this.$store.state.total_yes - this.$store.state.total) / this.$store.state.total_yes * 100;
            return present.toFixed(0)
        }
    },
    methods: {

    },
}
</script>
<style lang="less" scoped>
.summary {
    width: 6.54rem;
    height: 1.44rem;
    display: flex;
    justify-content: space-between;
    align-content: center;

    .income {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 3.12rem;
        height: 1.44rem;
        border-radius: .48rem;
        background: #f3fbed;
        background-blend-mode: normal;

        .img {
            width: .88rem;
            height: .88rem;
            border-radius: .8186rem;
            background: #8ee04e;
            background-blend-mode: normal;

            .icon {
                align-content: center;
                width: .88rem;
                height: .88rem;
            }
        }

        .data {
            height: .8rem;
            display: flex;
            flex-direction: column;

            .title {
                color: #6c727f;
                font-family: Manrope;
                font-size: .24rem;
                font-weight: 400;
                line-height: .32rem;
            }

            .result {
                color: #121826;
                font-family: Manrope;
                font-size: .28rem;
                font-weight: 700;
                line-height: .48rem;
            }
        }
    }

    .Expendituretion {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 3.12rem;
        height: 1.44rem;
        border-radius: .48rem;
        background: #ffefeb;
        background-blend-mode: normal;

        .img {
            width: .88rem;
            height: .88rem;
            border-radius: .8186rem;
            background: #ff6740;
            background-blend-mode: normal;

            .icon {
                align-content: center;
                width: .88rem;
                height: .88rem;
            }
        }

        .data {
            height: .8rem;
            display: flex;
            flex-direction: column;

            .title {
                color: #6c727f;
                font-family: Manrope;
                font-size: .24rem;
                font-weight: 400;
                line-height: .32rem;
            }

            .result {
                color: #121826;
                font-family: Manrope;
                font-size: .28rem;
                font-weight: 700;
                line-height: .48rem;
            }
        }
    }
}
</style>