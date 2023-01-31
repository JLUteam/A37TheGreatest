<template>
    <div class='basic'>
        <Top></Top>
        <User></User>
        <Line_></Line_>
        <Setting></Setting>
        <Logout></Logout>
        <ButtomNav></ButtomNav>
    </div>
</template>
<script>

import ButtomNav from '@/components/ButtomNav.vue';
import Top from '@/components/person/Top.vue';
import User from '@/components/person/User.vue';
import Line_ from '@/components/person/Line_.vue';
import Setting from '@/components/person/Setting.vue';
import Logout from '@/components/person/Logout.vue';
export default {
    name: 'person',
    components: {
        ButtomNav,
        User,
        Top,
        Line_,
        Setting,
        Logout
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
