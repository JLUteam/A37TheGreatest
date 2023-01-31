<template>
    <div class="Logout">
        <button class="Logout_button">Logout</button>
    </div>
</template>
<script>
export default {
    name: 'Logout',
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
.Logout {
    position: relative;
    bottom: -6rem;
    .Logout_button {
        width: 6.54rem;
        height: 1.28rem;
        border-radius: .48rem;
        background: #fff;
        border: .1rem solid #f4f4f6;
        color: #932205;
        font-family: Manrope;
        font-size: .32rem;
        font-weight: 700;
        line-height: .52rem;
        text-align: center;
        transition: background .3s;
      
    }

    .Logout_button:hover {
        background: #e9e9ff;
        border: .1rem solid #e9e9ff;
    }
}
</style>