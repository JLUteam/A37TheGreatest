<template>
    <div class="basic">
        <Top_MyAccount></Top_MyAccount>
       <Person_laber></Person_laber>
    </div>
</template>
<script>
import Top_MyAccount from '@/components/person/person_Setting/Top_MyAccount.vue'
import Person_laber from '@/components/person/person_Setting/Person_laber.vue';
export default {
    name: "person_Setting",
    components: {

    },
    computed: {

    },
    components: {
    Top_MyAccount,
    Person_laber
}
};
</script>
<style scoped>
.basic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: #121826; */
}

::-webkit-scrollbar {
    display: none;
}
</style>
