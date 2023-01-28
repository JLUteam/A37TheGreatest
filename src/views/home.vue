<template>
    <div :class="flag ? 'basic_dark' : 'basic'">
        <Top></Top>
        <Consumption></Consumption>
        <Category_Chart></Category_Chart>
        <ButtomNav></ButtomNav>
        <Transactions></Transactions>
    </div>
</template>
<script>
import ButtomNav from '@/components/Home/ButtomNav.vue';
import Category_Chart from '@/components/Home/Category_Chart.vue';
import Consumption from '@/components/Home/Consumption.vue';
import Top from '@/components/Home/Top.vue';
import Transactions from '@/components/Home/Transactions.vue';
export default {
    name: 'home',
    components: {
        Top,
        Consumption,
        Category_Chart,
        ButtomNav,
        Transactions
    },
    computed: {
        flag() {
            return this.$store.state.Transactions_pull;
        }
    }
}
</script>
<style scoped>
.basic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: #121826; */
}

.basic_dark {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #121826;
}

body {}

::-webkit-scrollbar {
    display: none;

}
</style>
