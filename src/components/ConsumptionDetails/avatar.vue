<template>
    <div class="avatar">
        <img :src=img alt="">
        <p>{{name}}</p>
    </div>
</template>
<script>
export default {
    name: "avatar",
    props: ['img','name' ]
};
</script>
<style lang="less" scoped>
.avatar {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-top: 2rem;
    width: 6.54rem;
    height: 1.96rem;

    img {
        width: 1.28rem;
        height: 1.28rem;
    }

    p {
        width: 6.54rem;
        height: .52rem;
        color: #121826;
        font-family: "Manrope-Bold";
        font-size: .32rem;
        font-weight: 400;
        line-height: .52rem;
        text-align: center;
    }
}
</style>