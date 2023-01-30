<template>
    <div class='basic'>
        <Percent_mini></Percent_mini>
         <ButtomNav></ButtomNav>
    </div>
</template>
<script>
import ButtomNav from '@/components/ButtomNav.vue';
import Percent_mini from '@/components/Percent/Percent_mini.vue';
export default {
    name: 'Percent',
    components: {

        ButtomNav,
        Percent_mini
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

body {}

::-webkit-scrollbar {
    display: none;

}
</style>
