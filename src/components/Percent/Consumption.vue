<template>
    <div class="summary ">
        <div class="income" v-show="!flag">
            <div class="img">
                <img src="@/assets/svg/income.svg" alt="" class="icon">
            </div>
            <div class="data">
                <p class="title">收入</p>
                <p class="result">{{ this.total_income() }}</p>
            </div>
        </div>
        <div class="Expendituretion" v-show="!flag">
            <div class="img">
                <img src="@/assets/svg/expense.svg" alt="" class="icon">
            </div>
            <div class="data">
                <p class="title">支出</p>
                <p class="result">{{ this.total() }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Consumption',
    computed: {
        flag() {
            return this.$store.state.Transactions_pull;
        }
    },
    methods: {
        sum(time) {
            let data = this.$store.state.recodes.filter(item => (item.btime.indexOf(time) != -1))
            return data.reduce((total, item) => {
                return total + -1 * item.amount
            }, 0)
        },
        sum_income(time) {
            let data = this.$store.state.income_statement.filter(item => (item.btime.indexOf(time) != -1))

            return data.reduce((total, item) => {
                return total + item.amount
            }, 0)
        },
        time() {
            let time = []
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let dayOfWeek = date.getUTCDay();
            let day = date.getDate();
            let hour = date.getHours();
            if (this.$store.state.click_time === 'first') {
                for (let i = 0; i <= hour; i++) {
                    //''+year+ '- '+month+' - '+'6'+' '+'17'
                    let temp = '' + year + '-' + month + '-' + day + ' ' + i+':'
                    time.push(temp)

                }

            } else if (this.$store.state.click_time === 'second') {

                time = []
                for (let i = 0; i <= dayOfWeek; i++) {
                    var oneDayTime = 24 * 60 * 60 * 1000;
                    const newDate = new Date(date.getTime() + (i - dayOfWeek) * oneDayTime);
                    month = newDate.getMonth() + 1;
                    day = newDate.getDate();
                    let temp = '' + year + '-' + month + '-' + day
                    time.push(temp)

                }
            } else if (this.$store.state.click_time === 'third') {

                time = []
                for (let i = 0; i <= day; i++) {
                    let temp = '' + year + '-' + month + '-' + i
                    time.push(temp)

                }
            }
            else if (this.$store.state.click_time === 'fourth') {

                time = []
                for (let i = 1; i <= month; i++) {
                    //''+year+ '- '+month+' - '+'6'+' '+'17'
                    let temp = '' + year + '-' + i
                    time.push(temp)

                }
            } else {
                time = []
                for (let i = year - 10; i <= year; i++) {
                    let temp = i
                    time.push(temp)

                }
            }
        
            return time
        },
        total() {
            let sum =0
            for (let i = 0; i < this.time().length;i++){
                sum += this.sum(this.time()[i])
            }
            return sum
        },
        total_income()
        {
            let sum = 0
            for (let i = 0; i < this.time().length; i++) {
                sum += this.sum_income(this.time()[i])
            }
            return sum
        }
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