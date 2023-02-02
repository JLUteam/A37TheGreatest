<template>
    <div class="Top">
        <p class="Profile">Settings</p>
        <back />
    </div>
</template>
<script>
import back from "@/components/ConsumptionDetails/back.vue"
export default {
    name: 'Top_MyAccount',
    data() {
        return {
        }
    }
    ,
    methods: {
    },
    computed: {

    },
    components: {
        back
    }
}
</script>
<style lang="less" scoped>
.Top {
    width: 6.54rem;
    height: .56rem;
    margin-top: .5rem;


    .Profile {
        color: #121826;
        font-family: Manrope;
        font-size: .36rem;
        font-weight: 700;
        line-height: .56rem;
        text-align: center;
    }

    .editProfil {
        color: #4a44c6;
        font-family: Manrope;
        font-size: .28rem;
        font-weight: 700;
        line-height: .48rem;
        float: right;
    }

}
</style>