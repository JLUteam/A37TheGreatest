<template>
    <div  :class="flag ? 'Top_dark' : 'Top'">
        <p v-if="!flag">Statistic</p>
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
    width: 5.58rem;
    margin-top: .5rem;

    p {
        color: #121826;
        font-family: Manrope;
        font-size: .36rem;
        font-weight: 700;
        line-height: .56rem;

    }

}
</style>