<template>
    <div class="avatar">
        <img :src=img alt="">
        <input type="text" v-model="name_" ref="name_" />
    </div>
</template>
<script>
export default {
    name: "avatar",
    data() {
        return {
            name_: this.name
        }
    },
    watch: {
        name_: function (val, oldval) {
            this.$parent.getchange(['bname', val, oldval]);
        }
    },
    props: ['img', 'name']
};
</script>
<style lang="less" scoped>
input {
    border: none;
    outline: none;
    padding-left: 2.3rem; // text-align: right;
    background-color: transparent;
    color: #121826;
    font-family: "Manrope-Regular";
    font-size: 0.28rem;
    font-weight: 400;
    line-height: 0.48rem;
    // margin-left: -1.5rem;

}

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