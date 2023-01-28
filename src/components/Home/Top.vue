<template>
    <div :class="Top" >
        <div class="weather">
            <img class="icon" src="@/assets/svg/Icon.svg" alt="">
            <p class="greet">{{ time }}</p>
        </div>
        <p :class="flag ? 'Hello_dark' : 'Hello'">Hi, Kitsbase!</p>
    </div>
</template>
<script>
export default {
    name: 'Top',
    data() {
        return {
            time_: new Date().getHours()
        }
    }
    ,
    methods: {
    },
    computed: {

        time() {
            let now
            if (this.time_ < 11) {
                now = '早上好'
            } else if (this.time_ < 14) {
                now = '午安'
            } else if (this.time_ < 18) {
                now = '下午好'
            } else if (this.time_ < 24) {
                now = '晚上好'
            }
            return now
        },
        Top() {
            if (this.$store.Transactions_pull === true) {
                return 'Top dark'
            } else {
                return 'Top'
            }
        },
        flag() {
            return this.$store.state.Transactions_pull;
        }
    }
}
</script>
<style lang="less" scoped>
.Top {
    width: 6.54rem;
    height: 1.24rem;
    margin: .48rem;
    margin-bottom: 0.2rem;
    justify-content: space-between;
    margin-bottom: .8rem;

    .weather {
        position: relative;
        left: 0;
        top: 0;
        height: .48rem;
        display: flex;
        flex-direction: row;
        align-items: center;

        .icon {
            width: .48rem;
            height: .48rem;
        }

        .greet {
            color: #4a44c6;
            font-family: Manrope;
            font-size: .24rem;
            font-weight: 700;
            line-height: .32rem;
        }
    }

    .Hello {
        color: #121826;
        font-family: Manrope;
        font-size: .48rem;
        font-weight: 700;
        line-height: .68rem;
    }

    .Hello_dark {
        color: #FFFFFF;
        font-family: Manrope;
        font-size: .48rem;
        font-weight: 700;
        line-height: .68rem;
    }

}
</style>