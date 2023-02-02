<template>
    <div class="basic">
        <Top_MyAccount></Top_MyAccount>
        <Avator_MyAccount></Avator_MyAccount>
        <Line_></Line_>
        <Person_form></Person_form>
    </div>
</template>
<script>
import Line_ from '@/components/person/Line_.vue';
import Avator_MyAccount from '@/components/person/person_MyAccount/Avator_MyAccount.vue';
import Top_MyAccount from '@/components/person/person_MyAccount/Top_MyAccount.vue'
import Person_form from '@/components/person/person_MyAccount/Person_form.vue'
export default {
    name: "person_Account",
    components: {

    },
    computed: {

    },
    components: {
        Top_MyAccount,
        Avator_MyAccount,
        Line_,
        Person_form
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
