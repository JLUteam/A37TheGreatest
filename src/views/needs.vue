<template>
    <div class=".basic">
        <needs_title></needs_title>
        <router-view></router-view>
        <ButtomNav></ButtomNav>
    </div>
</template>
<script>
import needs_title from "@/components/needs/needs_title.vue";
import ButtomNav from "@/components/ButtomNav.vue";
// import waterfall from "@/components/needs/waterfall.vue";
// import qingjingzhuangbeng from "@/components/needs/qingjingzhuangbeng.vue";
export default {
    name: "needs",
    components: {
        needs_title,
        ButtomNav,
      
    },
    computed: {

    },
};
</script>
<style scoped>
.basic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    /* background-color: #121826; */
}
</style>
