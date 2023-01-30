<template>
    <div class="back">
        <img src="@/assets/svg/IconsChevron-left.svg" alt="" @click=back()>
    </div>
</template>
<script>
export default {
    name: "back",
    methods: {
        back() {
            this.$router.back(-1)
        }
    }
};
</script>
<style lang="less" scoped>
.back {
    display: flex;
    position: absolute;
    align-items: center;
    left: 0;
    top: 0;
    width: .8rem;
    height: .8rem;
    margin-left: .48rem;
    margin-top: .48rem;
    border-radius: .4rem;
    border: .03rem dashed #f4f4f6;

    img {
        width: .8rem;
        height: .8rem;
    }

}
</style>