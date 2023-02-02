<template>
    <div class='basic'>
        <Top></Top>
        <User></User>
        <Line_></Line_>
        <Setting></Setting>
        <Logout></Logout>
    </div>
</template>
<script>

import Top from '@/components/person/Top.vue';
import User from '@/components/person/User.vue';
import Line_ from '@/components/person/Line_.vue';
import Setting from '@/components/person/Setting.vue';
import Logout from '@/components/person/Logout.vue';
export default {
    name: 'person_mini',
    components: {
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
