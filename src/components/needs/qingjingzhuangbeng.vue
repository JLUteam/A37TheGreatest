<template>
    <div class="basic">
        <Category_need></Category_need>
        <Needs_list></Needs_list>
    </div>
</template>
<script>
import Category_need from './Category_need.vue';
import Needs_list from './needs_list.vue';
export default {
    name: "qingjingzhuangbeng",
    data() {
        return {

        };
    },
    components: {
        Category_need,
        Needs_list
    },
    computed: {

    },
};
</script>
<style lang="less" scoped>
.basic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>