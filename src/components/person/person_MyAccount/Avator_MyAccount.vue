<template>
    <div class="icon">
        <img :src="img" alt="">
        <div class="pie" @click="photo">
            <div class="smallpie">
                <img src="@/assets/svg/photo2.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Avator_MyAccount',
    data() {
        return {
            img: (this.$store.state.userinfo.upic)
        }
    }
    ,
    methods: {
        photo() {
            console.log('相机调用')
        }
    },
    computed: {

    },
    components: {

    }
}
</script>
<style lang="less" scoped>
.icon {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 1.2rem;
    margin-top: 1.5rem;

    img {
        width: 120px;
        height: 120px;
    }

    .pie {
        position: absolute;
        left: 50%;
        top: 25%;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: .75rem;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .smallpie {
            width: 1rem;
            height: 1rem;
            border-radius: .5rem;
            background: #928fff;
            border-radius: .425rem;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: .8rem;
                height: .8rem;
            }
        }
    }


}
</style>