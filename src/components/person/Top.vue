<template>
    <div class="Top">
        <p class="Profile">个人中心</p>
        <!-- <p class="editProfil">编辑头像</p> -->
    </div>
</template>
<script>
export default {
    name: 'Top',
    data() {
        return {
        }
    }
    ,
    methods: {
    },
    computed: {

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
        float: left;
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