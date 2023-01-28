<template>
    <div class="basic">
        <MyHeader>
            <template v-slot:tip1>
                欢迎回来
            </template>
            <template v-slot:tip2>
                让我们再度开始吧！
            </template>
        </MyHeader>
        <MyFromSignIn />
        <MySocialSignIn />
        <MySignIn>
            <template v-slot:signin>
                还没有创建账号
            </template>
            <template v-slot:Sign_Up>
                登录
            </template>
        </MySignIn>
    </div>
</template>
<script>
import MyHeader from '../components/MyHeader.vue'
import MyFromSignIn from '../components/MyFrom_SignIn.vue'
import MySocialSignIn from '../components/MySocialSignIn.vue';
import MySignIn from '../components/MySignIn.vue';
export default {
    name: 'SignIn',
    components: {
        MyHeader,
        MyFromSignIn,
        MySocialSignIn,
        MySignIn
    }
}
</script>

<style scoped>
.basic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
