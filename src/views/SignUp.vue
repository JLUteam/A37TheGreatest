<template>
    <div class="basic">
        <MyHeader>
            <template v-slot:tip1>
               开始
            </template>
            <template v-slot:tip2>
               创建属于您个人的账号!
            </template>
        </MyHeader>
        <MyFrom />
        <MySocial />
        <MySignIn>


            <template v-slot:signin>
            已经拥有账号
            </template>
            <template v-slot:Sign_Up>
            登录
            </template>
        </MySignIn>

    </div>

</template>
<script>
import MyHeader from '@/components/SignUp/MyHeader.vue'
import MyFrom from '@/components/SignUp/MyFrom.vue'
import MySocial from '@/components/SignUp/MySocial.vue';
import MySignIn from '@/components/SignUp/MySignIn.vue';
export default {
    name: 'SignUp',
    components: {
        MyHeader,
        MyFrom,
        MySocial,
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
