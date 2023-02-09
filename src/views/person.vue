<template>
    <div class='basic'>
        <person_mini></person_mini>
        <ButtomNav></ButtomNav>
    </div>
</template>
<script>

import ButtomNav from '@/components/ButtomNav.vue';
import person_mini from '@/components/person/person_mini.vue';

export default {
    name: 'person',
    components: {
        ButtomNav,
        person_mini
    }
}
</script>
<style lang="less" scoped>
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
