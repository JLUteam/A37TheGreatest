<template>
    <div :class="flag ? 'basic_dark' : 'basic'">
        <Top></Top>
        <Consumption></Consumption>
        <Category_1></Category_1>
        <Category_Chart></Category_Chart>
        <ButtomNav></ButtomNav>
        <Transactions></Transactions>
    </div>
</template>
<script>
import ButtomNav from '@/components/Percent/ButtomNav.vue';
import Category_1 from '@/components/Percent/Category_1.vue';
import Category_Chart from '@/components/Percent/Category_Chart.vue';
import Consumption from '@/components/Percent/Consumption.vue';
import Top from '@/components/Percent/Top.vue';
import Transactions from '@/components/Percent/Transactions.vue';
export default {
    name: 'Percent',
    components: {
        Top,
        Consumption,
        Category_Chart,
        ButtomNav,
        Transactions,
        Category_1
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
